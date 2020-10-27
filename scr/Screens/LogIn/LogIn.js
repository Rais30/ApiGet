import React, {Component} from 'react';
import {
  View,
  Button,
} from 'react-native';
import AsynStorage from '@react-native-async-storage/async-storage';

export default class login extends Component {
  logIn = () => {
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        email: 'rais@gmail.com',
        password: '12345678',
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
          AsynStorage.setItem('token', resJson.token).catch((err) =>
            console.log(err),
          );
          this.props.navigation.replace('Home');
        } else {
          alert('error');
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="login" onPress={() => this.logIn()} />
      </View>
    );
  }
}
