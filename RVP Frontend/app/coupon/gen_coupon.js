import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import CustomTabBar from '../tab';
const { width, height } = Dimensions.get('window');

export default function PrasadamCoupon() {
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Flowers */}
        <Image source={require('../../assets/images/deity-bg-lotus.png')} style={styles.flowerTopLeft} />
        <Image source={require('../../assets/images/deity-bg-lotus.png')} style={styles.flowerTopRight} />

        {/* ISKCON Logo */}
        <Image source={require('../../assets/images/iskcon-logo.png')} style={styles.logo} />

        {/* Temple Title */}
        <Text style={styles.title}> Sri Gaura Radha{'\n'}Vallabha Temple</Text>

        {/* QR Code */}
        <View style={styles.qrContainer}>
          <QRCode value="Prasadam Coupon" size={180} />
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Prasadam Coupon</Text>

        {/* Input Fields */}
        <View style={styles.inputGroup}>
        <Text style={styles.label}>Person Name :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Festival Name :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Prasadam Time :</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Of Devotees :</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
      </View>

        {/* Notice Box */}
        <View style={styles.noticeBox}>
           <Text style={styles.noticeHead}>
            
                 NOTICE
          </Text>
          <Text style={styles.noticeText}>
            
            If you go outside the temple campus for more than 1–2 hours, the coupon will be expired and you can’t take prasadam from this coupon.
          </Text>
        </View>


     

      </ScrollView>
         <CustomTabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  flowerTopLeft: {
    position: 'absolute',
    top:40,
    left: -80,
    width: width * 0.40,
    height: width * 0.40,
    resizeMode: 'contain',
    opacity:0.5
  },
  flowerTopRight: {
    position: 'absolute',
    top: 40,
    right: -80,
    width: width * 0.40,
    height: width * 0.40,
    resizeMode: 'contain',
    opacity:0.5
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginVertical: 10,
    fontFamily:'BerkshireSwash_400Regular',
  },
  qrContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  heading: {
    fontSize: 35,
    color: '#fff',
    marginVertical: 10,
    fontWeight: 'bold',
    textShadowColor: '#7e57c2',
    textShadowRadius: 25,
  },
  input: {
    backgroundColor: '#2e2e2e',
    width: width * 0.85,
    height: 45,
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 15,
    color: '#fff',
  },
  noticeBox: {
    marginTop: 10,
    backgroundColor: '#2d2d2d',
    width: width * 0.9,
    padding: 15,
    borderRadius: 10,
  },
  noticeText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
  footerText: {
    marginTop: 15,
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 60,
    backgroundColor: '#4b2b82',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  homeIcon: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 6,
    color: '#4b2b82',
  },
 inputGroup: {
  width: '85%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#2e2e2e',
  borderRadius: 10,
  marginVertical: 5,
  paddingHorizontal: 10,
  paddingVertical: 5,
},

label: {
  color: '#ccc',
  fontSize: 14,
  width: '45%',
},

input: {
  color: '#fff',
  fontSize: 14,
  paddingVertical: 2,
  paddingHorizontal: 8,
  width: '50%',
},
noticeHead :{
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    bottom:10
}


});
