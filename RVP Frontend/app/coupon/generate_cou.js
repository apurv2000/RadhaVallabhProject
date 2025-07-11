import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../header';
import CustomTabBar from '../tab';
const { width, height } = Dimensions.get('window');
const CouponScreen = () => {

    const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>
     

         <View style={styles.pageTitleBar}>
            
              <Text style={styles.pageTitle}>GENERATE COUPON</Text>
        </View>

      {/* Main content */}
      <View style={styles.card}>
        <Text style={styles.title}>Rath Yatra</Text>
        <View style={styles.divider} />
        <Text style={styles.subtitle}>Hare Krishna!</Text>

        {/* Name Input */}
        <View style={styles.inputRow}>
          <Icon name="user" size={18} color="#fff" style={styles.icon} />
          <TextInput
            placeholder="Person Name"
            placeholderTextColor="#ccc"
            style={styles.input}
          />
        </View>

        {/* Number of Devotees Input */}
        <View style={styles.inputRow}>
          <Icon name="users" size={18} color="#fff" style={styles.icon} />
          <TextInput
            placeholder="Number Of Devotees"
            placeholderTextColor="#ccc"
            keyboardType="number-pad"
            style={styles.input}
          />
        </View>

        {/* Generate Button */}
        <TouchableOpacity style={styles.generateBtn} onPress={() => router.push('./gen_coupon')}>
          <Text style={styles.generateText} >🎟 Generate Coupon</Text>
        </TouchableOpacity>

        <View style={styles.divider2} />

        {/* Notice */}
        <View style={styles.noticeBox}>

               <Text style={styles.noticeHead}>
                        
                             NOTICE
                </Text>
          <Text style={styles.noticeText}>
            If you go outside the temple campus for more than 1–2 hours, the coupon will be expired and you can’t take prasadam from this coupon.
          </Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <CustomTabBar/>
    </View>
  );
};

export default CouponScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
  },
  header: {
    height: height * 0.18,
    backgroundColor: '#f8c8dc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 15,
    left: 15,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  card: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    
    
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 4,
    textShadowColor: '#7e57c2',
    textShadowRadius: 28,
     top:height*0.02
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    top:height*0.03
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#555',
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 5,
     top:height*0.05
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 16,
  },
  generateBtn: {
    backgroundColor: '#a46be7',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center',
    top:height*0.07
  },
  generateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noticeBox: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 35,
    marginTop: 25,
    top:height*0.08
  },
  noticeText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#a46be7',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  noticeHead :{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    bottom:10,
    top:-height*0.02
},
  pageTitleBar: {
    backgroundColor: '#efb6d4',
    paddingVertical: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
    pageTitle: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 20,
  },
  divider: {
  height: 3,
  backgroundColor: '#888',
  width: '40%',
  alignSelf: 'center',
  marginVertical: 8,
   top:height*0.02
},
  divider2: {
  height: 2,
  backgroundColor: '#888',
  width: '60%',
  alignSelf: 'center',
  marginVertical: 8,
   top:height*0.09
},
});
