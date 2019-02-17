/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, ListView, View } from 'react-native';
import HomeRow from '../HomeRow'
import { getAllHouseList } from '../../api/apiHelper'
import style from './style'

export default class HomeList extends Component {
    constructor() {
        super()
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }
    async componentWillMount() {
        const houseList = await getAllHouseList()
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
            dataSource: ds.cloneWithRows(houseList.data),
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <HomeRow name={rowData.name} address={rowData.address} src={rowData.images.thumbnail}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(style);
