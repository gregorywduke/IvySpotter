import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function thinking( { navigation } ){
  return (
    <View style={styles.container}>
      <Text style={styles.para1}>Thinking...</Text>
    </View>
  );
}

//<TouchableOpacity onPress={pickImageAsync}>

function home( { navigation } ){
  return (
    <View style={styles.container}>
      <Text style={styles.para1}>IVY SPOTTER</Text>
      <Text style={styles.para2}>Get started.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('thinking')}>
            <Image
                style={styles.imgs}
                source={require('./assets/spotters.png')}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function app() {

  //const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let img = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!img.canceled) {
      setSelectedImage(img.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  };


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name='Thinking' component={thinking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9ECB89',
    padding: 8,
  },
  para1: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  para2: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'medium',
    textAlign: 'center',
  },
  imgs: {
    alignItems: 'center',
    margin: 24,
    width: 62,
    height: 62,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    PointerEvents: 'none',
  },
});
