import React, { Component } from 'react';
import { Text } from 'react-native';

export default class SplashScreen extends Component {
     constructor(props){
         super(props);
     }

     render(){
         return (
            <React.Fragment>
              <Text>Home Screen</Text>
            </React.Fragment>
          );
     }
}