# Chill-Mobile
### Install

- Npm : `$ npm install`

### Fix issue `undefined is not an object(evaluating '_react2.default.ProTypes.number')`

Add ***import PropTypes from 'prop-types'*** in `node_modules/react-native-lyhud/index.js`
Change *** React.PropTypes.* *** to *** PropTypes.* ***

### Fix issue `undefined is not an object(evaluating '_react2.default.ProTypes.string')`

Add ***import PropTypes from 'prop-types'*** in `node_modules/react-native-wowza-gocoder/BroadcastView.js`

Remove `import React, {Component, PropTypes} from 'react'`;
Change *** React.PropTypes.* *** to *** PropTypes.* ***

Add ***import PropTypes from 'prop-types'*** in `node_modules/react-native-easy-markdown/index.js`
Change *** React.PropTypes.* *** to *** PropTypes.* ***

### Run

- Run : `$ react-native run-ios`
