import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";



export function HomePage() {
  const navigation = useNavigation(); // Utilisez le hook de navigation

  const goToLogin = () => {
    navigation.navigate('Bienvenue, Connectez vous !'); // Naviguez vers l'écran de connexion
  };

  const goToSignup = () => {
    navigation.navigate('Inscription'); // Naviguez vers l'écran d'inscription
  };

  return (
    <ImageBackground
      source={require('../assets/grey.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenue sur notre Application</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={goToLogin} // Utilisez la fonction pour naviguer vers l'écran de connexion
          >
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.signupButton]}
            onPress={goToSignup} // Utilisez la fonction pour naviguer vers l'écran d'inscription
          >
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
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
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#007bff',
  },
  signupButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;