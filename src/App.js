import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCKmCaBb_sdWj38tWm7c5rjg1pVkJNFzBc',
      authDomain: 'auth-a6b54.firebaseapp.com',
      databaseURL: 'https://auth-a6b54.firebaseio.com',
      projectId: 'auth-a6b54',
      storageBucket: 'auth-a6b54.appspot.com',
      messagingSenderId: '458974511483'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
