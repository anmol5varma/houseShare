import { Platform } from 'react-native';

export default {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios: {
        marginTop: 55,
        paddingBottom: 55
      }
    })
  },
  body: {
    flex: 1
  }
}