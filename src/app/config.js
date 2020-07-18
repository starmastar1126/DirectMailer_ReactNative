// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'ws://api.chilll.in/websocket';
if (process.env.NODE_ENV === 'production') {
  METEOR_URL = 'ws://api.chilll.in/websocket'; // your production server url
}

export const settings = {
  env: process.env.NODE_ENV,
  meteor: {
    url: METEOR_URL,
  },

  wowza: {
    hostAddress: '54.183.21.92',
    applicationName: 'live',
    username: 'wowza',
    password: 'i-0f02b9a7cb5fc37b2',
    streamName: 'myStream',
    port: 1935,
    sdkLicenseKey: 'GOSK-3844-0103-E051-F828-BA54',
  },
};

export default settings;
