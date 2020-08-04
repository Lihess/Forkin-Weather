import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "d8d02844accc5f9bea11da312d3919fd";

export default class extends React.Component {
  state = {
    isLoading : true
  }

  getWeather = async(latitude, longitude) => {
    const {
      data : {
        main : {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading : false,
      condition : weather[0].main,
      temp
    });
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      // 허가 안 주면 에러 발생. 그래서 try-catch 안에서 써야함.
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      // 해당 객체 안의 해당 이름의 객체나 변수를 가져옴
    }
    catch(error){
      Alert.alert("Can't find you", "So Sad");
      
    }
  } // 동기였던가~~ 그 걍 기다리는 그런거.
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;

    return isLoading ? <Loading/> : <Weather temp = {Math.round(temp)} condition = {condition}/>;
  }
}