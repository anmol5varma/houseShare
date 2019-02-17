/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import HomeRow from '../HomeRow'
import { getAllHouseList } from '../../api/apiHelper'
import style from './style'

const styles = StyleSheet.create(style);

export default class HomeList extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
        };
    }
    async componentWillMount() {
        const defaultValue = {
            "name": "Owner name",
            "address": "House address",
            "images": {
                "thumbnail": "http://hmp.me/ol6"
            }
        }
        let houseList = await getAllHouseList()
        houseList.data = houseList.data.map(eachHouseDetail => {
            if (!eachHouseDetail.name)
                eachHouseDetail.name = defaultValue.name
            if (!eachHouseDetail.address)
                eachHouseDetail.address = defaultValue.address
            if (!eachHouseDetail.images.thumbnail)
                eachHouseDetail.images.thumbnail = defaultValue.images.thumbnail
            return eachHouseDetail
        })
        this.setState({
            dataSource: houseList.data,
        });
    }
    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                keyExtractor={(item, index) => 'key'+index}
                renderItem={({ item }) => <HomeRow key={`${item.name}_${item.address}`} name={item.name} address={item.address} src={item.images.thumbnail} />
                }
            />
        );
    }
}
