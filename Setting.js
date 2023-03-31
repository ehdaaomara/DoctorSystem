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


export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    nameIcon: "user",
                    text: "Profile"
                },
                {
                    nameIcon: "qrcode",
                    text: "QR code"
                },
                {
                    nameIcon: "globe",
                    text: "Language"
                },

                {
                    nameIcon: "credit-card",
                    text: "Payments"

                },
                {
                    nameIcon: "arrow-right",
                    text: "Log out"

                },
                {
                    nameIcon: "question",
                    text: "Ask a question"
                },
                {
                    nameIcon: "lock",
                    text: "Privacy and security"

                },

            ]


        }
    }


    render() {
        return (
            <>
                <View style={{ backgroundColor: "#F5F4F6", flex: 1 }}>
                    <ScrollView>

                        <View style={{
                            flexDirection: "row",
                            backgroundColor: "#2d5ecc",
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
                                    // this.props.navigation.navigate("Homee")
                                    // this.sendData()
                                }}
                            >
                                <Icon name="arrow-left" size={20} style={{ color: "#ffff", marginTop: height * 0.022, marginLeft: width * 0.06 }} />
                            </TouchableOpacity>
                            <Text style={{ color: "#ffff", marginLeft: width * 0.035, fontSize: 22, fontWeight: "bold", marginTop: height * 0.015 }}>Settings</Text>

                        </View>



                        <TouchableOpacity style={{
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
                                <Icon name="user" size={20} style={{ color: "#2d5ecc", padding: 15, marginLeft: width * 0.02 }} />
                                <Text style={{ fontSize: 18, marginTop: height * 0.015 }}>Profile</Text>
                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity style={{
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
                                <Icon name="qrcode" size={20} style={{ color: "#2d5ecc", padding: 15, marginLeft: width * 0.02 }} />
                                <Text style={{ fontSize: 18, marginTop: height * 0.015 }}>QR code</Text>
                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity style={{
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

                        onPress={() => {
                            this.props.navigation.navigate("page_21")
                            // this.sendData()
                        }}
                        >


                            <View style={{ flexDirection: "row" }}>
                                <Icon name="globe" size={20} style={{ color: "#2d5ecc", padding: 15, marginLeft: width * 0.02 }} />
                                <Text style={{ fontSize: 18, marginTop: height * 0.015 }}>Language</Text>
                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity style={{
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
                                <Icon name="credit-card" size={20} style={{ color: "#2d5ecc", padding: 15, marginLeft: width * 0.02 }} />
                                <Text style={{ fontSize: 18, marginTop: height * 0.015 }}>Payments</Text>
                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity style={{
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

                        onPress={() => {
                            this.props.navigation.navigate("page_3")
                            // this.sendData()
                        }}
                        >


                            <View style={{ flexDirection: "row" }}>
                                <Icon name="arrow-right" size={20} style={{ color: "#2d5ecc", padding: 15, marginLeft: width * 0.02 }} />
                                <Text style={{ fontSize: 18, marginTop: height * 0.015 }}>Log out</Text>
                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity style={{
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
                                <Icon name="question" size={20} style={{ color: "#2d5ecc", padding: 15, marginLeft: width * 0.02 }} />
                                <Text style={{ fontSize: 18, marginTop: height * 0.015 }}>Ask a question</Text>
                            </View>

                        </TouchableOpacity>



                        <TouchableOpacity style={{
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
                                <Icon name="lock"
                                    size={20} style={{ color: "#2d5ecc", padding: 15, marginLeft: width * 0.02 }} />
                                <Text style={{ fontSize: 18, marginTop: height * 0.015 }}>Privacy and security</Text>
                            </View>

                        </TouchableOpacity>
                        {/* ))} */}





                    </ScrollView>
                </View>


            </>
        )
    }
}