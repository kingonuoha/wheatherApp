let result =  document.getElementById("result");
let serachBtn =  document.getElementById("search-btn");
let cityRef =  document.getElementById("city");


//function to fetch weather details from api 


let getWeather = () =>{
    let cityValue = cityRef.value;

    // if input field is empty 
    if (cityValue.lenght == 0) {
        result.innerHTML = `<h3 class="msg">please fill in all fields ASAP!!</h3>`
    }else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        // clear the input filed on search 
        cityRef.value="";
        fetch(url).then((resp) => resp.json())
        // if city name is valid 
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.weather[0].description);
            console.log(data.name);
            // console.log(data.main);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `<h2>${data.name}</h2>

                            <h4 class="weather">${data.weather[0].main}</h4>
                            <h4 class="desc">${data.weather[0].description}</h4>
                            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                            <h1>${data.main.temp} &#176;</h1>
                            <div class="temp-container">
                            <div>
                                <h4 class="title">min</h4>
                                <h4 class="temp">${data.main.temp_min}</h4>
                            </div>
                            <div>
                                <h4 class="title">max</h4>
                                <h4 class="temp">${data.main.temp_max}</h4>
                            </div>
                        </div>
                            
                            `;
        })
        .catch(() =>{
result.innerHTML = `<h3 class="msg">City Not Found!!!</h3>`
        })
    }
};
serachBtn.addEventListener('click', getWeather)

window.addEventListener('keydown', (e) =>{
    if(e.keyCode == 13){
        getWeather()
    }
    // console.log(e)
    });
window.addEventListener('load', getWeather);