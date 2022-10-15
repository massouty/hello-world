import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
        <Text  style={styles.line1}>HALLO WORLD</Text>
        </View>
        <View style={styles.box2}>
        <Text  style={styles.line2}>HALLO WORLD</Text>
        <Text  style={[styles.line1,styles.line3]}>HALLO WORLD</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightGray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line1:{
    color:'blue',
    fontSize:24,
    fontWeight:300
  },
   line2:{
    color:'red',
    fontSize:35,
    fontWeight:400
  },
line3:{
    color:'red',
    fontSize:40,
    fontWeight:600
  },
  box1:{
    hight:100,
    width:100,
    backgroundColor:'yellow'
  },
   box2:{
    hight:200,
    width:200,
    backgroundColor:'blue'
  },


});
