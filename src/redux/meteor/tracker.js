import Meteor, { Tracker } from 'react-native-meteor';
import _ from 'lodash';
import { getStore } from '@app/storevar';
import { shallowEqual } from '../utils';
import actions from './actions';

const meteorData = Meteor.getData();

class MeteorTrack {
  instances = 0;
  handles = [];
  getTrackData = () => {};
  getStateData = () => {};
  actionType = '';
  trackDep = undefined;
  computation = undefined;

  constructor(getter, older, action) {
    this.getTrackData = getter;
    this.getStateData = older;
    this.actionType = action;
  }

  startTrack() {
    const store = getStore();

    if (this.computation) {
      this.instances += 1;

      const newStatus = this.getTrackData(this);
      store.dispatch(actions.dataChanged(newStatus));
      return;
    }

    this.instances = 1;

    this.trackDep = new Tracker.Dependency();
    this.computation = Tracker.nonreactive(() => Tracker.autorun(() => {
      this.trackDep.depend();

      const oldStatus = this.getStateData(store.getState().meteor);
      const newStatus = this.getTrackData(this);
      if (!shallowEqual(oldStatus, newStatus)) {
        store.dispatch(actions.dataChanged(newStatus));
      }
    }));
  }

  stopTrack() {
    this.instances -= 1;
    if (this.instances > 0) {
      return;
    }

    _.forEach(this.handles, (handle) => {
      handle.stop();
    });

    if (this.computation) {
      this.computation.stop();
      this.computation = undefined;
      this.trackDep = undefined;
    }

    this.handles = [];
    this.instances = 0;
  }
}

function getStatusTrackData(track) {
  track.handles = [];
  return {
    status: Meteor.status(),
  };
}
function getStatusState(state) {
  return {
    status: state.status,
  };
}

function getSongsTrackData(track) {
  const songsHandle = Meteor.subscribe('getSongs');
  const songsList = Meteor.collection('Songs').find({});

  track.handles = [songsHandle];

  return {
    songs: songsList,
  };
}
function getSongsState(state) {
  return {
    songs: state.songs,
  };
}

const tracks = {
  status: new MeteorTrack(getStatusTrackData, getStatusState),
  songs: new MeteorTrack(getSongsTrackData, getSongsState),
};

meteorData.waitDdpReady(() => {
  meteorData.onChange(() => {
    _.forEach(tracks, (track) => {
      track.trackDep && track.trackDep.changed(); // eslint-disable-line
    });
  });
});

export default {
  startStatusTrack() {
    tracks.status.startTrack();
    console.log('startStatusTrack, instances = ', tracks.status.instances);
  },

  stopStatusTrack() {
    tracks.status.stopTrack();
    console.log('stopStatusTrack, instances = ', tracks.status.instances);
  },

  startSongsTrack() {
    tracks.songs.startTrack();
    console.log('startSongsTrack, instances = ', tracks.songs.instances);
  },

  stopSongsTrack() {
    tracks.songs.stopTrack();
    console.log('stopSongsTrack, instances = ', tracks.songs.instances);
  },
};
