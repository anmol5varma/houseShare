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
                <View style={styles.thumbnail}><Image source={{ uri: this.props.src }} /></View>
                <View style={styles.details}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.address}>{this.props.address}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(style);
