import axios from 'axios';

const fetchDataFromAPI = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);


    if (response.status === 200) {
      const data = response.data;
      // Do something with the data, e.g., set it in state or return it
      console.log(data);
      return data;
    } else {
      console.error('Request failed with status:', response.status);
      return null; // Handle the error as needed
    }
  } catch (error) {
    console.error('Error:', error);
    return null; // Handle the error as needed
  }
};

export { fetchDataFromAPI };