import React from 'react';
// @ts-ignore
import {AlertNotificationRoot} from 'react-native-alert-notification';
import Page from './Page';

const App = () => {
  return (
    <AlertNotificationRoot
      colors={[
        {
          warning: '#C79E3D',
          label: '#272B31',
          card: '#FFFFFF',
          overlay: '#FFFFFF29',
          success: '#C79E3D',
          danger: '#C79E3D',
          info: '#C79E3D',
          button: 'red',
        },
        {
          warning: '#C79E3D',
          label: 'white',
          card: '#3A3B3C',
          overlay: '#FFFFFF29',
          success: '#C79E3D',
          danger: '#C79E3D',
          info: '#C79E3D',
        },
      ]}>
      <Page />
    </AlertNotificationRoot>
  );
};

export default App;
