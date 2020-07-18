import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, CheckBox} from 'react-native';
import PhotoUpload from 'react-native-photo-upload'
import Carousel from 'react-native-snap-carousel';
import {ChonseSelect} from 'react-native-chonse-select';
import DatePicker from 'react-native-datepicker';
import {Divider} from 'react-native-elements';

import Global from '../assets/global/Styles';
import Header from '../components/Header';
import StepIndicator from '../components/StepIndicator';
import Dialog from '../components/Dialog';
import DialogHeader from '../components/DialogHeader';
import DialogContent from '../components/DialogContent';
import DialogFooter from '../components/DialogFooter';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import AthenaTextInput from '../components/AthenaTextInput';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';

import frontImage from '../assets/images/placeholder.jpg';
import backImage from '../assets/images/placeholder.jpg';

import front10065Image from '../assets/template/t-10065-front.jpg'
import back10065Image from '../assets/template/t-10065-back.jpg';
import front10073Image from '../assets/template/t-10073-front.jpg';
import front10150Image from '../assets/template/t-10150-front.jpg';
import front10185Image from '../assets/template/t-10185-front.jpg';
import front10250Image from '../assets/template/t-10250-front.jpg';
import front10255Image from '../assets/template/t-10255-front.jpg';
import front10306Image from '../assets/template/t-10306-front.jpg';
import back10306Image from '../assets/template/t-10306-back.jpg';
import front10333Image from '../assets/template/t-10333-front.jpg';
import back10333Image from '../assets/template/t-10333-back.jpg';

const printOptions = {
    design: [{label: '--Please Select--', value: 0},{label: 'My Design($0.00)', value: 1},{label: 'Free Template($0.00)', value: 2},{label: 'Professional Design Service($200.00)', value: 3}],
    size:  [{label: '4.5\" × 12\"', value: 1},{label: '6\" × 12\"', value: 2},{label: '6.5\" × 9\"', value: 3},{label: '6.5\" × 12\"', value: 4},{label: '8\" × 6.5\"', value: 5},{label: '8.5\" × 7\"', value: 6}],
    stock: [{label: '14PT C2S', value: 1},{label: '16PT C2S', value: 2}],
    color: [{label: '4 / 0 (4 color front)', value: 1},{label: '4 / 1', value: 2},{label: '4 / 4', value: 3}],
    coating: [{label: 'Matte', value: 1},{label: 'VS Coating', value: 2},{label: 'VS Coating, Front Only', value: 3}]
}

