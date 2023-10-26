import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import content from './content/content.js';
import Image1 from '../../assest/icon.png';
import RBSheet from 'react-native-raw-bottom-sheet';
import SplashScreen from 'react-native-splash-screen';
// import { styles } from 'react-native-image-slider-banner/src/style.js';
const {width} = Dimensions.get('window');
const imageWidth = width - 16;
const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 48;

function ScreenOne() {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const [activeCard, setActiveCard] = useState(content);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatlistRef = useRef(0);
  // const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % activeCard.length;
      flatlistRef.current.scrollToIndex({index: nextIndex});
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({item}) => {
    return <Image source={item} style={styles.image} />;
  };
  console.log('content', content);
//   useEffect(() => {
//     SplashScreen.hide();
// },[])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#C5DFF8',
        height: '100%',
        paddingTop: 5,
      }}>
      <View>
        <FlatList
          ref={flatlistRef}
          data={activeCard}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / imageWidth,
            );
            setCurrentIndex(newIndex);
          }}
        />
        <View style={styles.paginationContainer}>
          {activeCard.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View> 
      <View style={styles.container}>
        <View style={[styles.card, styles.elevation]}>
          {/* <TouchableOpacity onClick={() => refRBSheet.current.open()}>  */}
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{borderRightWidth: 2, borderColor: '#7210FF'}}>
                <Image source={Image1} style={styles.IconsStyle} />
              </View>

              <View>
                <Text style={styles.heading}>Web Development</Text>
              </View>
              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={400}
                closeOnPressMask={false}
                customStyles={{
                  wrapper: {
                    backgroundColor: 'transparent',
                  },
                  draggableIcon: {
                    backgroundColor: '#000',
                  },
                }}>
                  <View style={{borderWidth:2,borderColor:'#7210FF', marginLeft:5,marginRight:5}}></View>
                <Text style={styles.contentStyle}>
                  cg web services provides web development services across
                  multiple platforms integrating complex features and
                  functionality into your websites. We take a client and or
                  user-based approach to developing websites.
                </Text>
                <Text style={{marginLeft:30}}>{`\u2022  knowledgeable across multiple platforms.`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  websites using the latest technological platforms.`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  web designing aspect of our services defines the aesthetic.`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  cg web services automates your processes and generates leads to build your brand online all over the world.`}</Text>
                <TouchableOpacity> 
                <View style={styles.buttonbtn}>
                  <Text style={{color:'#fff',fontSize:21,fontWeight:'bold',marginLeft:95,marginTop:2}}>book a order</Text>
                </View>
                </TouchableOpacity>
              </RBSheet>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{borderRightWidth: 2, borderColor: '#7210FF'}}>
              <Image source={Image1} style={styles.IconsStyle} />
            </View>

            <View>
              <Text style={styles.heading}>SEO Solutions</Text>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={400}
                closeOnPressMask={false}
                customStyles={{
                  wrapper: {
                    backgroundColor: 'transparent',
                  },
                  draggableIcon: {
                    backgroundColor: '#000',
                  },
                }}>
                  <View style={{borderWidth:2,borderColor:'#7210FF', marginLeft:5,marginRight:5}}></View>
                <Text style={styles.contentStyle}>
                Ongoing Search Engine Optimization (SEO) has always been very crucial to every business.
                We want to make all our clients aware that One flat rate per month would keep you on top of the SERPs (Search Engine Result Pages), saving on not having to pay per click.
                </Text>
                <Text style={{marginLeft:30}}>{`\u2022  Domain Registration and Renewals`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  Speed of Page Load`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  Mobile Device & Browser Compatibipty`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  Capturing the Leads`}</Text>
                <TouchableOpacity onPress={() => refRBSheet.current.close()}> 
                <View style={styles.buttonbtn}>
                  <Text style={{color:'#fff',fontSize:21,fontWeight:'bold',marginLeft:95,marginTop:2}}>book a order</Text>
                </View>
                </TouchableOpacity>
              </RBSheet>
          </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{borderRightWidth: 2, borderColor: '#7210FF'}}>
              <Image source={Image1} style={styles.IconsStyle} />
            </View>

            <View>
              <Text style={styles.heading}>Website Designer</Text>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={400}
                closeOnPressMask={false}
                customStyles={{
                  wrapper: {
                    backgroundColor: 'transparent',
                  },
                  draggableIcon: {
                    backgroundColor: '#000',
                  },
                }}>
                  <View style={{borderWidth:2,borderColor:'#7210FF', marginLeft:5,marginRight:5}}></View>
                <Text style={styles.contentStyle}>
                The website is the door of your online business which has to be represented well. The designing work involves web designing along with the development of all the modules.
                Client satisfaction is at the heart of our digital service we do at Gladias Consulting, due to which we’re referred as best web development agency.
                </Text>
                <Text style={{marginLeft:30}}>{`\u2022  Website planning & ideation`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  Content Development`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  Website Building & Testing`}</Text>
                <Text style={{marginLeft:30}}>{`\u2022  Hosting & Domain Management`}</Text>
                <TouchableOpacity onPress={() => refRBSheet.current.close()}> 
                <View style={styles.buttonbtn}>
                  <Text style={{color:'#fff',fontSize:21,fontWeight:'bold',marginLeft:95,marginTop:2}}>book a order</Text>
                </View>
                </TouchableOpacity>
              </RBSheet>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    
    </SafeAreaView>
  );
}

export default ScreenOne;

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: 150,
    marginHorizontal: 8,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  paginationContainer: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    paddingVertical: 15,
  },

  paginationDot: {
    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#e6e6e6',

    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#7210FF',
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    // marginBottom: 13,
    marginTop: 25,
    color: '#fff',
    marginLeft: 15,
    fontFamily:'Roboto-Bold'
  },
  card: {
    marginLeft: 10,
    backgroundColor: '#02aff3',
    // justifyContent:'center',
    borderRadius: 10,
    marginTop:20,
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    width: '90%',
    // marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  IconsStyle: {
    width: 85,
    height: 85,
  },
  contentStyle:{
    padding:10,
    fontSize:18,
    // fontFamily:'Roboto-Bold',
    color:'black',
    fontWeight:'400'
  },
  buttonbtn:{
    borderWidth:1,
    borderColor:'black',
    width:'80%',
    height:40,
    borderRadius:20,
    marginLeft:30,
    marginTop:25,
    backgroundColor:'#6B0BDC'
  },
  container:{
    marginLeft:10,
  }
});
