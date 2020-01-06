import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class OkraView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            baseUrl: "https://demo-dev.okra.ng/link.html",
            isWebview: true,
            source: 'RN-native',
            okraKey: props.okraKey,
            token: props.token,
            products: props.products,
            clientName: props.clientName,
            uuid: '',
            onWebClose: () => {props.onClose()}
        }
    }

    render() {
        return (
            <WebView
                source={{ uri: this.buildURL()}}
                style={{ marginTop: 20 }}
                onNavigationStateChange={this.handleWebViewNavigationStateChange}
            />
        );
    }

    handleWebViewNavigationStateChange = newNavState => {
        const { url } = newNavState;
        if (!url) return;

        if (url.includes('shouldClose=true')) {
            this.state.onWebClose();
        }
    }

    buildURL = () => {

        const params = {
            isWebview: this.state.isWebview,
            source: this.state.source,
            key: this.state.okraKey,
            token: this.state.token,
            products: this.convertArrayListToString(this.state.products),
            clientName: this.state.clientName,
            uuid: '',
        };

        console.log("params " + params.products)

        let requestParam = Object.keys(params).map(function (key) {
            return [key, params[key]].join("=");
        }).join("&");

        console.log(this.state.baseUrl + "?" + requestParam)

        return this.state.baseUrl + "?" + requestParam;
    }

    convertArrayListToString = (productList) => {

        let formattedArray = "[";

        for (let index = 0; index < productList.length; index++){
            if(index == (productList.length - 1)){
                formattedArray = formattedArray + "\"" + productList[index] + "\"";
            }else {
                formattedArray  = formattedArray + "\"" +  productList[index] + "\""+ ",";
            }
        }
        formattedArray =  formattedArray + "]";
        return formattedArray;
    }
}