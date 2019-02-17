/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import style from './style'
import Header from '../../component/Header'
import HomeRow from '../../component/HomeRow'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <HomeRow />
        <Text style={styles.welcome}>Anmol</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(style);
