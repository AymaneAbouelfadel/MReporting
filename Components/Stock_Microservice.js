import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Calendar } from 'react-native-calendars';
import { fetchDataFromAPI } from '../APIResponse/ApiResponse.js'
import Dropdown from 'react-native-input-select';
import CardStockMicro from '../Card/CardStockMicro.js'



export function Stock_Microservice() {
  const [venteStockData, setStockData] = useState([]); 
 // CALENDRIER
 const [showCalendar, setShowCalendar] = useState(false);
 const [showAfficherButton, setShowAfficherButton] = useState(true); // Ajout d'un état pour gérer la visibilité du bouton "Afficher"
 const [selectedDate, setSelectedDate] = useState(null); // État pour stocker la date sélectionnée
 //API
const [groupeData, setGroupeData] = useState([]); // Initialize with an empty array
const [siteData, setSiteData] = useState([]); // Initialize with an empty array
const [marqueData, setMarqueData] = useState([]); // Initialize with an empty array
const [modeleData, setModeleData] = useState([]); // Initialize with an empty array
// Utilisez des états locaux pour stocker les libellés sélectionnés
const [selectedGroupementLabel, setSelectedGroupementLabel] = useState();
const [selectedSiteLabel, setSelectedSiteLabel] = useState();
const [selectedMarqueLabel, setSelectedMarqueLabel] = useState();
const [selectedModeleLabel, setSelectedModeleLabel] = useState();

// POUR AFFICHER LA CARD
const [showCard, setShowCard] = useState(false);

const testdata = modeleData.map((item) => item.DescModele);
useEffect(() => {
  // Fetch data when the component mounts
  fetchDataFromAPI('http://192.168.56.1:3003/groupelist').then((result) => {setGroupeData(result);});
  fetchDataFromAPI('http://192.168.56.1:3003/sitelist').then((result) => {setSiteData(result);});
  fetchDataFromAPI('http://192.168.56.1:3003/marquelist').then((result) => {setMarqueData(result);});
  fetchDataFromAPI('http://192.168.56.1:3003/modelelist').then((result) => {setModeleData(result);});
}, []);


  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (date) => {
    // Gérez la sélection de date ici, par exemple, enregistrez la date sélectionnée dans l'état
    setSelectedDate(date);
    console.log('Date sélectionnée :', date);
  };

  const [resultatRecherche, setResultatRecherche] = useState("");

  const onPress = () => {
    setResultatRecherche(
      `Groupement : ${selectedGroupementLabel}.
       NomSite : ${selectedSiteLabel}.
       DescMarque : ${selectedMarqueLabel}
       DescModele: ${selectedModeleLabel}`
    );
    onClick();
    setShowCard(true);
  };

  const onClick = () => {
    // Construct the base URL
    let apiUrl = 'http://192.168.56.1:3003/stock?';
  
    // Create an array to store the query parameters
    const queryParams = [];
  
    // Check if selectedGroupe is not null and add it to the query parameters
    if (selectedGroupementLabel !== null) {
      queryParams.push(`Groupe=${selectedGroupementLabel}`);
    }
  
    // Check if selectedSite is not null and add it to the query parameters
    if (selectedSiteLabel !== null) {
      queryParams.push(`NomSite=${selectedSiteLabel}`);
    }
  
    // Check if selectedMarque is not null and add it to the query parameters
    if (selectedMarqueLabel !== null) {
      queryParams.push(`DescMarque=${selectedMarqueLabel}`);
    }
    // 
    // If there are query parameters, join them with '&' and append them to the URL
    if (selectedModeleLabel !== null) {
      queryParams.push(`DescModele=${selectedModeleLabel}`);
    }
    for (const param of queryParams) {
      apiUrl += `${param}&`;
    }
    console.log(apiUrl.slice(0, -1));
    fetchDataFromAPI(apiUrl.slice(0, -1)).then((result) => {
      setStockData(result);
    });
  };

  return(
    <ImageBackground source={require('../assets/greyoff.jpg')} style={styles.backgroundImage}>
    <ScrollView>
      <View style={styles.listitemposition}>
         <View style={styles.listitem}>
         <Dropdown
              labelStyle={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              placeholder='Choisi un groupement'
              isSearchable
              selectedValue={selectedGroupementLabel}
              options={groupeData.map(item => ({
                label: item.Groupe,
                value: item.Groupe,
              }))}
              onValueChange={(selected) => {
                setSelectedGroupementLabel(selected);
              }}
              primaryColor="black"
            />
          </View>
          <View style={styles.listitem}>
            <Dropdown
              labelStyle={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              placeholder='Choisi un site'
              isSearchable
              selectedValue={selectedSiteLabel}
              options={siteData.map(item => ({
                label: item.NomSite,
                value: item.NomSite,
              }))}
              onValueChange={(selected) => {
                setSelectedSiteLabel(selected);
              }}
              primaryColor="black"
            />
          </View>

          <View style={styles.listitem}>
            <Dropdown
              labelStyle={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              placeholder='Choisi une marque'
              isSearchable
              selectedValue={selectedMarqueLabel}
              options={marqueData.map(item => ({
                label: item.DescMarque,
                value: item.DescMarque,
              }))}
              onValueChange={(selected) => {
                setSelectedMarqueLabel(selected);
              }}
              primaryColor="black"
            />
          </View>

          <View style={styles.listitem}>
            <Dropdown
              labelStyle={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              placeholder='Choisi un modele'
              isSearchable
              selectedValue={selectedModeleLabel}
              options={modeleData.map(item => ({
                label: item.DescModele,
                value: item.DescModele,
              }))}
              onValueChange={(selected) => {
                setSelectedModeleLabel(selected);
              }}
              primaryColor="black"
            />
         </View>
       </View>
      <TouchableOpacity style={styles.buttonCalendrier} onPress={toggleCalendar}>
          <Text style={styles.buttonText}>
            {showCalendar ? "Masquer le calendrier" : "Afficher le calendrier"}
          </Text>
        </TouchableOpacity>

        {showAfficherButton && !showCalendar && (
          <TouchableOpacity style={styles.buttonAfficher} onPress={onPress}>
            <Text style={styles.buttonText}>Afficher</Text>
          </TouchableOpacity>
        )}

        {showCalendar && (
          <View style={styles.calendarContainer}>
            <Calendar
              style={styles.calendar}
              current={'2023-09-14'}
              // Gérez la sélection de date en utilisant l'événement onDayPress
              onDayPress={(day) => handleDateSelect(day.dateString)}
              // Styles du calendrier
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: 'rgba(0, 0, 255, 0.7)',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'blue',
                indicatorColor: 'blue',
              }}
            />
          </View>
        )}

        {selectedDate && (
          <Text style={styles.selectedDateText}>
            Date sélectionnée : {selectedDate}
          </Text>
        )}
        {showCard && (
          <CardStockMicro content={venteStockData} />
        )}
        </ScrollView>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    listitem: {
      margin: 5,
      paddingHorizontal: 15,
      paddingTop: 110,
      marginBottom: -130,
    },
    listitemposition: {
      marginTop: -100,
    },
  buttonAfficher: {
    backgroundColor: 'rgba(0, 255, 0, 0.7)',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20, 
    marginTop: -73,// pour descendre le boutton en bas 
    margin: 120, //pour diminuer la taille du boutton
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonCalendrier : {
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20, 
    marginTop: 125,
    margin: 80, //pour diminuer la taille du boutton
  },
  selectedDateText : {
    marginTop: -115,
    color: 'black',
    textAlign: 'center',
  },
  calendarContainer: {
    alignItems: 'center', // Centrez le calendrier horizontalement
    marginTop: -75, // Ajustez cette valeur pour l'espacement par rapport aux autres éléments
  },
  // Styles du calendrier
  calendar: {
    width: 250, // Ajustez la largeur du calendrier
  },
});

export default Stock_Microservice;