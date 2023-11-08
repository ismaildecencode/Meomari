import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.launchScreenText}>MEO MATE</Text>
      <Pressable>
        <Text style={styles.creatAccountBtn}
          onPress={() => {
            // Add your button click action here
          }}
        >Create Account</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  launchScreenText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 60,
  },
  creatAccountBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
    width: 200,
    textAlign: 'center',
    bottom: -200, 
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
