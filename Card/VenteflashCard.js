// src/components/DailySalesCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VenteflashCard = ({ content }) => {
  return (
      <View style={styles.card}>
        <View style={styles.labelParentContainer}>
          <Text style={styles.labelParent}>Ventes Flash</Text>
        </View>
  
        <View style={styles.contentContainer}>
          <View style={styles.column}>
            <Text style={styles.label}>Volume</Text>
            <Text style={styles.value}>{((content.volume !== null) ? content.volume : 0) | 0}</Text>
          </View>
  
          <View style={styles.column}>
            <Text style={styles.label}>Chiffre D'affaire</Text>
            <Text style={styles.value}>{((content.CA !== null) ? content.CA : 0) | 0}</Text>
          </View>
  
          <View style={styles.column}>
            <Text style={styles.label}>Marge</Text>
            <Text style={styles.value}>{((content.marge !== null) ? content.marge : 0) | 0}</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    minWidth: 250, // Set a minimum width for each card
    marginTop: -60,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    elevation: 4, // Add elevation for shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width:"90%",
    textAlign:"center"
  },

  column: {
    flex: 1, // Each column takes equal space
    alignItems: 'center', // Center content within each column
  },
  value: {
    fontSize: 16,
    marginBottom:14,
  },

  // New containers
  labelParentContainer: {
    flexDirection: 'row', // Display the label and other content in a row
    justifyContent: 'center', // Center the label horizontally
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    elevation: 4, // Add elevation for shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  labelParent: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  contentContainer: {
    flexDirection: 'row', // Display the content rows in a row
    justifyContent: 'space-between', // Add space between content columns
  },
});

export default VenteflashCard;