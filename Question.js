import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import * as ImagePicker from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import axios from 'axios';


// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class FemalePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <>
                <View style={{ backgroundColor: "#ffff", flex: 1 }}>

                    <Image
                        source={require("./Images/doctors.png")}
                        style={{ width: width * 0.86, height: height * 0.27, alignSelf: "center", marginTop: height * 0.05 }}
                    />

                    <Text style={{ fontSize: 35, color:"#2d5ecc", fontWeight: "bold", textAlign: "center", marginTop: height * 0.02 }}>Are you ... ?</Text>

                    <TouchableOpacity style={{ height: height * 0.07, width: width * 0.8, borderWidth: 2, borderColor: "#2d5ecc", borderRadius: 30, alignSelf: "center", marginTop: height * 0.03 }}
                         onPress={() => {
                            this.props.navigation.navigate("page_5")
                            // this.sendData()
                        }}
                    >
                        <Text style={{ fontSize: 25, color:"#2d5ecc", textAlign: "center", marginTop: height * 0.01, fontWeight: "bold" }}>Doctor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: height * 0.07, width: width * 0.8, borderWidth: 2, borderColor: "#2d5ecc", borderRadius: 30, alignSelf: "center", marginTop: height * 0.03 }}
                         onPress={() => {
                            this.props.navigation.navigate("page_3")
                            // this.sendData()
                        }}
                    >
                        <Text style={{ fontSize: 25, color: "#2d5ecc", textAlign: "center", marginTop: height * 0.01, fontWeight: "bold" }}>Patient </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ height: height * 0.07, width: width * 0.8, borderWidth: 2, borderColor: "#2d5ecc", borderRadius: 30, alignSelf: "center", marginTop: height * 0.03 }}
                         onPress={() => {
                            this.props.navigation.navigate("page_3")
                            // this.sendData()
                        }}
                    >
                        <Text style={{ fontSize: 25, color: "#2d5ecc", textAlign: "center", marginTop: height * 0.01, fontWeight: "bold" }}>Admin </Text>
                    </TouchableOpacity>


                    <Text style={{ fontSize: 11, textAlign: "center", marginTop: height * 0.05, color: "#4b5566" }}>Doctor-Patient Management System to make it</Text>
                    <Text style={{ fontSize: 11, textAlign: "center", color: "#4b5566" }}> easier for you to deal with medical matters</Text>
                    <Text style={{ fontSize: 11, textAlign: "center", color: "#4b5566" }}>Powered by Microsoft |<Text style={{ color: "#2d5ecc" }}> Privacy and cookies </Text>|</Text>
                    <Text style={{ fontSize: 11, textAlign: "center", color: "#2d5ecc" }}> Terms of use</Text>


                </View>
            </>
        )
    }
}