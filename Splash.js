import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput,FlatList,PermissionsAndroid, Image ,Dimensions} from 'react-native'




const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    componentDidMount(){
        let login = 1


        setTimeout(()=>{
            if(login==0){
                this.props.navigation.navigate("Tabs")
            }else {
                this.props.navigation.navigate("Quis")
            }
            
        },3000)

        
    }


    render(){
        return(
            <>
<View style={{flex:1,backgroundColor:'#ffff'}}>
    <Image 
    source={require("./Images/splash.jpg")}
    style={{height:height*0.55,width:width,alignSelf:'center',marginTop:height*0.12}}
        />
    </View>                

        
            </>
        )
    }
}