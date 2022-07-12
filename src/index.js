import './styles.css'

document.querySelector('.logo').src = '../src/assets/images/weatherlogo.png';
const userInput = document.getElementById('userInput');
const inputApi = document.querySelector('.inputApi');

document.getElementById('userb').addEventListener('click', () => {
    if (inputApi.classList.contains = 'hide') inputApi.classList.remove('hide');
    fetchData(userInput.value);
    userInput.value = '';
})

const fetchData = (data) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&APPID=137d6bf0eddeb27a9db5bbb98f13cf31`;
    console.log(url);
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('degrees').innerHTML = `${Math.round((data.main.temp-273.15)*100)/100} °C`;
            document.getElementById('feels').innerHTML = `Feels like: ${Math.round((data.main.feels_like-273.15)*100)/100} °C`;
            document.getElementById('humidity').innerHTML = `Humidity: ${Math.round(data.main.humidity)}%`;
            document.getElementById('wind').innerHTML = `Wind speed: ${Math.round((data.wind.speed)*100)/100} km/h`;
        });
}