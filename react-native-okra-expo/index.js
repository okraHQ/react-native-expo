import React, { Component } from 'react';
import { Platform, Dimensions, ActivityIndicator, View} from 'react-native';
import { WebView } from 'react-native-webview';

export default class OkraView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    width = Math.round(Dimensions.get('window').width);
    height = Math.round(Dimensions.get('window').height);

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
            <View style={{ flex: 1 }}>
            <WebView
                ref={r => (this.webref = r)}
                source={{ uri: 'https://v2-mobile.okra.ng/' }}
                javaScriptEnabled={true}
                injectedJavaScript={this.INJECTED_JAVASCRIPT}
                onLoadEnd={syntheticEvent => {
                    this.webref.injectJavaScript(this.INJECTED_JAVASCRIPT);
                    this.setState({loaded : true})
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
                     }
                }}
            />
            {!this.state.loaded && (<ActivityIndicator
              color="green"
              style={{ position: "absolute", top: this.height/2, left: (this.width/2) - 16, flex: 1,
              justifyContent: 'center',
              alignItems: 'center', }}
              size="large"/>)}
              </View>
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
