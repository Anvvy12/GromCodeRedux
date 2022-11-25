const weatherUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities";

const fetchweatherData = () => {
  console.log(weatherUrl);
  return fetch(weatherUrl).then((weatherData) => {
    if (weatherData.ok) {
      return weatherData.json();
    }
    throw new Error("Erorr with fetch");
  });
};

export default fetchweatherData;
