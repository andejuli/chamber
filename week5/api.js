const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/83406?unitGroup=metric&key=QNBVRTNBNG9LNBJZQPR4QYCYN&contentType=json';

async function getWeatherData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);  // note that we reference the prophet array of the data object given the structure of the json file
    let cTemp = (data.currentConditions.temp);
    let fTemp = cTemp * 1.8 + 32;
    console.log(fTemp);
    let icon = querySelector('.weather_img')
}

  
  getWeatherData();
