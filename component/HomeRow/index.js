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

const styles = StyleSheet.create(style);
export default class HomeRow extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View><Image style={styles.thumbnail} source={{ uri: this.props.src }} /></View>
                <View style={styles.details}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.address}>{this.props.address}</Text>
                </View>
            </View>
        );
    }
}
