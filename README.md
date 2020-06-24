# okra-react-native

This is a react native library for **expo** users to help implement okra widget

### Get Started
This library would help you add Okra widget to your react native android app in no time. All you need to do is ...

### Install
1. Clone the git library using:

``` git
git clone https://github.com/okraHQ/react-native-expo.git
```

2. Pack the library with npm (Inside the root directory):
``` npm
npm pack
```
this would create a `tgz` extention file named `okra-react-native-expo-1.0.0.tgz`. 

3. Install this file in your react native project using the following command:
``` npm
npm install ${path}/okra-react-native-expo-1.0.0.tgz
```
`${path}` refers to the absolute path to the `okra-react-native-expo-1.0.0.tgz` file for example: `C:\Users\Java\Documents\Github\okra-react-native\react-native-okra-react-native\okra-react-native-expo-1.0.0.tgz` where the packed npm module is located. 


### Usage


``` javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {OkraView} from 'okra-react-native-expo';

export default function App() {
  return (
    <OkraView
        callback_url=""
        clientName="client"
        color="#953ab7"
        connectMessage="Which account do you want to connect with?"
        currency="USD"
        env="production"
        exp="2020-08-06"
        filter={{
          banks: ['access-bank', 'guaranty-trust-bank'],
          industry_type: 'all',
        }}
        isCorporate={false}
        public_key="1ee202-332-eued-3d33ee"
        limit="24"
        logo="https://cdn.okra.ng/images/icon.svg"
        products={['auth', 'balance', 'transactions']}
        redirect_url="redirect"
        success_message="this is the success message"
        success_title="it has entered success"
        token="5ecfd65b45006210334e35ce"
        widget_failed=""
        widget_success="Your account was successfully linked to Okra, Inc"
        onClose={response => {
          console.log('it hit on close');
        }}
        onSuccess={response => {
          console.log('it hit on success', response);
        }}
        onError={response => {
          console.log('it hit on error');
        }}
      />Close = {function(){alert("this is my concept")}}
    />
  );
}
```

## OkraOptions

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------|
|  `key `               | `String`       | true                |  undefined          | Your public key from Okra.
|  `token`              | `String`       | true                |  undefined          | Your pubic Key from okra. Use test key for test mode and live key for live mode
|  `products`           | `Array[String]`| true                |  undefined          | The Okra products you want to use with the widget.
|  `env`                | `String`       | true                |  undefined          | 
|  `clientName`         | `String`       | true                |  undefined          | Name of the customer using the widget on the application
|  `onClose`            | `function`     | true                |  undefined          | This acts as a callback that gets fired when the OkraView Component has been closed. It is intended to hold your navigation code, to navigate to previous page or any intended page. 
