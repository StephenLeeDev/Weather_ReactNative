import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e'; //A key for using weather API.

export default class extends React.Component {
  state = {
    //A state to determine if it is loading or not.
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    //A function to get weather information in this place.
    const {
      data: {
        main: {temp},
        weather,
      },
    } = await axios.get(
      //An URL to get weather information in this place.
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main, //An view to represent the current weather information.
      temp, //Current temperature.
    });
  };
  getLocation = async () => {
    //A function to get exact coordinates here.
    try {
      await Location.requestPermissionsAsync(); //Asks the user to grant permissions for location.
      const {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync(); //Get coordinates.
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? (
      <Loading /> //Loading page.
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} /> //Weather page.
    );
  }
}