const templateData = [
    {id: '#10065', category: 'Environmental & Agricultural Non Profit', front: front10065Image, back: back10065Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'},
    {id: '#10073', category: 'Athena & Hein & Ruby & College & University', front: front10073Image, back: back10306Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'},
    {id: '#10150', category: 'Learning Center & Elementary School', front: front10150Image, back: back10306Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'},
    {id: '#10185', category: 'College & University', front: front10185Image, back: back10306Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'},
    {id: '#10250', category: 'College & University', front: front10250Image, back: back10306Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'},
    {id: '#10255', category: 'College & University', front: front10255Image, back: back10306Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'},
    {id: '#10306', category: 'College & University', front: front10306Image, back: back10306Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'},
    {id: '#10333', category: 'College & University', front: front10333Image, back: back10333Image, description: 'This template qualifies for the Every Door Direct Mail® program.\nSelect this template to continue with your order, or go back to view more template options.\nAll template orders receive FREE text and logo customization by a graphic design professional - at no additional charge.'}
]

class DesignPrintPage extends React.Component {   
    constructor (props) {
        super(props);
        this.state = {
            templateVisible: false, selectValue: 0,
            designValue: 0, dateValue: "11-26-2020", sizeValue: 1, stockValue: 1, colorValue: 1, coatingValue: 1,
            switch : [{value:'0', label:'Front'},{value:'1', label:'Back'},{value:'2', label:'Detail'}],
            pdfProofsValue: false, sampleValue: false
        };
    }    
    static navigationOptions = ({navigation}) => {
        return {header:(<Header headerTitle="Design & Print" navigation={navigation} navigate="SelectRoutesPage" backBtn={true} accountBtn={false} />)}
    }
    render() {
        return (
            <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={{marginTop: 15}}><StepIndicator currentPosition={1} /></View>
                <Card width={Global.VW*90}>
                    <CardHeader title="Design Options"/>
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '25%', fontSize: 15, fontWeight: 'normal', color: Global.FONT_COLOR}}>Option</Text>
                            <SelectBox name="design" width="75%" options={printOptions.design} selectedValue={this.state.designValue} onValueChange={(value) => this.setState({ designValue: value })} />
                        </View>
                        {this.state.designValue == 0 ? <View /> :
                        this.state.designValue == 1 ? 
                        <View style={{width: '100%', height: 200, paddingTop: 10, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: Global.VW*80, height: 80, paddingLeft: 5, borderWidth: 1, borderRadius: 5, borderColor: Global.BORDER_COLOR, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <PhotoUpload>
                                    <Image source={frontImage} style={{width: 70, height: 70}} />
                                </PhotoUpload>
                                <View style={{width: Global.VW*80-90, height: 70, justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Front</Text>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>File name: no upload file</Text>
                                </View>
                                {/* <View style={{width: 90, height: 70, justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Button buttonTitle="Upload" width={70} />
                                </View> */}
                            </View>
                            <View style={{width: Global.VW*80, height: 80, paddingLeft: 5, borderWidth: 1, borderRadius: 5, borderColor: Global.BORDER_COLOR, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <PhotoUpload>
                                    <Image source={backImage} style={{width: 70, height: 70}} />
                                </PhotoUpload>
                                <View style={{width: Global.VW*80-90,  height: 70, justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Back</Text>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>File name: no upload file</Text>
                                </View>
                                {/* <View style={{width: 90, height: 70, justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Button buttonTitle="Upload" width={70} />
                                </View> */}
                            </View>
                        </View> :
                        this.state.designValue == 2 ? 
                        <View style={{width: '100%', height: 250, paddingTop: 20, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Carousel ref={(c) => { this._carousel = c; }} data={templateData} renderItem={this.renderItem} sliderWidth={Global.VW*90} itemWidth={240}/>    
                        </View> : 
                        <View style={{width: '100%', height: 150, paddingTop: 10, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '100%', fontSize: 19, fontWeight: 'bold', color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                                Good Choice!
                            </Text>
                            <Text style={{width: '100%', fontSize: 14, color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                                We will be in touch will contact you within 24 hours or the next business day of placing your order.
                            </Text>
                        </View>
                        }    
                        <Button buttonTitle="Upload" width={70} onClick={() => this.setState({templateVisible: true})}/>
                    </CardContent>    
                </Card>  
                <Card width={Global.VW*90}>
                    <CardHeader title="Print Specification"/>
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '100%', fontSize: 15, fontWeight: 'normal', color: Global.FONT_COLOR}}>Target in Mailbox Date</Text>
                        </View>  
                        <View style={{width: '100%', paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '100%', fontSize: 10, color: Global.DARK_GRAY_COLOR}}>Subject to USPS Mail Service Delivery</Text>
                        </View>  
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '25%', fontSize: 15, fontWeight: 'bold', color: Global.FONT_COLOR}}>&nbsp;</Text>
                            <DatePicker style={{width: '75%'}} date={this.state.dateValue}
                                mode="date" placeholder="select date" format="MMMM DD YYYY" minDate="01-01-2010" maxDate="12-31-2030"
                                confirmBtnText="Confirm" cancelBtnText="Cancel"
                                customStyles={{ dateIcon: {position: 'absolute', right: 0, top: 4 },
                                    dateInput: { width: '100%', flex: 1, height: 35, paddingLeft: 0, borderWidth: 1, borderRadius: 5, fontSize: 15, color: Global.DARK_GRAY_COLOR}
                                }}
                                onDateChange={(date) => {this.setState({dateValue: date})}}
                            />
                        </View>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '25%', fontSize: 15, fontWeight: 'normal', color: Global.FONT_COLOR}}>Size</Text>
                            <SelectBox name="size" width="75%" options={printOptions.size} selectedValue={this.state.sizeValue} onValueChange={(value) => this.setState({ sizeValue: value })} />
                        </View>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '25%', fontSize: 15, fontWeight: 'normal', color: Global.FONT_COLOR}}>Stock</Text>
                            <SelectBox name="stock" width="75%" options={printOptions.stock} selectedValue={this.state.stockValue} onValueChange={(value) => this.setState({ stockValue: value })} />
                        </View>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '25%', fontSize: 15, fontWeight: 'normal', color: Global.FONT_COLOR}}>Color</Text>
                            <SelectBox name="design" width="75%" options={printOptions.color} selectedValue={this.state.colorValue} onValueChange={(value) => this.setState({ colorValue: value })} />
                        </View>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '25%', fontSize: 15, fontWeight: 'normal', color: Global.FONT_COLOR}}>Coating</Text>
                            <SelectBox name="design" width="75%" options={printOptions.coating} selectedValue={this.state.coatingValue} onValueChange={(value) => this.setState({ coatingValue: value })} />
                        </View>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '100%', fontSize: 15, fontWeight: 'bold', color: Global.FONT_COLOR}}>Additional Options</Text>
                        </View>  
                        <Divider style={{backgroundColor: Global.DARK_GRAY_COLOR }} />
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '90%', fontSize: 12, fontWeight: 'normal', color: Global.FONT_COLOR}}>PDF Proofs ($5.00)</Text>
                            <CheckBox textID="0" style={{width: '10%'}} value={this.state.pdfProofsValue} onValueChange={() => this.onChangeChecked('pdfProofsValue')} />
                        </View>
                        <View style={{width: '100%', paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '90%', fontSize: 12, fontWeight: 'normal', color: Global.FONT_COLOR}}>Sample of Completed Job ($9.99)</Text>
                            <CheckBox textID="0" style={{width: '10%'}} value={this.state.sampleValue} onValueChange={() => this.onChangeChecked('sampleValue')} />
                        </View>
                    </CardContent>    
                </Card>  
                <Card width={Global.VW*90}>
                    <CardHeader title="Job Name"/>
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder="Job Name(required)" width="90%"/>
                        </View>  
                    </CardContent>
                </Card>
                <View style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                    <Button buttonTitle="Continue to Next Step" width={Global.VW*60} onClick={() => this.props.navigation.navigate("ReviewOrderPage")}/>
                </View>
            </ScrollView>
            <Dialog visible={this.state.templateVisible} width={Global.VW*90} top={130}>
                <DialogHeader title="Template Details" closeVisible={true} onClose={() => this.setState({ templateVisible: false})}/>
                <DialogContent justifyContent='center' alignItems='center'>
                    {this.state.selectValue == 0 ?
                        <Image source={templateData[7].front} resizeMode='contain' style={{borderWidth: 1, width: '100%', height: 200}} />
                    : this.state.selectValue == 1 ?
                        <Image source={templateData[7].back} resizeMode='contain' style={{borderWidth: 1, width: '100%', height: 200}} />
                    : <View style={{borderWidth: 0, width: '100%', height: 200}} >
                        <Text style={{fontSize: 15, fontWeight: 'bold', padding: 10}}>{templateData[7].category}</Text>
                        <Text style={{fontSize: 12, padding: 10}}>{templateData[7].description}</Text>
                    </View>
                    }
                <ChonseSelect height={35} style={{ marginTop: 10, marginBottom: 10 }} data={this.state.switch} initValue={this.state.selectValue} onPress={(item) => this.setState({ selectValue: item.value })}/>
                </DialogContent>
                <DialogFooter>   
                    <TouchableOpacity style={{width:Global.VW*44}} onPress={this.onSavePresenceOfChildren}>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>SELECT</Text>
                    </TouchableOpacity>
                    <View style={{width: 1, height: 35, borderRightWidth: 1, borderColor: Global.WHITE_COLOR}}></View>
                    <TouchableOpacity style={{width:Global.VW*44}} onPress={() => this.setState({ templateVisible: false })}>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                    </TouchableOpacity>
                </DialogFooter>
            </Dialog>  
            </View>
        );
    } 
    renderItem ({item, index}) {
        return (
            <TouchableOpacity>
                <View style={styles.slide}>
                    <Image source={item.front} style={styles.image} />
                    <Text style={styles.title}>{ item.category.length > 15 ? item.category.substring(0, 15) + "..." : item.category }</Text>
                    <Text style={styles.description}>{ item.description.length > 40 ? item.description.substring(0, 40) + "..." : item.description }</Text>
                </View>
            </TouchableOpacity>
        );
    }
    onChangeChecked = (key) => {
        const {pdfProofsValue, sampleValue} = this.state;
        if(key == 'pdfProofsValue') {pdfProofsValue == true ? this.setState({ pdfProofsValue: false }) : this.setState({ pdfProofsValue: true});}
        else if(key == 'sampleValue') {sampleValue == true ? this.setState({ sampleValue: false }) : this.setState({ sampleValue: true});}
    };
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        width: Global.VW * 100,
        height: Global.VW * 100,
        zIndex: 0
    }, 
    slide: {
        width: 240,
        height: 230,
        backgroundColor: '#555555',
        borderRadius: 10,
        shadowColor: Global.BLACK_COLOR,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    image: {
        width: 240, 
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
    },
    title: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: Global.WHITE_COLOR,
        paddingLeft: 10,
        paddingRight: 10
    },
    description: {
        marginTop: 5,
        fontSize: 13,
        color: Global.WHITE_COLOR,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default DesignPrintPage;