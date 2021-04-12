# Okra Widget React Native Expo SDK
![alt text](https://files.readme.io/41dcda7-react-native-black.svg)

React Native SDK for implementing the Okra widget - Okra is a safe and secure web drop-in module and this library provides a front-end web (also available in [iOS](https://github.com/okraHQ/okra-ios-sdk), [Android](https://github.com/okraHQ/okra-android-sdk), and [JavaScript](https://github.com/okraHQ/okra-js)) SDK for [account authentication](https://docs.okra.ng/docs/widget-properties) and [payment initiation](https://docs.okra.ng/docs/creating-a-charge) for each bank that Okra [supports](https://docs.okra.ng/docs/bank-coverage). 

## Try the demo
Checkout the [widget flow](https://okra.ng/) to view how the Okra Widget works. *Click "See How it Works"*

## Before getting started
- Checkout our [get started guide](https://docs.okra.ng/docs/get-started-with-okra) to create your developer account and retrieve your Client Token, API Keys, and Private Keys.
- Create a [sandbox customer](https://docs.okra.ng/docs/creating-sandbox-customers), so you can get connecting immediately. 

*Bonus Points*
- Setup [Slack Notifications](https://docs.okra.ng/docs/slack-integration) so you can see your API call statuses and re-run calls in real-time!

### Get Started
This library would help you add Okra widget to your react native IOS/Android app in no time. This is a react native library for **expo** users to help implement okra widget. If you are **NOT** an expo user, [click here](https://github.com/okraHQ/okra-react-native)

### Get Started
This library would help you add Okra widget to your react native IOS/Android app in no time. 

### Install Okra-Expo
1. install react-native-okra-expo
``` npm
$ npm install react-native-okra-expo@2.1.0
```

### Install react-native-webview, expo-device plugin and expo-constants plugin

1. install react-native-webview
``` npm
npm install --save react-native-webview
```

2. install expo-device
``` npm
npm install --save expo-device
```

3. install expo-constants
``` npm
npm install --save expo-constants
```

### Usage for version 2.0.6-beta.1 and below

``` javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OkraView from 'react-native-okra-expo';

export default function App() {
  return (
    <OkraView
        callback_url=""
        clientName="client"
        color="#953ab7"
        connectMessage="Which account do you want to connect with?"
        currency="USD"
        env="production" // for sandbox use production-sandbox
        exp="2020-08-06"
        filter={{
          banks: ['access-bank', 'guaranty-trust-bank'],
          industry_type: 'all',
        }}
        options={{
          client_id: 'anything',
          client_name: 'John Doe',
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
    />
  );
}
```

### Usage for version 2.0.7-beta.1 and above

``` javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OkraView from 'react-native-okra-expo';

export default function App() {
  var okraOptions = {
    callback_url:"https://webhook.site/ded54b3f-f4f5-4fa1-86c3-0def6098fb4d",
    clientName:"client",
    color:"#953ab7",
    connectMessage:"Which account do you want to connect with?",
    currency:"NGN",
    env:"production", // for sandbox use production-sandbox
    exp:"2020-08-06",
    filter:{
      banks: ['access-bank', 'guaranty-trust-bank'],
      industry_type: 'all',
    },
    options:{saverid: 'this is it'},
    isCorporate:false,
    key:"fa85e5ce-0e4e-5a88-883d-9ba9b4357683",
    limit:"24",
    logo:"https://cdn.okra.ng/images/icon.svg",
    products:['auth', 'balance', 'identity', 'transactions'],
    redirect_url:"redirect",
    success_message:"this is the success message",
    success_title:"it has entered success",
    token:"5da6358130a943486f33dced",
    widget_failed:"",
    widget_success:"Your account was successfully linked to Okra, Inc"
  }
  return (
    <OkraView
    okraOptions={okraOptions}
    onClose={response => {
      console.log('on close');
    }}
    onSuccess={response => {
      console.log('on success', response);
    }}
    onError={response => {
      console.log('on error');
    }}
/>
  );
}
```



## OkraOptions

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------|
|  `key `               | `String`       | true                |  undefined          | Your public key from Okra.
|  `token`              | `String`       | true                |  undefined          | Your pubic Key from okra. Use test key for test mode and live key for live mode
|   `options`           | `Object`        | false               | empty object        | Meta Data for additional information
|  `products`           | `Array[String]`| true                |  undefined          | The Okra products you want to use with the widget.
|  `payment`            | `Booelan`      | false               |                     | Whether you want to initiate a payment (https://docs.okra.ng/docs/payments)
|  `charge `            | `Object`       | false               |                     | Payment charge opject (https://docs.okra.ng/docs/creating-a-charge)
|  `env`                | `String`       | true                |  undefined          | 'production' or 'production-sandbox'
|  `clientName`         | `String`       | true                |  undefined          | Name of the customer using the widget on the application
|  `onClose`            | `function`     | true                |  undefined          | This acts as a callback that gets fired when the OkraView Component has been closed. It is intended to hold your navigation code, to navigate to previous page or any intended page. 

View a complete list of customizable options [here](https://docs.okra.ng/docs/widget-properties)


## Done connecting?
Checkout our [API Overiview](https://docs.okra.ng/docs/api-overview) and see how to use the data you've received and [other products](https://docs.okra.ng/docs/selfie-verification) you can use to create more personalized experiences for your customers!

## Not a developer? 
Get started without writing a single line of code, Try our App Builder! [Click here to get started](https://dash.okra.ng/link-builder)

