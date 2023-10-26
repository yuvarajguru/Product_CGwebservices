import { View, Text, StyleSheet,TouchableOpacity,Image,Animated,Dimensions } from 'react-native'
import React,{useRef} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Plus from '../assest/plus.png';
import ScreenOne from '../src/pages/ScreenOne';
import ScreenTwo from '../src/pages/ScreenTwo';
import ScreenThree from '../src/pages/ScreenThree';
import ScreenFour from '../src/pages/ScreenFour';
import ScreenFive from '../src/pages/ScreenFive';
import RBSheet from "react-native-raw-bottom-sheet";
const Tab = createBottomTabNavigator();

export default function BottomNavigation({navigation}) {
    const refRBSheet = useRef();
    const tabOffsetvalue = useRef(new Animated.Value(0)).current;

    function getWidth(){
        let width =  Dimensions.get("window").width
        width = width - 40
        return width / 5
    }
    console.log("val",navigation);
  return (
   
<Tab.Navigator 
            
            screenOptions={{
              headerShown:false,
              tabBarShowLabel:false,
              tabBarStyle:{
                  // showLabel: false,
                  position:'absolute',
                  height:70,
                  bottom:30,
                  left:20,
                  right:20,
                  elevation:0,
                  backgroundColor:'#fff',
                  borderRadius:20,
                  // height:90
                  ...style.shadow
              }
            }}
            >
              <Tab.Screen name='Home'component={ScreenOne} 
                  options={{
                      tabBarIcon: ({focused}) => (
                          <View style={{ justifyContent:'center',alignItems:'center',top:5}}>
                              <MaterialCommunityIcons 
                              name="home"
                              size={30}
                              color={focused ? '#02aff3' : 'black'}
                              >
                              </MaterialCommunityIcons>
                              <Text 
                              style={{bottom:4,left:2, width:45,height:20, color:focused ? '#02aff3' : 'black'}} 
                              >
                                  
                                  Home</Text>
                          </View>
                      )
                  }}
                  listeners={({navigation,route}) => ({
                      tabPress: e =>{
                          Animated.spring(tabOffsetvalue,{
                              toValue:0,
                              useNativeDriver: true
                          }).start();
                      }
                  })}
              />
              <Tab.Screen name='About'component={ScreenTwo}
                   options={{
                      tabBarIcon: ({focused}) => (
                          <View style={{ justifyContent:'center',alignItems:'center',top:5}}>
                              <Entypo 
                              name="info-with-circle"
                              size={30}
                              color={focused ? '#02aff3' : 'black'}
                              >
                              </Entypo>
                              <Text 
                              style={{ bottom:4,left:2, width:45,height:20, color:focused ? '#02aff3' : 'black'}} 
                              >
                                  
                                  About us</Text>
                          </View>
                      )
                  }}
                    listeners={({navigation,route}) => ({
                      tabPress: e =>{
                          Animated.spring(tabOffsetvalue,{
                              toValue: getWidth(),
                              useNativeDriver: true
                          }).start();
                      }
                  })}
                  
              />
              <Tab.Screen name='Plus' component={ScreenFive} options={{
                  tabBarIcon: ({focused}) => (
                      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                          <View style={{
                              width:60, 
                              height:60,
                              backgroundColor:'#9F91CC',
                              borderRadius:50,
                              justifyContent:'center',
                              alignContent:'center',
                              alignItems:'center',
                              bottom:35,
                          }}>
                            <RBSheet
                                    ref={refRBSheet}
                                    closeOnDragDown={true}
                                    height={700}
                                    closeOnPressMask={false}
                                    customStyles={{
                                    wrapper: {
                                        backgroundColor: "transparent"
                                    },
                                    draggableIcon: {
                                        backgroundColor: "#000"
                                    }
                                    }}
                                >
                                <ScreenFive/>
                                </RBSheet>
                          <Image source={Plus} style={{width:65,height:45}}/>
                          </View>
                         
                      </TouchableOpacity>
                  )
              }} />
              <Tab.Screen name='Port'component={ScreenThree}
                   options={{
                      tabBarIcon: ({focused}) => (
                          <View style={{ justifyContent:'center',alignItems:'center',top:5}}>
                              <FontAwesome 
                              name="briefcase"
                              size={30}
                              color={focused ? '#02aff3' : 'black'}
                              >
                              </FontAwesome>
                              <Text 
                              style={{bottom:4,left:2, width:55,height:20, color:focused ? '#02aff3' : 'black'}} 
                              >
                                  
                                  Portfolio</Text>
                          </View>
                      )
                  }}
                  listeners={({navigation,route}) => ({
                      tabPress: e =>{
                          Animated.spring(tabOffsetvalue,{
                              toValue: getWidth() * 3,
                              useNativeDriver: true
                          }).start();
                      }
                  })}
              />
              <Tab.Screen name='Contact'component={ScreenFour}
                   options={{
                      tabBarIcon: ({focused}) => (
                          <View style={{ justifyContent:'center',alignItems:'center',top:5}}>
                              <MaterialCommunityIcons 
                              name="contacts"
                              size={30}
                              color={focused ? '#02aff3' : 'black'}
                              >
                              </MaterialCommunityIcons>
                              <Text 
                              style={{bottom:4,left:2, width:55,height:20, color:focused ? '#02aff3' : 'black'}} 
                              >
                                  
                                  Contact</Text>
                          </View>
                      )
                  }}  listeners={({navigation,route}) => ({
                      tabPress: e =>{
                          Animated.spring(tabOffsetvalue,{
                              toValue: getWidth() * 4,
                              useNativeDriver: true
                          }).start();
                      }
                  })}
              />
            </Tab.Navigator>
  )
}
const style = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation:5
    }
})