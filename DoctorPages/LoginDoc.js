import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image, ImageBackground, Dimensions, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as ImagePicker from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import axios from 'axios';
import PhoneInput from "react-native-phone-number-input";



// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class LoginDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input_mail: '',
            input_pass: "",
            input_confirm: '',
            sec: true,
            secure: true,
            co_mail: "",
            co_pass: "",
            co_confirm: "",
            photo_uri: "",
            shoe: true

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



    componentDidMount() {
        this.requestCameraPermission()
    }


    //the requestCameraPermission method for ask the permissions:

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool photo App Camera Permission",
                    message: "Cool photo App needs access to your camera" + "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "Ok"


                });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission danied");
            }
        } catch (err) {
            console.warn(err);
        }
    };



    //function launchCamera for open camera and takeimages:

    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (res) => {
            //   console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri
                });
            }
        });

    }







    //function selectFromGallery to select image from gallery:

    selectFromGallery = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            //   console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {

                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri,
                });
            }
        });

    }






    render() {
        return (
            <>
                <View style={{ backgroundColor: "#ffff", flex: 1 }}>
                    <ScrollView>


                        <Text style={{ color: "#2d5ecc", textAlign: 'center', fontSize: 35, fontWeight: "bold", marginTop: height * 0.02 }}>LOGIN</Text>
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
                            marginBottom: this.state.co_mail == false ? height * 0.03 : 0,
                            borderColor: this.state.co_mail == true ? "#ff0000" : "#2d5ecc",


                        }}
                            placeholder={"Email :"}
                            placeholderTextColor={"#8f8f8f"}
                            value={this.state.input_mail}
                            onChangeText={(value) => {
                                this.setState({ input_mail: value })
                            }}
                        />
                        {this.state.co_mail == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginLeft: height * 0.05, marginTop: 2, marginBottom: height * 0.02 }}>Enter a valid mail</Text> : null}


                        <View style={{
                            height: height * 0.07, width: width * 0.9, alignSelf: 'center', borderRadius: 30, color: "#5c5c5c", flexDirection: "row",
                            borderWidth: 2,
                            marginBottom: this.state.co_pass == false ? height * 0.015 : 0,
                            borderColor: this.state.co_pass == true ? "#ff0000" : "#2d5ecc",



                        }}>

                            <TextInput style={{
                                height: height * 0.055,
                                width: width * 0.78,
                                //    marginBottom: 13,
                                borderRadius: 30,
                                color: "#5c5c5c",
                                marginLeft:width*0.02,
                                marginTop:height*0.005

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
                                <Icon name={this.state.sec ? "eye-slash" : "eye"} size={13} style={{ marginTop: height * 0.025, color: this.state.sec ? "#8f8f8f" : "#fa7d7b"}}
                                />
                            </TouchableOpacity>

                        </View>
                        {this.state.co_pass == true ? <Text style={{ color: "#ff0000", fontSize: 10, marginLeft: height * 0.05, marginTop: 2, marginBottom: height * 0.02 }}>At least six letters or symbols</Text> : null}


<Text style={{textAlign:"center",color:"#aaa",marginBottom:height*0.015}}>OR</Text>


                        <TouchableOpacity style={{alignSelf:"center", height: height * 0.08, width: width * 0.33, backgroundColor: "#2d5ecc",  marginTop:height*-0.005, borderRadius: 40, marginBottom: height * 0.02 }}
                            onPress={() => {
                                this.launchCamera()
                            }}
                        >
                            <Text style={{color:"#ffff",fontSize:20,textAlign:"center",marginTop:height*0.02,fontWeight:"bold"}}>Scan QR</Text>
                        </TouchableOpacity>








                        <TouchableOpacity style={{ height: height * 0.08, width: width * 0.18, alignSelf: 'center', backgroundColor: "#2d5ecc", marginTop: height * 0.01, borderRadius: 40, marginBottom: height * 0.02 }}
                            onPress={() => {
                                this.props.navigation.navigate("Tabss")

                            }}
                        >
                            <Icon name={"angle-right"} style={{ textAlign: 'center', marginTop: height * 0.018, color: "#ffff" }} size={35}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity style={{ marginTop: height * 0.01, width: width * 0.35, height: height * 0.065, borderWidth: 2, borderColor: "#2d5ecc", alignSelf: "center", borderRadius: 30, marginBottom: height * 0.03 }}
                            onPress={() => {
                                this.props.navigation.navigate("page_6")
                                // this.sendData()
                            }}
                        >
                            <Text style={{ color: "#2d5ecc", textAlign: 'center', fontSize: 25, fontWeight: "bold", marginTop: height * 0.008 }}>SIGN UP</Text>
                        </TouchableOpacity>




                    </ScrollView>
                </View>


            </>
        )
    }
}