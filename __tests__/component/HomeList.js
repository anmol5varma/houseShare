/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import HomeList from '../../component/HomeList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../../api/apiHelper', () => ({
  getAllHouseList: () => ({
    data: [{
      "name": "Abc",
      "address": "1234@qq.com",
      "images": {
        "thumbnail": "http://hmp.me/ol6"
      }
    },
    {
      "name": "",
      "address": "",
      "images": {
        "thumbnail": "http://hmp.me/ol6"
      }
    },
    {
      "name": "Aa",
      "address": "As@qq.com",
      "images": {
        "thumbnail": "http://hmp.me/ol5"
      }
    },
    {
      "name": "Edam",
      "address": "Edam@163.com",
      "images": {
        "thumbnail": "http://hmp.me/ol7"
      }
    },
    {
      "name": "",
      "address": "",
      "images": {
        "thumbnail": ""
      }
    }]
  })
}))

it('renders correctly', async () => {
  const tree = await renderer.create(<HomeList />).toJSON();
  expect(tree).toMatchSnapshot();
});
