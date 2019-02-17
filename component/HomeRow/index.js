/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import style from './style'

export default class HomeRow extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.thumbnail}><Image source={{uri: 'http://hmp.me/ol7'}}/></View> */}
                <View style={styles.details}>
                    <View style={styles.name}><Text>Anmol</Text></View>
                    <View style={styles.address}><Text>Varma</Text></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(style);
