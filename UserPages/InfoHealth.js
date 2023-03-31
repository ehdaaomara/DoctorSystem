import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import * as ImagePicker from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import axios from 'axios';
import PhoneInput from "react-native-phone-number-input";



// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class InfoHealth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }


    render() {
        return (
            <>
                <View style={{ backgroundColor: "#ffff", flex: 1 }}>
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

                            elevation: 15,
                            borderBottomRightRadius: 25,
                            borderBottomLeftRadius: 25,
                        }}>
                            <TouchableOpacity
                             onPress={() => {
                                this.props.navigation.navigate("Tabs")
                                // this.sendData()
                            }}>
                                <Icon name="arrow-left" size={20} style={{ color: "#ffff",marginTop:height*0.022, marginLeft: width * 0.06 }} />
                            </TouchableOpacity>
                            <Text style={{ color: "#ffff", marginLeft: width * 0.1, fontSize: 22, fontWeight: "bold",marginTop:height*0.015 }}>Info about your health</Text>

                        </View>

                    <ScrollView>
                       <Text style={{textAlign:"center",fontSize:20, color:  "#37474f",marginTop:height*0.1}}>1- His blood type: O. </Text>
                       <Text style={{textAlign:"center",fontSize:20, color:  "#37474f"}}>2- Chronic diseases: he has acute gastroenteritis. </Text>
                       <Text style={{textAlign:"center",fontSize:20, color:  "#37474f"}}>3- Diseases that the patient has suffered before: he did not suffer from anything. </Text>
                       <Text style={{textAlign:"center",fontSize:20, color:  "#37474f"}}>4- Hormones: It has a high estrogen level. </Text>




                    </ScrollView>
                </View>


            </>
        )
    }
}