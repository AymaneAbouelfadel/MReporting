import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleLogin = () => {
    if (login === 'Filiale' && password === 'autohall' ||
        login === 'ReseauNord' && password === 'autohall' ||
        login === 'ReseauSud' && password === 'autohall' ||
        login === 'ReseauCentre' && password === 'autohall') {
      //Alert.alert('Connected !')// Remplacez 'Info' par le nom de votre écran d'information
      navigation.navigate('DashBoard'); // Rediriger vers la DASBOARD
    } else if (login === '' | password === ''){
      Alert.alert('Empty File, Please try again')
    }
    else {
      Alert.alert('Username or Password INCORRECT, Please Retry !')
    } 

  };

  return (
    <ImageBackground source={require('../assets/grey.jpg')} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.formBackground}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>
              <FontAwesomeIcon name="user" size={20} color="grey" /> Login:
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your login"
                placeholderTextColor="grey"
                color="black"
                value={login}
                onChangeText={setLogin}
              />
              {login !== '' && (
                <TouchableOpacity onPress={() => setLogin('')}>
                  <View style={styles.iconContainer}>
                    <FontAwesomeIcon name="times-circle" size={20} color="grey" />
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.label}>
              <FontAwesomeIcon name="lock" size={20} color="grey" /> Password:
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="grey"
                color="black"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              {password !== '' && (
                <TouchableOpacity onPress={() => setPassword('')}>
                  <View style={styles.iconContainer}>
                    <FontAwesomeIcon name="times-circle" size={20} color="grey" />
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  formBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 20,
    marginTop: 20
  },
  formContainer: {},
  label: {
    marginBottom: 5,
    color: 'grey',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    //height: 40, // Hauteur fixe
  },
  button: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    borderColor: 'grey',
    borderWidth: 0,
    marginBottom: 8,
    paddingHorizontal: 10,
    width: 250, // Ajoutez cette ligne pour définir la hauteur fixe
  },
  iconContainer: {
    position: 'absolute',
    top: -40,
    right: 8,
  },
});

export default Login;