import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import * as ImagePicker from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
// import Video from 'react-native-video';
// import axios from 'axios';
import PhoneInput from "react-native-phone-number-input";
// import { Card } from 'react-native-shadow-cards';




// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class HomeAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }


    render() {
        return (
            <>
                <View style={{ backgroundColor: "#F5F4F6", flex: 1 }}>
                   

                        <View style={{
                            height: height * 0.1,
                            width: width,
                            backgroundColor: "#2d5ecc",
                            borderBottomRightRadius: 30,
                            borderBottomLeftRadius: 30,
                            flexDirection: "row",

                        }}>
                            <View style={{ height: height * 0.09, width: width * 0.45 }}>

                                <Text style={{
                                    fontSize: 20, color: "#ffff",
                                    padding: 15,
                                }}>Hi, Doctor</Text>
                            </View>

                            <View style={{ height: height * 0.055, width: width * 0.3, marginLeft: width * 0.1 }}>
                                <Text style={{ fontSize: 10, marginLeft: width * 0.05, marginTop: height * 0.015, color: "#F5F4F6" }}>Current location</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon name='map-marker-alt' size={15} color={"#ffff"}
                                    />
                                    <Text style={{ marginLeft: width * 0.01, color: "#ffff" }}>Kafr el-sheikh</Text>
                                </View>

                            </View>

                            <Icon name='bell' size={20} color={"#ffff"} style={{ marginTop: height * 0.028, marginLeft: width * 0.04 }}
                            />
                            <View style={{ height: height * 0.011, width: width * 0.024, backgroundColor: "red", borderRadius: 10, marginTop: height * 0.028, marginLeft: width * -0.02 }}></View>

                        </View>

                        <View style={{
                            height: height * 0.07,
                            width: width * 0.9,
                            backgroundColor: "#ffff",
                            alignSelf: "center",
                            borderRadius: 20,
                            marginTop: height * -0.023,
                            flexDirection: "row",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,

                            elevation: 9,

                        }}>

                            <Icon name='search' size={20} color={"#2d5ecc"}
                                style={{ padding: 15 }}

                            />

                            <TextInput style={{
                                height: height * 0.07,
                                width: width * 0.76,
                                backgroundColor: "#fff",
                                borderRadius: 20,
                                color: "#2C3D8F",



                            }}
                                placeholder={" Search about name : "}
                                placeholderTextColor={"#8f8f8f"}
                            />
                        </View>

                        <Text style={{ color: "#8f8f8f", marginLeft: width * 0.08, marginTop: height * 0.016, marginBottom: height * 0.005 }}>Your patients :</Text>

                        <View style={{ width: width, height: height * 0.68 }}>
                            <ScrollView>
                                <TouchableOpacity style={{
                                    height: height * 0.2,
                                    width: width * 0.9,
                                    backgroundColor: "#ffff",
                                    alignSelf: "center",
                                    borderRadius: 20,
                                    flexDirection: "row",
                                    shadowColor: "#000",
                                    marginTop: height * 0.005,
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 4.65,

                                    elevation: 8,
                                }}
                                onPress={() => {
                                    // alert("kkk")
                                    this.props.navigation.navigate("page_31")
                                    // this.sendData()
                                }}
                                >
                                    <Image
                                        source={require("../Images/noo.jpg")}
                                        style={{ width: width * 0.35, height: height * 0.15, marginLeft: width * 0.05, marginTop: height * 0.025, borderRadius: 70 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 20, marginTop: height * 0.07, fontWeight: "bold", color: "#37474f", marginLeft: width * 0.045 }}>Ahmed Ibrahim  </Text>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", marginLeft: width * 0.045 }}>from nasr city, egypt</Text>
                                    </View>


                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: height * 0.2,
                                    width: width * 0.9,
                                    backgroundColor: "#ffff",
                                    alignSelf: "center",
                                    borderRadius: 20,
                                    marginTop: height * 0.02,
                                    flexDirection: "row",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 4.65,

                                    elevation: 8,
                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("page_31")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/noo.jpg")}
                                        style={{ width: width * 0.35, height: height * 0.15, marginLeft: width * 0.05, marginTop: height * 0.025, borderRadius: 70 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 20, marginTop: height * 0.07, fontWeight: "bold", color: "#37474f", marginLeft: width * 0.045 }}>Yasser Ahmed  </Text>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", marginLeft: width * 0.045 }}>from kafr elsheikh,</Text>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", textAlign:"center" }}> egypt</Text>

                                    </View>



                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: height * 0.2,
                                    width: width * 0.9,
                                    backgroundColor: "#ffff",
                                    alignSelf: "center",
                                    borderRadius: 20,
                                    marginTop: height * 0.02,
                                    flexDirection: "row",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 4.65,

                                    elevation: 8,

                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("page_31")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/noo.jpg")}
                                        style={{ width: width * 0.35, height: height * 0.15, marginLeft: width * 0.05, marginTop: height * 0.025, borderRadius: 70 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 20, marginTop: height * 0.07, fontWeight: "bold", color: "#37474f", marginLeft: width * 0.045 }}>Mona Sherif  </Text>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", marginLeft: width * 0.045 }}>from El mansoura,</Text>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", textAlign:"center" }}> egypt</Text>

                                    </View>


                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: height * 0.2,
                                    width: width * 0.9,
                                    backgroundColor: "#ffff",
                                    alignSelf: "center",
                                    borderRadius: 20,
                                    marginTop: height * 0.02,
                                    flexDirection: "row",
                                    shadowColor: "#000",
                                    // marginBottom: height * 0.02,
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 4.65,

                                    elevation: 8,
                                    marginBottom:height*0.05

                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("page_31")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/noo.jpg")}
                                        style={{ width: width * 0.35, height: height * 0.15, marginLeft: width * 0.05, marginTop: height * 0.025, borderRadius: 70 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 20, marginTop: height * 0.07, fontWeight: "bold", color: "#37474f", marginLeft: width * 0.045 }}>Menna Elsaid  </Text>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", marginLeft: width * 0.045 }}>from Giza, egypt</Text>
                                    </View>


                                </TouchableOpacity>



                            </ScrollView>
                        </View>



                   
                </View>


            </>
        )
    }
}
// دى تمام ؟
//ايوه buttton go back بقا 
// ابعتى رساله هنا 01030386891  علشان مش فاعم قصدك 
