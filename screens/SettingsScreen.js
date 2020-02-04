import React from 'react';
import CustomSlider from '../components/customSlider'

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <CustomSlider/>;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
