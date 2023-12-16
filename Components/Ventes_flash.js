import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { fetchDataFromAPI } from '../APIResponse/ApiResponse.js'
import Dropdown from 'react-native-input-select';
import { ScrollView } from "react-native-gesture-handler";
import  VenteflashCard  from "../Card/VenteflashCard.js"// Assuming the card component is in a separate file

export function Ventes_flash() {
 
  const [venteflashData, setFlashData] = useState([]); 
  //DROPDOWNLIST
  const [selectedGroupement, setSelectedGroupement] = useState(null); // Utilisez null pour indiquer qu'aucune sélection n'a été faite
  const [selectedSociete, setSelectedSociete] = useState(null);
  const [selectedMarque, setSelectedMarque] = useState(null);
  //API // Initialize with an empty array
  const [groupeData, setGroupeData] = useState([]); 
  const [societeData, setSocieteData] = useState([]); 
  const [marqueData, setMarqueData] = useState([]); 
  //  Affichage des valeurs sellectionnées dans la dropdownlist
  const [resultatRecherche, setResultatRecherche] = useState(""); 
  // Utilisez des états locaux pour stocker les libellés sélectionnés
  const [selectedGroupementLabel, setSelectedGroupementLabel] = useState();
  const [selectedSocieteLabel, setSelectedSocieteLabel] = useState();
  const [selectedMarqueLabel, setSelectedMarqueLabel] = useState();
  // POUR AFFICHER LA CARD
  const [showCard, setShowCard] = useState(false);

  //const testdata = modeleData.map((item) => item.DescModele);
  useEffect(() => {
    // Fetch data when the component mounts
    fetchDataFromAPI('http://192.168.56.1:3003/groupelist').then((result) => {setGroupeData(result);});
    fetchDataFromAPI('http://192.168.56.1:3003/sitelist').then((result) => {setSocieteData(result);});
    fetchDataFromAPI('http://192.168.56.1:3003/marquelist').then((result) => {setMarqueData(result);});
    
  }, []);

  // Fonction pour gérer le clic sur le bouton et afficher les valeurs sélectionnées
  const onPress = () => {
    setResultatRecherche(
      `Groupe : ${selectedGroupementLabel}.
       NomSite : ${selectedSocieteLabel}.
       Marque : ${selectedMarqueLabel}`
    );
    
    onClick();
    setShowCard(true);
  };
  const onClick = () => {
    // Construct the base URL
    let apiUrl = 'http://192.168.56.1:3003/ventesflash?';
  
    // Create an array to store the query parameters
    const queryParams = [];
  
    // Check if selectedGroupe is not null and add it to the query parameters
    if (selectedGroupementLabel !== null) {
      queryParams.push(`Groupe=${selectedGroupementLabel}`);
    }
  
    // Check if selectedSite is not null and add it to the query parameters
    if (selectedSocieteLabel !== null) {
      queryParams.push(`NomSite=${selectedSocieteLabel}`);
    }
  
    // Check if selectedMarque is not null and add it to the query parameters
    if (selectedMarqueLabel !== null) {
      queryParams.push(`Marque=${selectedMarqueLabel}`);
    }
    // 
    // If there are query parameters, join them with '&' and append them to the URL
    for (const param of queryParams) {
      apiUrl += `${param}&`;
    }
    console.log(apiUrl.slice(0, -1));
    fetchDataFromAPI(apiUrl.slice(0, -1)).then((result) => {
      setFlashData(result);
    });
  };
  

  return (
    <ImageBackground source={require("../assets/greyoff.jpg")} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.listitemposition}>
          <View style={styles.listitem}>
            <Dropdown
              labelStyle={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              placeholder='Choisi un groupement' // Utilisez l'état local pour le libellé
              isSearchable
              selectedValue={selectedGroupementLabel}
              options={groupeData.map(item => ({
                label: item.Groupe,
                value: item.Groupe,
              }))}
              onValueChange={(selected) => {
                //setSelectedGroupement(selected);
                setSelectedGroupementLabel(selected); // Mettez à jour le libellé sélectionné
              }}
              primaryColor="black"
            />
          </View>
          <View style={styles.listitem}>
            <Dropdown
              labelStyle={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              placeholder='Choisi un site' // Utilisez l'état local pour le libellé
              isSearchable
              selectedValue={selectedSocieteLabel}
              options={societeData.map(item => ({
                label: item.NomSite,
                value: item.NomSite,
              }))}
              onValueChange={(selected) => {
                //setSelectedSociete(selected);
                setSelectedSocieteLabel(selected); // Mettez à jour le libellé sélectionné
              }}
              primaryColor="black"
            />
          </View>
          <View style={styles.listitem}>
            <Dropdown
              labelStyle={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              placeholder='Choisi une marque' // Utilisez l'état local pour le libellé
              isSearchable
              selectedValue={selectedMarqueLabel}
              options={marqueData.map(item => ({
                label: item.DescMarque,
                value: item.DescMarque,
              }))}
              onValueChange={(selected) => {
                //setSelectedMarque(selected);
                setSelectedMarqueLabel(selected); // Mettez à jour le libellé sélectionné
              }}
              primaryColor="black"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonRechercher} onPress={onPress}>
          <Text style={styles.buttonText}>Rechercher</Text>
        </TouchableOpacity>
        <Text style={styles.resultatText}>{resultatRecherche}</Text>
        {showCard && (
          <VenteflashCard content={venteflashData} />
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flexGrow: 1,
  },
  listitem: {
    margin: 5,
    paddingHorizontal: 15,
    paddingTop: 120,
    marginBottom: -130,
  },
  listitemposition: {
    marginTop: -100,
  },
  buttonRechercher: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 120,
    margin: 80,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  resultatText: {
    color: 'black',
    fontSize: 15,
    //fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -70,
  },
});

export default Ventes_flash;