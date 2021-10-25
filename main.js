
const apikey=YOUR_API_KEY;




function fetchWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        display(data);
    }).catch(()=>{
        alert("Weather not found");
    })
}

function display(data){
    const name=data.name;
    const temp=data.main.temp;
    const humidity=data.main.humidity;
    const country=data.sys.country;
    const icon=data.weather[0].icon;
    const description=data.weather[0].description;
    const wind=data.wind.speed;
    
    // for futher modification:
    // const feelsLike=data.main.feels_like;
    // const tempMax=data.main.temp_max;
    // const tempMin=data.main.temp_min


    document.querySelector(".city").innerText="Weather in "+ name+", "+country;

    document.querySelector("#temp").innerText=temp+" °C";

    document.querySelector(".description").innerText=description;

    document.querySelector(".humidity").innerText="Humidity : "+humidity+" %";

    document.querySelector(".wind").innerText="Wind Speed : "+wind+" Km/hr";

    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";

    document.querySelector(".container").style.backgroundImage=`url('https://source.unsplash.com/1600x900/?${name}')`;

}

function search(){
    let searchText=document.querySelector("#searchBar").value;
    fetchWeather(searchText);
}
let btn=document.getElementById("btn");
btn.addEventListener("click",search);

let searchBar=document.getElementById("searchBar");
searchBar.addEventListener("keyup",function(event){
    if (event.key=="Enter"){
        search();
    }
})