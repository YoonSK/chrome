const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");  //number 로 return 이라 padStart를 쓰려면 text롤 변환해야함
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//website 가 load 되자마자 호출하게끔
getClock();
setInterval(getClock, 1000);

