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


export default class SignDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input_user: '',
            input_sec: "",
            input_id: "",
            input_mail: '',
            input_pass: "",
            input_confirm: '',
            sec: true,
            secure: true,
            co_user: "",
            co_mail: "",
            co_pass: "",
            co_confirm: "",
            co_id: "",
            co_sec: "",
            phone: "",
            statedGender: "",
            number: "",
            co_number: "",
        }
    }



    change() {
        let sec = this.state.sec
        this.setState({ sec: !sec })
    }

    chan() {
        let secure = this.state.secure
        this.setState({ secure: !secure })
    }


    submit() {
        let user = this.state.input_user
        let mail = this.state.input_mail
        let pass = this.state.input_pass
        let confirm = this.state.input_confirm
        var number = this.state.number
        var sec = this.state.input_sec
        var id = this.state.input_id
        var error_count = 0





        //phone
        if (number.length < 11 || number.length > 11) {
            error_count++
            this.setState({ co_number: true })
        } else {

            this.setState({ co_number: false })
        }


        //mail
        if (!mail.includes("@") || !mail.includes(".")) {
            error_count++

            this.setState({ co_mail: true })
        } else {

            this.setState({ co_mail: false })
        }



        let at_index = mail.indexOf('@')
        let dot_index = mail.lastIndexOf('.')

        if (at_index + 1 == dot_index || dot_index < at_index) {
            error_count++
            this.setState({ co_mail: true })
        } else {

            this.setState({ co_mail: false })
        }

        if (mail.trim().length < 5) {
            error_count++

            this.setState({ co_mail: true })
        } else {

            this.setState({ co_mail: false })
        }





        // user name
        if (user.trim().length < 3) {

            error_count++
            this.setState({ co_user: true })
        } else {

            this.setState({ co_user: false })
        }





        //second name
        if (sec.trim().length < 3) {

            error_count++
            this.setState({ co_sec: true })
        } else {

            this.setState({ co_sec: false })
        }





        //id
        if (id.trim().length < 14) {

            error_count++
            this.setState({ co_id: true })
        } else {

            this.setState({ co_id: false })
        }








        //password
        if (pass.length < 6) {
            error_count++
            this.setState({ co_pass: true })
        } else {

            this.setState({ co_pass: false })
        }

        if (pass != confirm || confirm.length < 6) {
            error_count++
            this.setState({ co_confirm: true })
        } else if (pass == "") {

            this.setState({ co_confirm: false })
        } else {
            this.setState({ co_confirm: false })

        }







    }






    render() {
        return (
            <>
                <View style={{ backgroundColor: "#ffff", flex: 1 }}>
                    <ScrollView>


                        <Text style={{ color: "#2d5ecc", textAlign: 'center', fontSize: 35, fontWeight: "bold", marginTop: height * 0.02 }}>SIGN UP</Text>
                        <Image
                            source={require("../Images/Subscriber2.gif")}
                            style={{ width: width * 0.9, height: height * 0.4, marginLeft: width * 0.02 }}
                        />



                        <TextInput style={{
                            height: height * 0.07,
                            alignSelf: 'center',
                            width: width * 0.9,
                            borderWidth: 2,
                            borderRadius: 30,
                            padding: 15,
                            fontSize: 13,
                            color: "#2b308b",
                            marginBottom: this.state.co_user == false ? height * 0.03 : 0,

                            borderColor: this.state.co_user == true ? "#ff0000" :  "#2d5ecc",

                        }}
                            placeholder={"First Name :"}
                            placeholderTextColor={"#8f8f8f"}
                            value={this.state.input_user}
                            onChangeText={(value) => {
                                this.setState({ input_user: value })
                            }}
                        />

                        {this.state.co_user == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginTop: 2, marginLeft: height * 0.05, marginBottom: height * 0.01 }}>Enter a valid name</Text> : null}

                        <TextInput style={{
                            height: height * 0.07,
                            alignSelf: 'center',
                            width: width * 0.9,
                            borderWidth: 2,
                            borderRadius: 30,
                            padding: 15,
                            fontSize: 13,
                            color: "#2b308b",
                            marginBottom: this.state.co_sec == false ? height * 0.03 : 0,

                            borderColor: this.state.co_sec == true ? "#ff0000" :  "#2d5ecc",

                        }}
                            placeholder={"Second Name :"}
                            placeholderTextColor={"#8f8f8f"}
                            value={this.state.input_sec}
                            onChangeText={(value) => {
                                this.setState({ input_sec: value })
                            }}
                        />

                        {this.state.co_sec == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginTop: 2, marginLeft: height * 0.05, marginBottom: height * 0.01 }}>Enter a valid name</Text> : null}





                        <TextInput style={{
                            height: height * 0.07,
                            alignSelf: 'center',
                            width: width * 0.9,
                            borderWidth: 2,
                            borderRadius: 30,
                            padding: 15,
                            fontSize: 13,
                            color: "#2b308b",
                            marginBottom: this.state.co_mail == false ? height * 0.03 : 0,
                            borderColor: this.state.co_mail == true ? "#ff0000" :  "#2d5ecc",


                            // borderRadius: 10, padding: 10, color: "#5c5c5c"
                        }}
                            placeholder={"Email :"}
                            placeholderTextColor={"#8f8f8f"}
                            value={this.state.input_mail}
                            onChangeText={(value) => {
                                this.setState({ input_mail: value })
                            }}
                        />
                        {this.state.co_mail == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginLeft: height * 0.05, marginTop: 2, marginBottom: height * 0.01 }}>Enter a valid mail</Text> : null}



                        <TextInput style={{
                            height: height * 0.07,
                            alignSelf: 'center',
                            width: width * 0.9,
                            borderWidth: 2,
                            borderRadius: 30,
                            padding: 15,
                            fontSize: 13,
                            color: "#2b308b",
                            marginBottom: this.state.co_id == false ? height * 0.03 : 0,

                            borderColor: this.state.co_id == true ? "#ff0000" : "#2d5ecc",

                        }}
                            placeholder={"National ID :"}
                            placeholderTextColor={"#8f8f8f"}
                            value={this.state.input_id}
                            onChangeText={(value) => {
                                this.setState({ input_id: value })
                            }}
                        />

                        {this.state.co_id == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginTop: 2, marginLeft: height * 0.05, marginBottom: height * 0.01 }}>Enter a valid name</Text> : null}




                        <View style={{
                            height: height * 0.07, width: width * 0.9, alignSelf: 'center', marginBottom: 13, borderRadius: 30, color: "#5c5c5c", flexDirection: "row",
                            borderWidth: 2,
                            marginBottom: this.state.co_pass == false ? height * 0.03 : 0,
                            borderColor: this.state.co_pass == true ? "#ff0000" :  "#2d5ecc",



                        }}>

                            <TextInput style={{
                                height: height * 0.055,
                                width: width * 0.8,
                                //    marginBottom: 13,
                                borderRadius: 30,
                                color: "#2b308b",
                                padding: 10,

                            }}
                                placeholder={" Password : "}
                                placeholderTextColor={"#8f8f8f"}
                                secureTextEntry={this.state.sec}
                                // onChangeText={(newpass) => {
                                //     this.setState({ pass: newpass })
                                // }}
                                value={this.state.input_pass}
                                onChangeText={(value) => {
                                    this.setState({ input_pass: value })
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    this.change()
                                }}>
                                <Icon name={this.state.sec ? "eye-slash" : "eye"} size={13} style={{ marginTop: height * 0.022, color: this.state.sec ? "#8f8f8f" : "#fa7d7b", marginLeft: 4 }}
                                />
                            </TouchableOpacity>

                        </View>
                        {this.state.co_pass == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginLeft: height * 0.05, marginTop: 2, marginBottom: height * 0.01 }}>At least six letters or symbols</Text> : null}



                        <View style={{
                            height: height * 0.07, width: width * 0.9, alignSelf: 'center', marginBottom: 13, borderRadius: 30, color: "#5c5c5c", flexDirection: "row",
                            borderWidth: 2,
                            marginBottom: this.state.co_confirm == false ? height * 0.03 : 0,
                            borderColor: this.state.co_confirm == true ? "#ff0000" :  "#2d5ecc",



                        }}>

                            <TextInput style={{
                                height: height * 0.055,
                                width: width * 0.8,
                                //    marginBottom: 13,
                                borderRadius: 30,
                                color: "#2b308b",
                                padding: 10,

                            }}
                                placeholder={" Confirm password : "}
                                placeholderTextColor={"#8f8f8f"}
                                secureTextEntry={this.state.secure}
                                // onChangeText={(newpass) => {
                                //     this.setState({ pass: newpass })
                                // }}
                                value={this.state.input_confirm}
                                onChangeText={(value) => {
                                    this.setState({ input_confirm: value })
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    this.chan()
                                }}>
                                <Icon name={this.state.secure ? "eye-slash" : "eye"} size={13} style={{ marginTop: height * 0.024, color: this.state.secure ? "#8f8f8f" : "#fa7d7b", marginTop: height * 0.02 }}
                                />
                            </TouchableOpacity>

                        </View>
                        {this.state.co_confirm == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginLeft: height * 0.05, marginTop: 2, marginBottom:height * 0.01 }}>The password not matching</Text> : null}


                        <TouchableOpacity style={{ height: height * 0.08, width: width * 0.18, alignSelf: 'center', backgroundColor: "#2d5ecc", marginTop: height * 0.01, borderRadius: 40, marginBottom: height * 0.02 }}
                            onPress={() => {
                                this.submit()
                                    this.props.navigation.navigate("Tabss")
                                    // this.sendData()
                                
                            }}
                        >
                            <Icon name={"angle-right"} style={{ textAlign: 'center', marginTop: height * 0.018, color: "#ffff" }} size={35}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity style={{ marginTop: height * 0.02, width: width * 0.35, height: height * 0.065, borderWidth: 2, borderColor:  "#2d5ecc", alignSelf: "center", borderRadius: 30, marginBottom: height * 0.03 }}
                            onPress={() => {
                                this.props.navigation.navigate("page_5")
                                // this.sendData()
                            }}
                        >
                            <Text style={{ color:  "#2d5ecc", textAlign: 'center', fontSize: 25, fontWeight: "bold", marginTop: height * 0.01 }}>LOGIN</Text>
                        </TouchableOpacity>




                    </ScrollView>
                </View>


            </>
        )
    }
}