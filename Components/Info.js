import React from "react";
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Info() {
  const navigation = useNavigation();

  const GoToVenteFlash = () => {
    //navigation.navigate('Ventes flash'); // Si on clique sur le boutton Ventes flash elle se redirect
  }

  const GoToVentesJournalieres = () => {
    //navigation.navigate('Ventes journaliere'); //Si on clique sur le boutton Ventes_journaliere elle se redirect
  }

  const GoToObjectif = () => {
    //navigation.navigate('Objectif Microservice');// Si on clique sur le boutton Objectif_Microservice elle se redirect vers la page
  }

  const GoToStock = () => {
    //navigation.navigate('Stock Microservice');//Si on clique sur le boutton Stock_Microservice elle se redirect
  }

  const GoToCumul = () => {
    //navigation.navigate('Cumul');//Si on clique sur le boutton Stock_Microservice elle se redirect
  }

  const LogOut = () => {
    //navigation.navigate('Home');// Si on clique sur le boutton Home elle quitte l'application et se retourne vers le Home
  }

  const [tableData, setTableData] = useState([
    //{ key: '0', type: '', col1: ''}, // Ligne de séparation
    //{ key: '1', type: 'Type :', col1: 'Groupements', col2: 'Sociéter', col3: 'Site', col4: 'Marque', col5: 'Modèle' },
   // { key: '2', type: 'Nombre :', col1: '4', col2: '17', col3: '94', col4: '105', col5: '993' },
    // Ajoutez autant de lignes que nécessaire
  ]);

  const renderTableItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.type}</Text>
      <TextInput
        style={styles.tableInput}
        value={item.col1}
        editable={false} // Empêche l'utilisateur de modifier cette valeur
        onChangeText={(text) => handleInputChange(item.key, 'col1', text)}
      />
      <TextInput
        style={styles.tableInput}
        value={item.col2}
        onChangeText={(text) => handleInputChange(item.key, 'col2', text)}
        editable={false} // Empêche l'utilisateur de modifier cette valeur
      />
      <TextInput
        style={styles.tableInput}
        value={item.col3}
        onChangeText={(text) => handleInputChange(item.key, 'col3', text)}
        editable={false} // Empêche l'utilisateur de modifier cette valeur
      />
      <TextInput
        style={styles.tableInput}
        value={item.col4}
        onChangeText={(text) => handleInputChange(item.key, 'col4', text)}
        editable={false} // Empêche l'utilisateur de modifier cette valeur
      />
      <TextInput
        style={styles.tableInput}
        value={item.col5}
        onChangeText={(text) => handleInputChange(item.key, 'col5', text)}
        editable={false} // Empêche l'utilisateur de modifier cette valeur
      />
    </View>
  );
  const handleInputChange = (key, columnName, text) => {
    const updatedData = tableData.map((item) =>
      item.key === key ? { ...item, [columnName]: text } : item
    );
    setTableData(updatedData);
  };


  return (
    <ImageBackground source={require('../assets/grey.jpg')}
     style={styles.backgroundImage}
     resizeMode="cover" >
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={GoToVenteFlash}>Ventes flash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={GoToVentesJournalieres}>Ventes journalières</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={GoToObjectif}>Objectif microservice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={GoToStock}>Stock microservice</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={GoToCumul}>Cumul</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogOut}>
            <Text style={styles.buttonTextQuitter} onPress={LogOut}>LogOut</Text>
          </TouchableOpacity>
        </View>
         {/* Tableau */}
         <FlatList
          style={styles.tableau}
          data={tableData}
          renderItem={renderTableItem}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#007bff',
    marginHorizontal: 13,
    paddingVertical: 13,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonTextQuitter: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonLogOut: {
    flex: 1,
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
    marginHorizontal: 13,
    paddingVertical: 13,
    alignItems: 'center',
    borderRadius: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#007bff',
  },
  tableCell: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#007bff',
  },
  tableInput: {
    //fontWeight: 'bold',
    color: 'black',
  },
  tableau:{
    marginTop: -10,
  }
});

export default Info;