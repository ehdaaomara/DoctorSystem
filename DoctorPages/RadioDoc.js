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
import ActionSheet from "react-native-actions-sheet";




// import { ReactNativeFirebase } from '@react-native-firebase/app';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


export default class RadioDoc extends React.Component {
    constructor(props) {
        super(props)
        this.actionSheetRef = React.createRef()

        this.state = {
            photo_uri: "",
            shoe: true

        }
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
                            this.props.navigation.navigate("page_31")
                            // this.sendData()
                        }}>
                            <Icon name="arrow-left" size={20} style={{ color: "#ffff", marginTop: height * 0.022, marginLeft: width * 0.06 }} />
                        </TouchableOpacity>
                        <Text style={{ color: "#ffff", marginLeft: width * 0.1, fontSize: 22, fontWeight: "bold", marginTop: height * 0.015 }}>Your medical radiology</Text>

                    </View>

                    <ScrollView>

                        <View style={{ width: width * 0.85, height: height * 0.5, backgroundColor: "#bfbfbf", alignSelf: "center", marginTop: height * 0.03, borderRadius: 15, borderBottomLeftRadius: 0 }}>
                            {this.state.photo_uri == '' ? (
                                <Image

                                    source={require("../Images/default.jpg")}
                                    style={{ height: height * 0.4, width: width * 0.7, alignSelf: "center", marginTop: height * 0.06, borderBottomLeftRadius: 0 }}
                                />
                            ) : (
                                <Image
                                    source={{ uri: this.state.photo_uri }}
                                    style={{ height: height * 0.5, width: width * 0.85, alignSelf: 'center', borderRadius: 15, borderBottomLeftRadius: 0 }}
                                />
                            )}
                        </View>
                        <TouchableOpacity style={{ height: height * 0.05, width: width * 0.5, borderRadius: 30, backgroundColor: "#2d5ecc", marginLeft: width * 0.08, marginTop: height * 0.015, borderTopLeftRadius: 0 }}
                            onPress={() => {
                                this.actionSheetRef.current?.setModalVisible()
                            }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, color: "#ffff", marginTop: height * 0.012 }}>Upload Photo...</Text>
                        </TouchableOpacity>

                        <ActionSheet ref={this.actionSheetRef}  >

                            <View style={{ flexDirection: "row", marginTop: height * 0.05 }}>
                                <TouchableOpacity style={{ height: height * 0.08, width: width * 0.19, backgroundColor: "#2d5ecc", marginLeft: width * 0.22, borderRadius: 20 }}
                                    onPress={() => {
                                        this.selectFromGallery()
                                    }}
                                >
                                    <Icon name={"images"} size={25} style={{ color: "#ffff", textAlign: 'center', marginTop: height * 0.01 }} />
                                    <Text style={{ color: "#ffff", textAlign: 'center' }}>Gallery</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ height: height * 0.08, width: width * 0.19, backgroundColor: "#2d5ecc", marginLeft: width * 0.2, borderRadius: 20 }}
                                    onPress={() => {
                                        this.launchCamera()
                                    }}
                                >
                                    <Icon name={"camera"} size={25} style={{ color: "#ffff", textAlign: 'center', marginTop: height * 0.01 }} />
                                    <Text style={{ color: "#ffff", textAlign: 'center' }}>Camera</Text>
                                </TouchableOpacity>

                            </View>



                        </ActionSheet>






                    </ScrollView>
                </View>


            </>
        )
    }
}