import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '6b441df273msh63a347231b1fe8cp1f75c6jsna15f6d3bc93c' ,
    },
  });
    
  return data;
}