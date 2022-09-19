const searchBarInput=document.querySelector('#searchBarTxt')
const searchBtn=document.querySelector("#submitBtn")
const cityName=document.querySelector("#cityName")
const weatherStat=document.querySelector('#mainMessage')
const currentTemp=document.querySelector('#currentTemp')
const maxTemp=document.querySelector('#maxTemp')
const minTemp=document.querySelector("#minTemp")


const getWeatherData=async()=>{
    try {
        const searchCityName=searchBarInput.value
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=a6d8d3e278a1745de95c8de12eb58ce2`)
        const data=await response.json()
        setWeatherData(data)
        console.log(data);
    }
    catch (error) {
        alert('Please enter correct city name')
    }
}

const setWeatherData=(data)=>{
    cityName.innerHTML=data.name
    weatherStat.innerHTML=data.weather[0].main //for message- eg: clouds
    currentTemp.innerHTML=`<span>Temp: ${data.main.temp}<span>`
    maxTemp.innerHTML=`<span>Max-Temp: ${data.main.temp_max}</span>`
    minTemp.innerHTML=`<span>Min-Temp: ${data.main.temp_min}</span>`
}

searchBtn.addEventListener('click',getWeatherData)
document.addEventListener('keypress',(e)=>{
    if(e.code==='Enter'){
        getWeatherData()
    }
})