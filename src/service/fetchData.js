const API = 'https://api.punkapi.com/v2';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
}

export const getAllBeers = () => 
  fetch(`${API}/beers?per_page=25`, config)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));

export const getBeersByPage = (page) => 
  fetch(`${API}/beers?page=${page}&per_page=25`, config)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));

export const getOneBeer = (id) => 
  fetch(`${API}/beers/${id}`, config)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
