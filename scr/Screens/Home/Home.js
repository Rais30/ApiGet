import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"

export class Home extends Component {
  state = {
    token: "",
    data: [],
  };
  componentDidMount() {
      this.ambilData()
  }
  ambilData=()=>{
    AsyncStorage.getItem("token").then((repon)=>{
        console.log("repon si"+repon);
        this.setState({token:repon},()=>this.simpanData())})
    
  }
  simpanData = () => {
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/todo/';
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.state.token,
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({data: resJson});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.state.token}</Text>
      </View>
    );
  }
}

export default Home;