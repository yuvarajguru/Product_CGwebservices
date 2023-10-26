import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    ImageBackground,
    View,
    Button
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  
  import { ImageSlider } from 'react-native-image-slider-banner';
  function ProductPage ({navigation}) {
    const image  = {uri : 'https://images.unsplash.com/photo-1507388412350-cb43abdebced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
    // const navigation = useNavigation(); 
    return(
        <View style={{backgroundColor:'#C5DFF8',width:'100%',height:'100%',paddingTop:0,paddingLeft:0}}>
            <View style={styles.heading}>
            <MaterialCommunityIcons 
                              name="arrow-left"
                              size={40}
                              color={'black'}
                              onClick={console.log("clicked")}
                              // onClick={() => {navigation.navigate("main")}}
                              >
                              </MaterialCommunityIcons>
                              <Text style={styles.headingText}>
                                Catalogss
                              </Text>
                              <FontAwesome5 style={{paddingLeft:160}} name="shopping-cart" size={34} color={'black'} />
            </View>
            <View>
            <ImageBackground source={image} resizeMode="contain" style={styles.image}>
                <Text style={styles.text}>Text</Text>
                </ImageBackground>
            </View>
           
        </View>
    )
  }

  export default ProductPage;

  const styles = StyleSheet.create({
    heading:{
        flex:0.05,
        paddingTop:5,
        flexDirection:'row',
        width:'100%',
        height:20,
        backgroundColor:'#fff'
    },
    image:{
        width:60,
        height:60
    },
    text: {
        color: 'white',
        fontSize: 34,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
      },
    headingText:{
       color:'black',
       paddingLeft:22, 
       fontSize:24,
       fontWeight:'600'
    }
  })
  