# BoilerPlate

### Install

- Npm : `$ npm install`

### Fix issue `undefined is not an object(evaluating '_react2.default.ProTypes.number')`

Add ***import PropTypes from 'prop-types'*** in `node_modules/react-native-lyhud/index.js`
Change *** React.PropTypes.* *** to *** PropTypes.* ***

### Fix issue `undefined is not an object(evaluating '_react2.default.ProTypes.string')`

Add ***import PropTypes from 'prop-types'*** in `node_modules/react-native-wowza-gocoder/BroadcastView.js`

Remove `import React, {Component, PropTypes} from 'react'`;
add `import React, {Component} from 'react'`;

Change *** React.PropTypes.* *** to *** PropTypes.* ***

### Run

- Run : `$ react-native run-ios`

### Create View

1. Create Folder and View'sname in `src/scenes`
2. Add your new view(Created View) in `src/routes/config.js`
    example `import { Splash } from '@scenes/Splash';`
3. Create your view's router in ***app*** of `src/routes/config.js`.
    example `splash: createRoute(Splash, 'splash'),`

### Create Modal

1. Create new file and View's name in `src/model`

### Reactive Data - API Publications vs Methods
When retrieving data, always use Meteor data Subscriptions. To get the available Subscriptions & Publications, make a GET request to:

`GET api.domain.com/publications/api-routes`

This returns all Publications & Methods.  For Subscriptions and Viewing data, only Publications matter.  Methods are used for Inserting, Editing and Deleting. Here is an example usage.

https://www.npmjs.com/package/react-native-meteor#example-usage

`export default createContainer(params=>{
  const handle = Meteor.subscribe('todos');
  Meteor.subscribe('settings');

  return {
    todosReady: handle.ready(),
    settings: Meteor.collection('settings').findOne()
  };
}, App)`

For Authorizing, Inserting, Editing and Deleting data, always make API Request POST calls to the Methods returned from `GET api.domain.com/publications/api-routes`

For example, taken from /src/libs/apis.js:

`static saveUserInfo(userId, params) {
  return this.call('saveAppUser', userId, params);
}`

/src/scenes/Splash/Splash.js
`invokeSaveUserInfo() {
  if (gAppStates.user.email) {
    apis.saveUserInfo(gAppStates.user.id, {}).then(() => {
      this.gotoMain();
    }).catch(() => {
      this.gotoMain();
    });
  } else {
    this.gotoMain();
  }
}`
