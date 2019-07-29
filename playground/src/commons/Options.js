const { Navigation } = require('react-native-navigation');
const Colors = require('./Colors');

const setDefaultOptions = () => Navigation.setDefaultOptions({
  layout: {
    componentBackgroundColor: Colors.background,
    backgroundColor: Colors.background,
    orientation: ['portrait']
  },
  bottomTabs: {
    animate: true,
    titleDisplayMode: 'alwaysShow'
  },
  bottomTab: {
    selectedIconColor: Colors.primary,
    selectedTextColor: Colors.primary
  }
});

module.exports = {
  setDefaultOptions
}
