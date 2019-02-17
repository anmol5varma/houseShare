/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import HomeRow from '../../component/HomeRow';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<HomeRow name='Test name' address='Test address' src='sample image' />).toJSON();
  expect(tree).toMatchSnapshot();
});
