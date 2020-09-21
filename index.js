import React, { Component } from 'react';
import { Platform} from 'react-native';
import { WebView } from 'react-native-webview';

export default class OkraView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    json = JSON.stringify({
        callback_url: this.props.callback_url,
        clientName: this.props.client_name || this.props.clientName,
        color: this.props.color,
        connectMessage: this.props.connectMessage || this.props.connect_message,
        currency: this.props.currency,
        env: this.props.env,
        exp: this.props.exp,
        filter: this.props.filter,
        guarantors: this.props.guarantors,
        imei: '',
        isCorporate: this.props.isCorporate || this.props.is_corporate || this.props.corporate,
        isWebview: true,
        key: this.props.public_key,
        limit: this.props.limit,
        logo: this.props.logo,
        products: this.props.products,
        redirect_url: this.props.redirect_url,
        source: Platform.OS === 'android' ? 'rn-android' : 'rn-ios',
        success_message: this.props.success_message,
        success_title: this.props.success_title,
        token: this.props.token,
        widget_failed: this.props.widget_failed,
        widget_success: this.props.widget_success,
      });
    INJECTED_JAVASCRIPT = `openOkraWidget('${this.json}')`;
    render() {
        return (
            <WebView
                ref={r => (this.webref = r)}
                source={{ uri: 'https://v2-app.okra.ng/mobile.html' }}
                javaScriptEnabled={true}
                injectedJavaScript={this.INJECTED_JAVASCRIPT}
                onLoadEnd={syntheticEvent => {
                    this.webref.injectJavaScript(this.INJECTED_JAVASCRIPT);
                }}
                onNavigationStateChange={this.handleWebViewNavigationStateChange}
                onMessage={(event) => {
                    if(event.nativeEvent.data){
                        let response  = JSON.parse(event.nativeEvent.data);
                        if(response.type === "onSuccess"){
                            this.props.onSuccess(response.data)
                        }else if(response.type === "onError"){
                            this.props.onError(response.data)
                        }else{
                            this.props.onClose(response.data)
                        }
                     }else{
                         console.log(event.nativeEvent.type);
                   }
                }}
            />
        );
    }

    handleWebViewNavigationStateChange = newNavState => {
        const { url } = newNavState;
        if (!url) return;

        if (url.includes('shouldClose=true')) {
            this.props.onClose({})
        }
    }
}
