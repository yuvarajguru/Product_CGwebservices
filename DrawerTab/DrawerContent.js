import { View,StyleSheet } from 'react-native'
import React,{useRef} from 'react'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper'
export default function DrawerContent({navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
        
        <DrawerContentScrollView style={{backgroundColor:'#C5DFF8', width:'100%',height:'100%', bottom:5}}> 
        <LinearGradient colors={['#9F91CC', '#3b5998', '#02aff3']} start={{x: 0.0, y: 0.6}} end={{x: 0.8, y: 1.7}}> 
        <View style={{
            marginTop:30,
            marginLeft:5,
            flexDirection:'row',
           
        }}>
            <Avatar.Image source={require('../assest/profile.jpg')}/>
           
            <View style={{ marginLeft:5}}>
                <Title style={style.title}>CGwebservices</Title>
                <Caption style={style.caption}>@mohanOwner</Caption>
            </View>
          
        </View>
        
        <View style={[style.row]}>
            <View style={style.section}>
                <Paragraph style={[style.Paragraph,style.caption]}>80</Paragraph>
                <Caption style={{marginLeft:10}}>Follower</Caption>
            </View>
            <View style={[style.section,{marginLeft:30}]}>
                <Paragraph style={[style.Paragraph,style.caption]}>80</Paragraph>
                <Caption style={{marginLeft:10}}>Followings</Caption>
            </View>
        </View>
        </LinearGradient>
        <Drawer.Section style={{flex:1, marginTop:15}}>
            <DrawerItem label="Home" onPress={() => {navigation.navigate("Home")}} icon={() => (<MaterialCommunityIcons name="home" size={24}/>)}>
                {/* <MaterialCommunityIcons name="home" size={24}/> */}
            </DrawerItem>
            <DrawerItem label="About"  onPress={() => {navigation.navigate("About")}} icon={() => (<MaterialCommunityIcons name="contacts" size={24}/>)}/>
            <DrawerItem label="Port" onPress={() => {navigation.navigate("Port")}} icon={() => (<FontAwesome name="briefcase" size={24}/>)}/>
            <DrawerItem label="Contact" onPress={() => {navigation.navigate("Contact")}} icon={() => (<Entypo name="info-with-circle" size={24}/>)}/>
        </Drawer.Section>
       
         <Drawer.Section style={style.bottom}>
            <Drawer.Item label='Sign Out' icon={() => (<FontAwesome name="sign-out" size={24}/>)}/>
        </Drawer.Section>

        </DrawerContentScrollView>
    
    </View>
  )
}
const style = StyleSheet.create({
    section:{
        flexDirection:'row',
        
        // padding:5
    },
    row:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingTop:10
    },
    bottom:{
        marginTop:330
    }
})