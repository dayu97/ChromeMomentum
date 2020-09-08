const weather = document.querySelector(".js-weather");

const API_KEY = "4fabbfd0b834920d477ef7f16e668558";
//source : https://openweathermap.org/api
const COORDS = "coords";

function getWeather(lat, lng) {
    // fetch(``)안에는 가져올 데이터가 들어가면 된다.
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
    return response.json();
    })
    .then(function(json){
        //console.log(position);
        const temperature = json.main.temp;
        const place = json.name;
        // console.log(temperature);
        // console.log(place);
        weather.innerText = `${temperature} ℃ @ ${place}`;
        //.then의 역할 - 데이터가 완전히 들어온 다음 호출
    })
 }

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
    

//좌표를 가져오는데 성공했을 때 쓰는 함수. 좌표값이 없을 때에만 실행된다.
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('위치 정보를 읽을 수 없습니다.')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
    //getCurrentPosition은 두 개의 requirement이 있음.
}


// 정리: 만약 local storage에 아무것도 없으면 결국 getWeather 함수가 실행 된다 왜냐면,
// local storage에 아무것도 없으면 askForCoords 함수가 실행되고,
// 이 함수 안에서 정상적인 위치정보를 가져오게 되면 handleGeoSuccess가 실행 되는데, 이안에서 API가 최종적으로 호출되기 때문.
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
        //좌표를 요청.
    } else {
        //getWeather 함수 호출
       const parseCoords = JSON.parse(loadedCoords);
       getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();