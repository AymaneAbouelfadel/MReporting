import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export function Inscription () {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');
  const navigation = useNavigation();

  const handleInscription = () => {
    if (login === '' | password === '' | passwordconfirm === '') {
        Alert.alert('Empty File, Please try again')
    }else
    if (password === passwordconfirm) {
      navigation.navigate('DashBoard');
    } else {
      Alert.alert("Username or Password INCORRECT, Please Retry !");
    }
  };


  return (
    <ImageBackground
     source={require('../assets/grey.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.formBackground}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>
              <FontAwesomeIcon name="user" size={20} color="grey" /> Login:
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your new login"
                placeholderTextColor='grey'
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
                placeholderTextColor='grey'
                color='black'
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
            <Text style={styles.label}>
              <FontAwesomeIcon name="lock" size={20} color="grey" /> Confirm your Password:
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter the same password"
                placeholderTextColor='grey'
                color='black'
                secureTextEntry={true}
                value={passwordconfirm}
                onChangeText={setPasswordConfirm}
              />
              {passwordconfirm !== '' && (
                <TouchableOpacity onPress={() => setPasswordConfirm('')}>
                  <View style={styles.iconContainer}>
                    <FontAwesomeIcon name="times-circle" size={20} color="grey" />
                  </View>
                </TouchableOpacity>
              )}
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handleInscription}>
              <Text style={styles.buttonText}>Inscription</Text>
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
    paddingHorizontal: 28,
    paddingVertical: 20,
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
  },
  button: {
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
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
    //flexDirection: 'row',
    alignItems: 'center',
    //borderColor: 'grey',
    //borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    width: 250, // Ajoutez cette ligne pour définir la hauteur fixe
  },
  icon: {
    marginRight: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: -40,
    right: -108,
  },
});

export default Inscription;