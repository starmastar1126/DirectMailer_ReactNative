import React from 'react';
// import {StyleSheet, View} from 'react-native';

import L from 'leaflet';

const position = [51.505, -0.09]
const map = L.map('map').setView(position, 13)

class MapPage extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return( <div id="map"></div>)
  }
}


// import MapView from 'react-native-maps';

// export default class MapPage extends React.Component {
//   render() {
//     return (
//       <View style={styles.mapContainer}>
//         <MapView style={styles.map}
//           region={{
//             latitude: 59.32932349999999,
//             longitude: 18.068580800000063,
//             latitudeDelta: 0.1,
//             longitudeDelta: 0.1
//           }}
//         >
//           <MapView.Marker
//             coordinate={{
//               latitude: 59.32932349999999,
//               longitude: 18.068580800000063
//             }}
//             title={'Athena Marker Title'}
//             description={'Athena Marker Description'}
//           />
//         </MapView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mapContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0
//   }
// });

export default MapPage;