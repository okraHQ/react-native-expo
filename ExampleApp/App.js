import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OkraView from "okra";

export default function App() {
  let okraOptions = {
    callback_url: "https://webhook.site/ded54b3f-f4f5-4fa1-86c3-0def6098fb4d",
    clientName: "client",
    color: "#953ab7",
    connectMessage: "Which account do you want to connect with?",
    currency: "NGN",
    env: "production", // for sandbox use production-sandbox
    exp: "2020-08-06",
    filter: {
      banks: ['access-bank', 'guaranty-trust-bank'],
      industry_type: 'all',
    },
    options: {saverid: 'this is it'},
    isCorporate: false,
    key: "fa85e5ce-0e4e-5a88-883d-9ba9b4357683",
    limit: "24",
    logo: "https://cdn.okra.ng/images/icon.svg",
    products: ['auth', 'balance', 'identity', 'transactions'],
    redirect_url: "redirect",
    success_message: "this is the success message",
    success_title: "it has entered success",
    token: "5da6358130a943486f33dced",
    widget_failed: "",
    widget_success: "Your account was successfully linked to Okra, Inc"
  };
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
