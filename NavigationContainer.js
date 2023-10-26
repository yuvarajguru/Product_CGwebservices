// import { View, Text, StyleSheet,TouchableOpacity,Image,Animated,Dimensions } from 'react-native'
// import React,{useRef} from 'react'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

// // import BottomNavigation from './BottomNavigation/BottomNavigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import ScreenOne from './src/pages/ScreenOne';
// import ScreenTwo from './src/pages/ScreenTwo';
// import ScreenFive from './src/pages/ScreenFive';
// import Icon from '@mdi/react';
// import { mdiHomeCircle } from '@mdi/js';
// import ScreenThree from './src/pages/ScreenThree';
// import ScreenFour from './src/pages/ScreenFour';
// import { createStackNavigator } from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import BottomNavigation from './BottomNavigation/BottomNavigation';
// import Plus from './assest/plus.png'
// import 'react-native-gesture-handler';
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// // const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

// const HomeScreenStack = () => {
//     return (
//       <Stack.Navigator
//         initialRouteName="HomeScreen"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="BottomTabStack" component={BottomNavigation} />
//       </Stack.Navigator>
//     );
//   };
  
//   const SettingScreenStack = () => {
//     return (
//       <Stack.Navigator
//         initialRouteName="SecondPage"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="SettingScreen" component={SettingScreen} />
//       </Stack.Navigator>
//     );
//   };
// export default function MainNavigationContainer() {
//     const tabOffsetvalue = useRef(new Animated.Value(0)).current;

//     function getWidth(){
//         let width =  Dimensions.get("window").width
//         width = width - 40
//         return width / 5
//     }
//   return (
//     <NavigationContainer independent={true}>
//         <Drawer.Navigator
//             screenOptions={{
//                 headerStyle:{
//                     backgroundColor: '#f4511e'
//                 },
//                 headerTintColor: '#fff'
//             }}>
//               <Drawer.Screen
//                     name="HomeScreenStack"
//                     options={{
//                         drawerLabel: 'Home Screen Option',
//                         title: 'Home Screen',
//                     }}
//                     component={BottomNavigation}
//                     />
           
//         </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

// const style = StyleSheet.create({
//     shadow:{
//         shadowColor:'#7F5DF0',
//         shadowOffset:{
//             width:0,
//             height:10
//         },
//         shadowOpacity: 0.25,
//         shadowRadius:3.5,
//         elevation:5
//     }
// })


import { View, Text } from 'react-native'
import BottomNavigation from './BottomNavigation/BottomNavigation';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOne from './src/pages/ScreenOne';
import ScreenTwo from './src/pages/ScreenTwo';
import ScreenThree from './src/pages/ScreenThree';
import ScreenFour from './src/pages/ScreenFour';
import ScreenFive from './src/pages/ScreenFive';
import ProductPage from './src/pages/Product-Page';
import DrawerContent from './DrawerTab/DrawerContent';
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function MainNavigationContainer() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();

    const DrawerTab = () =>(
    <Drawer.Navigator  
        //  useLegacyImplementation
        drawerContent={(props) => <DrawerContent {...props} 
        id="rightdrawer"
        screenOptions={{
            drawerPosition: 'right',
          }} 
    />}     
    > 
        <Drawer.Screen name="home" component={BottomNavigation}
            options={{
                headerRight:() => (<Fontisto name="bell-alt" size={30}/>)
            }}
        />
        {/* <Drawer.Screen name="about" component={ScreenTwo}/>
        <Drawer.Screen name="contact" component={ScreenFour}/> */}
    </Drawer.Navigator>
    )

  return ( 
   <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
            // headerRight:() => (<Fontisto name="bell-alt" size={30}/>)

        }}>
            <Stack.Screen name="main" component={DrawerTab}             />
            {/* <Stack.Screen name="Product-page" component={ProductPage} /> */}
            {/* <Stack.Screen name="tab" component={BottomTab} /> */}
        </Stack.Navigator>
   </NavigationContainer>
  )
}

{ /* <Animated.View style={{
    width:getWidth() - 20,
    height:2,
    backgroundColor:'#02aff3',
    position:'absolute',
    bottom:99,
    left:30,
    borderRadius:50,
    transform:[
        {translateX: tabOffsetvalue}
    ]
  }}>
  </Animated.View> */ }