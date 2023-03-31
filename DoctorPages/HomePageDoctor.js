import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
// import axios from 'axios';
import PhoneInput from "react-native-phone-number-input";

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class HomePageDoctor extends React.Component {
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
                                placeholder={" Search about category : "}
                                placeholderTextColor={"#8f8f8f"}
                            />
                        </View>

                        <Text style={{ color: "#8f8f8f", marginLeft: width * 0.08, marginTop: height * 0.016, marginBottom: height * 0.005 }}>Your Schedule :</Text>

                        <View style={{ width: width, height: height * 0.68 }}>
                            <ScrollView>
                                <TouchableOpacity style={{
                                    height: height * 0.22,
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
                                    this.props.navigation.navigate("page_32")
                                    // this.sendData()
                                }}
                                >
                                    <Image
                                        source={require("../Images/AboutM.png")}
                                        style={{ width: width * 0.4, height: height * 0.2, marginLeft: width * 0.015, marginTop: height * 0.015 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 18, marginTop: height * 0.06, fontWeight: "bold", color: "#37474f" }}>   Information about  </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>      Patient's health</Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>    and body system</Text>
                                    </View>


                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: height * 0.22,
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
                                    this.props.navigation.navigate("page_33")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/advice.png")}
                                        style={{ width: width * 0.4, height: height * 0.2, marginLeft: width * 0.015, marginTop: height * 0.014 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 18, marginTop: height * 0.07, fontWeight: "bold", color: "#37474f" }}>     Your advice to  </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>      your patient</Text>
                                    </View>



                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: height * 0.22,
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
                                    this.props.navigation.navigate("page_34")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/patient.png")}
                                        style={{ width: width * 0.4, height: height * 0.2, marginLeft: width * 0.015, marginTop: height * 0.02 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 18, marginTop: height * 0.06, fontWeight: "bold", color: "#37474f" }}> Special cases and  </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>  chronic diseases  </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>     of the patient</Text>
                                    </View>


                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: height * 0.22,
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

                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("page_35")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/Remedy-pana.png")}
                                        style={{ width: width * 0.4, height: height * 0.2, marginLeft: width * 0.015, marginTop: height * 0.02 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 18, marginTop: height * 0.06, fontWeight: "bold", color: "#37474f" }}>   Medicines and  </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>    when to take   </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>          them</Text>
                                    </View>


                                </TouchableOpacity>


                                <TouchableOpacity style={{
                                    height: height * 0.22,
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

                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("page_36")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/tests.png")}
                                        style={{ width: width * 0.4, height: height * 0.2, marginLeft: width * 0.015, marginTop: height * 0.02 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 18, marginTop: height * 0.06, fontWeight: "bold", color: "#37474f" }}>     Medical tests </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>         and their </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>          results</Text>
                                    </View>


                                </TouchableOpacity>


                                <TouchableOpacity style={{
                                    height: height * 0.22,
                                    width: width * 0.9,
                                    backgroundColor: "#ffff",
                                    alignSelf: "center",
                                    borderRadius: 20,
                                    marginTop: height * 0.02,
                                    flexDirection: "row",
                                    shadowColor: "#000",
                                    marginBottom: height * 0.05,
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 4.65,

                                    elevation: 8,

                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("page_37")
                                    // this.sendData()
                                }}
                                >

                                    <Image
                                        source={require("../Images/Lungs-rafiki.png")}
                                        style={{ width: width * 0.4, height: height * 0.23, marginLeft: width * 0.015 }}
                                    />
                                    <View >
                                        <Text style={{ fontSize: 18, marginTop: height * 0.06, fontWeight: "bold", color: "#37474f" }}>  Medical radiology </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>         and their </Text>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#37474f" }}>          results</Text>
                                    </View>


                                </TouchableOpacity>

                            </ScrollView>
                        </View>



                </View>


            </>
        )
    }
}