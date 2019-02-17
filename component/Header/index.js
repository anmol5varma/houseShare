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

const styles = StyleSheet.create(style);

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>List of Properties</Text>
            </View>
        );
    }
}
