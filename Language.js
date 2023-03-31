import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import * as ImagePicker from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import axios from 'axios';
import CheckBox from 'react-native-check-box'


// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class Language extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:true,
            sec:true
        }
    }
    change1() {
        let show = this.state.show
        this.setState({ show: !show })
    }
    change2() {
        let sec = this.state.sec
        this.setState({ sec: !sec })
    }

    render() {
        return (
            <>
                <View style={{ backgroundColor: "#F5F4F6", flex: 1 }}>
                    <ScrollView>
                        <View style={{
                            flexDirection: "row",
                            backgroundColor:  "#2d5ecc",
                            marginBottom: height * 0.045,
                            height: height * 0.075,
                            width: width,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 1.170,
                            shadowRadius: 7.65,

                            elevation: 15,  borderBottomRightRadius: 25,
                            borderBottomLeftRadius: 25,
                        }}>
                            <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("page_20")
                                // this.sendData()
                            }}>
                                <Icon name="arrow-left" size={20} style={{ color: "#ffff", marginTop: height * 0.022, marginLeft: width * 0.06 }} />
                            </TouchableOpacity>
                            <Text style={{ color: "#ffff", marginLeft: width * 0.035, fontSize: 22, fontWeight: "bold", marginTop: height * 0.015 }}>Language</Text>

                        </View>

                        <View style={{
                                height: height * 0.07,
                                width: width * 0.9,
                                backgroundColor: "#ffff",
                                alignSelf: "center",
                                borderRadius: 15,
                                flexDirection: "row",
                                shadowColor: "#000",
                                marginTop:height*0.025,
                                marginBottom: height * 0.025,
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                            }}
                            >


                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{fontSize:20,marginTop:height*0.015,marginLeft:width*0.04,fontWeight:"bold",color:  "#2d5ecc"}}>English</Text>
                                    <TouchableOpacity style={{height:height*0.03,width:width*0.065,borderWidth:2,borderColor:  "#2d5ecc",borderRadius:15,marginLeft:width*0.56,marginTop:height*0.02}}
                                     onPress={() => {
                                        this.setState({ show: true })       
                                        this.change1()


                                    }}
                                    >
                                        {this.state.show==false?(
                                            <>
                                            </>
                                        ):
                                        <Icon name='check' size={13} style={{padding:3,color: "#2d5ecc"}} />

                                        }
                                    </TouchableOpacity>
                                    {/* <Icon name="true" size={20} style={{ color: "#2C3D8F", padding: 15, marginLeft: width * 0.02 }} /> */}
                                </View>

                            </View>


                            <View style={{
                                height: height * 0.07,
                                width: width * 0.9,
                                backgroundColor: "#ffff",
                                alignSelf: "center",
                                borderRadius: 15,
                                flexDirection: "row",
                                shadowColor: "#000",
                                marginBottom: height * 0.025,
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                              
                            }}
                            >


                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{fontSize:20,marginTop:height*0.015,marginLeft:width*0.04,fontWeight:"bold",color:  "#2d5ecc"}}>Arabic</Text>
                                    <TouchableOpacity style={{height:height*0.03,width:width*0.065,borderWidth:2,borderColor:  "#2d5ecc",borderRadius:15,marginLeft:width*0.585,marginTop:height*0.02}}
                                     onPress={() => {
                                        this.setState({ sec: false })       
                                        this.change2()


                                    }}
                                    >
                                        {this.state.sec==true?(
                                            <>
                                            </>
                                        ):
                                        <Icon name='check' size={13} style={{padding:3,color:  "#2d5ecc"}} />

                                        }
                                    </TouchableOpacity>
                                    {/* <Icon name="true" size={20} style={{ color: "#2C3D8F", padding: 15, marginLeft: width * 0.02 }} /> */}
                                </View>

                                

                            </View>



                    </ScrollView>


                </View>
            </>
        )
    }
}