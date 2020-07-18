import React from 'react';
import {StyleSheet, View, Text, WebView, TouchableOpacity, CheckBox } from 'react-native';

import Global from '../assets/global/Styles';

import AthenaHeader from '../components/AthenaHeader';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaButton from '../components/AthenaButton';

const routesData = {
    residentialValue: 1063, businessValue: 35, poBoxesValue: 1421
}

class SelectRoutesPage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {residentialChecked: true, residentialValue: 10000, businessChecked: false, businessValue: 0, poBoxesChecked: false, poBoxesValue: 0,
            showHide: '', collapseIcon: '⌃', residentialChecked: true, residentialDisabled: true
        }
        this.onBusinessChecked = this.onBusinessChecked.bind(this);
        this.onPoBoxesChecked = this.onPoBoxesChecked.bind(this);
    }  
    onBusinessChecked(value){
        const {businessChecked} = this.state;
        businessChecked == true ? this.setState({ businessChecked: false }) : this.setState({ businessChecked: true})
        businessChecked == true ? this.setState({ businessValue: 0 }) : this.setState({ businessValue: value})
    }
    onPoBoxesChecked(value){
        const {poBoxesChecked} = this.state;
        poBoxesChecked == true ? this.setState({ poBoxesChecked: false }) : this.setState({ poBoxesChecked: true})
        poBoxesChecked == true ? this.setState({ poBoxesValue: 0 }) : this.setState({ poBoxesValue: value})
    }

    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Select Routes" navigation={navigation} navigate="GetStartPage" menu={false} />)}
    }
    onButtonClick = () => {
        this.props.navigation.navigate("LoginPage")
    }  
    onCollapseButtone = () => {
        const {collapseIcon} = this.state;
        if(collapseIcon === '⌃'){
            this.setState({showHide: styles.hide});
            this.setState({collapseIcon: '⌄'});
        } else {
            this.setState({showHide: ''});
            this.setState({collapseIcon: '⌃'})
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.routesPanel}>
                    <TouchableOpacity onPress={this.onCollapseButtone}>
                        <View style={styles.routesHeader}>
                            <View><Text style={styles.tdHeader}>Selection Summary</Text></View>
                            <View style={{width: 10}}>
                            <TouchableOpacity>
                                <Text style={{fontSize: 18, color: Global.WHITE_COLOR}}>{this.state.collapseIcon}</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.routesMain, this.state.showHide]}>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.showHide === '' ? <CheckBox style={styles.tdCheck} value={this.state.residentialChecked} disabled={this.state.residentialDisabled} />: <View />}
                            <Text style={styles.tdTitle}>Residential(Required)</Text>
                            <Text style={styles.tdContent}>{routesData.residentialValue}</Text>
                        </View>
                        <View style={styles.trDiv}>
                            {this.state.showHide === '' ? <CheckBox style={styles.tdCheck} value={this.state.businessChecked} onValueChange={() => this.onBusinessChecked(routesData.businessValue)} />: <View />}
                            <Text style={styles.tdTitle}>Business</Text>
                            <Text style={styles.tdContent}>{this.state.businessValue}</Text>
                        </View>
                        <View style={styles.trDiv}>
                            {this.state.showHide === '' ? <CheckBox style={styles.tdCheck} value={this.state.poBoxesChecked} onValueChange={() => this.onPoBoxesChecked(routesData.poBoxesValue)} />: <View />}
                            <Text style={styles.tdTitle}>PO Boxes</Text>
                            <Text style={styles.tdContent}>{this.state.poBoxesValue}</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <Text style={styles.tdTotal}>Total:</Text>
                            <Text style={styles.tdTotal}>{routesData.residentialValue + this.state.businessValue + this.state.poBoxesValue}</Text>
                        </View>
                        <View style={{width: '100%', marginTop: 15, flexDirection: 'row'}}>
                            <AthenaTextInput placeholder="Input Map Name" width="100%" />
                        </View>           
                        <View style={{justifyContent: 'center', alignItems: 'center', width:'100%', marginTop: 10, marginBottom: 10}}>
                            <AthenaButton buttonTitle="Save & Continue" onClick={this.onButtonClick}/>
                        </View> 
                    </View>
                </View>
                <WebView
                    source={{uri:'file:///android_asset/region.html'}}
                    // javaScriptEnabled={true}
                    // domStorageEnabled={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // ...StyleSheet.absoluteFillObject,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    routesPanel: {
        position: 'absolute',
        width: '80%',
        right: 0,
        marginTop: 0,
        backgroundColor: '#FFFFFF',
        zIndex: 99,
        borderWidth: 1,
        borderColor: Global.RIGHT_BLUE_COLOR,
        borderBottomStartRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    routesHeader: {
        width: '100%',
        height: 30,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: Global.DARK_BLUE_COLOR,
        backgroundColor: Global.RIGHT_BLUE_COLOR,
        zIndex: 99,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    routesMain: {
        width: '100%',
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
        borderWidth: 1,
        borderColor: Global.DARK_BLUE_COLOR,
        backgroundColor: Global.WHITE_COLOR,
        zIndex: 99,
        paddingLeft: 10,
        paddingRight: 10,
    },
    tdHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Global.FORE_COLOR,
    },  
    trDiv:{
        flexDirection: 'row', 
        height: 35, 
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Global.DARK_BLUE_COLOR,
    },
    tdCheck: {
        width: '15%'
    },
    tdTitle: {
        flex: 1, 
        fontSize: 12, 
        color: Global.BLACK_COLOR
    },
    tdContent: {
        width: '20%', 
        textAlign: 'right', 
        fontSize: 12, 
        color: Global.BLACK_COLOR
    },
    tdTotal: {
        width: '40%', 
        textAlign: 'center', 
        fontSize: 20, 
        color: Global.DARK_GRAY_COLOR
    },

    map: {
    ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    closeButton: {
      width: 25, 
      height: 25, 
    //   borderWidth: 1, 
      borderColor: Global.DARK_BLUE_COLOR,
      backgroundColor: Global.BUTTON_COLOR,
      borderRadius: 18, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    hide: {
        display: 'none'
    }
});

export default SelectRoutesPage;