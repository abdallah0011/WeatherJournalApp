/* Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();
// Personal API Key for OpenWeatherMap API
const apiKey = "1790504b5e873c518a6f31faca0b1dc6";
const btn = document.querySelector("#generate");

// Event listener to add function to existing HTML DOM element
btn.addEventListener("click", handleBtn);

/* Function called by event listener */
function handleBtn() {
  const zip = document.querySelector("#zip").value;
  const content = document.getElementById("feelings").value;

  if (!zip) {
    alert("Please, enter a ZIP code.");
    return;
  } else if (!content) {
    alert("Please, your feelings.");
    return;
  } else {
    getData(zip)
      .then((temp) => {
        return postData("/saveWeather", { temp, content, newDate });
      })
      .then(() => {
        return getProjectData();
      })
      .then((weatherData) => {
        updateUI(weatherData);
      })
      .catch((error) => console.log("Error occured: ", error));
  }
}

/* Function to GET Web API Data*/
const getData = async (zip) => {
  const temp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=metric`
  );
  try {
    const data = await temp.json();
    // console.log(data.main.temp);
    return data.main.temp;
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

/* Function to POST data */
const postData = async (url, data) => {
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  try {
    return;
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

/* Function to GET Project Data */
const getProjectData = async () => {
  const weather = await (await fetch("/getWeather")).json();
  return weather;
};

/* UpdateUI dynamically */
function updateUI(weatherData) {
  const date = document.getElementById("date");
  const content = document.getElementById("content");
  const temp = document.getElementById("temp");

  date.innerHTML = weatherData.newDate;
  content.innerHTML = weatherData.content;
  temp.innerHTML = weatherData.temp;
}
