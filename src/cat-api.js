const URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = 'live_K40rGD47mG8F1tgyPpELwQQGPib5i9zegPzPjuUQqAbLUpHNSIAzQ3xFPcEJMJzZY';


function fetchBreeds() {
    const params = new URLSearchParams({
      api_key: API_KEY,
    });
    return fetch(`${URL}?${params}`).then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  function fetchCatByBreed(breedId) {
    return fetch(
      `https://api.thecatapi.com/v1/images/${breedId}?api_key=${API_KEY}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  
  export { fetchBreeds, fetchCatByBreed };


  