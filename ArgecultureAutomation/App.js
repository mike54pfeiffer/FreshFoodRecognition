import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Switch, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, {Marker} from 'react-native-maps';
import PubNubReact from 'pubnub-react';

constructor(props)
{
  super(props);
  this.pubnub = new PubNubReact({
    publishKey: "pub-c-fd73ae8e-d33b-486a-9bd5-14bd887db05d",
    subscribeKey: "sub-c-5e77b26a-4586-11ea-afa6-0abb81b5425e"
  });
  this.pubnub.init(this);
}

constructor(props)
{
  super(props);
  this.pubnub = new PubNubReact({
    publishKey: "pub-c-fd73ae8e-d33b-486a-9bd5-14bd887db05d",
    subscribeKey: "sub-c-5e77b26a-4586-11ea-afa6-0abb81b5425e"
  });
  //Base State
  this.state = {
    currentLoc: { //Track user's current location
      latitude: -1,
      longitude: -1
      },
    numUsers: 0, //track number of users on the app
    username: "A Naughty Moose", //user's username
    fixedOnUUID: "",
    focusOnMe: false, //zoom map to user's current location if true
    users: new Map(), //store data of each user in a Map
    isFocused: false, 
    allowGPS: true, //toggle the app's ability to gather GPS data of the user
  };
  this.pubnub.init(this);
}