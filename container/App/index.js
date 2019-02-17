/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from './style'
import Header from '../../component/Header'
import HomeList from '../../component/HomeList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <HomeList />
        <Text style={styles.welcome}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(style);
