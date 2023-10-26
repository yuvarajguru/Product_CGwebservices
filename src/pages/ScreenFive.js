import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity,
    Image
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import Counters from 'react-native-counters';
  import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
  function ScreenFive ({navigation}) {
    // const navigation = useNavigation();
    const [value,setValue] = useState();
    console.log("start",value)
    return(
        <View style={styles.main} >
            <View style={{marginTop:10,borderWidth:0.5,borderColor:'#000'}}></View>
            <View style={styles.body}>
            <Image source={require('../../assest/logo.png')} alt="lg" style={{width:70,height:70}}/>
            <View style={{paddingLeft:5}}>
            <Text style={styles.text1}>Web Designer</Text>
            <Text style={{fontSize:12,}}>Website Developement</Text>
            <Text style={styles.text1}>₹8000</Text>
            </View>
           
            {/* <Text style={styles.button}>two</Text> */}
            <View style={styles.button}> 
            <Counters
            start={3}
            // setValue={values}
            // onChange={console.log("c")}
            minusIcon={() => <Icon name="minus" size={20} color="#27AAE1" />}
            plusIcon={() => <Icon name="plus" size={20} color="#27AAE1" />}
          />
          </View>
            </View>
            <View style={styles.body}>
            <Image source={require('../../assest/logo.png')} alt="lg" style={{width:70,height:70}}/>
            <View style={{paddingLeft:5}}>
            <Text style={styles.text1}>Web Designer</Text>
            <Text style={{fontSize:12,}}>Website Developement</Text>
            <Text style={styles.text1}>₹8000</Text>
            </View>

            {/* <Text style={styles.button}>two</Text> */}
            <View style={styles.button}> 
            <Counters
            minusIcon={() => <Icon name="minus" size={20} color="#27AAE1" />}
            plusIcon={() => <Icon name="plus" size={20} color="#27AAE1" />}
          />
          </View>
            </View>
            <View style={styles.bottomheading}>
            <View style={{marginTop:10,borderWidth:0.5,borderColor:'#000'}}></View>
            <View style={styles.bottomtext}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{fontSize:24,fontWeight:'600'}}>SubTotal</Text>
                    <Text style={{marginLeft:'auto',fontSize:24,fontWeight:'600'}}>₹8000</Text>
                </View>
                <Text>
                    The business will conform your order and total price includes tax
                </Text>
            </View>
            <View style={styles.bottom}>
                
                <TouchableOpacity onClick={() => {navigation.navigate("About")}}>
                    <View>
                        <Text style={{textAlign:'center',fontSize:24,fontWeight:'500'}}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
  }

  export default ScreenFive;

  const styles = StyleSheet.create({
    main:{
        margin:10
    },
    body:{
        display:'flex',
        flexDirection:'row',
        paddingTop:20,
        paddingLeft:10
    },
    text1:{
        fontSize:18,
        fontWeight:'500'
    },
    button:{
        marginLeft:'auto'
    },
    bottomheading:{
        marginTop:330
    },

    bottom:{
        marginTop:5,
        borderWidth:1,
        width:"80",
        height:40,
        borderRadius:25,
        backgroundColor:'#27AAE1'
    }
})

  