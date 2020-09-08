const clockContainer = document.querySelector(".js-clock");
//query selector는 element의 자식을 탐색.
//이 경우는 js-clock의 자식을 탐색하고 싶은 것.
const clockTitle = clockContainer.querySelector("h1");
//이 경우 대신, h1의 클래스를 지정하지 않았다면
//(".js-title") 대신 ("h1")을 기입해도 됨.

//위의 변수선언이 중복되는 활동이라 여겨지면. 아래와 같이 해도 동일.
/* const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector(".js-title"); */



function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    console.log(clockTitle)
    clockTitle.innerText = `🕐${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    //여기서 1시,분,초가 01로 표기가 안되고 그냥 1로 표기되어 불만족...
    //위에 문제를 해결하기 위해 삼항연산자 추가.
    //삼항연산자 조건 ? 참일 때 결과 : 거짓일 때 결과
}


/*const date = new Date() --> undefined
  date --> Wed Jul 22 2020 23:45:11 GMT+0900
  date.getDate() --> 22
  date.getDay() --> 3   3은 수요일을 의미. 월요일은 1*/

function init(){
    getTime();
    //현재 시간을 가져오는 함수.
    setInterval(getTime, 1*1000);
    //setInterval(함수, 실행하고 싶은 시간) 시간 간격으로 함수 실행.
    //시간은 millisecond 기준이기에 1초 = 1000.
}

init();