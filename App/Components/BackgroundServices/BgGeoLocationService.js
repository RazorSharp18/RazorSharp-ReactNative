import React, { Component } from 'react';
import RNBackGroundGeoLocation from 'react-native-background-geolocation';

export default class BgGeoLocationService extends Component {
  componentDidMount() {
    // Step 1:  Listen to events:
    RNBackGroundGeoLocation.on('location', this.onLocation.bind(this));
    RNBackGroundGeoLocation.on('motionchange', this.onMotionChange.bind(this));
    RNBackGroundGeoLocation.on('activitychange', this.onActivityChange.bind(this));
    RNBackGroundGeoLocation.on('providerchange', this.onProviderChange.bind(this));

    // Step 2:  #configure:
    RNBackGroundGeoLocation.ready({
      // Geolocation Config
      desiredAccuracy: 0,
      distanceFilter: 10,
      // Activity Recognition
      stopTimeout: 1,
      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      logLevel: RNBackGroundGeoLocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
      // HTTP / SQLite config
      url: 'http://yourserver.com/locations',
      batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
      headers: {              // <-- Optional HTTP headers
        "X-FOO": "bar"
      },
      params: {               // <-- Optional HTTP params
        "auth_token": "maybe_your_server_authenticates_via_token_YES?"
      }
    }, (state) => {
      console.log("- RNBackGroundGeoLocation is configured and ready: ", state.enabled);

      if (!state.enabled) {
        ////
        // 3. Start tracking!
        //
        RNBackGroundGeoLocation.start(function() {
          console.log("- Start success");
        });
      }
    });
  }

  // You must remove listeners when your component unmounts
  componentWillUnmount() {
    RNBackGroundGeoLocation.removeListeners();
  }
  onLocation(location) {
    console.log('- [event] location: ', location);
  }
  onError(error) {
    console.warn('- [event] location error ', error);
  }
  onActivityChange(activity) {
    console.log('- [event] activitychange: ', activity);  // eg: 'on_foot', 'still', 'in_vehicle'
  }
  onProviderChange(provider) {
    console.log('- [event] providerchange: ', provider);
  }
  onMotionChange(location) {
    console.log('- [event] motionchange: ', location.isMoving, location);
  }

  render() {
    return null;
  }
}