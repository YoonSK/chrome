const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);

}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add("showing");

    const date = new Date();
    const hours = date.getHours();

    let mention = 'Hello';
    if(0<= hours && hours <= 4 || 20 < hours){
        mention = 'Good night';
    } else if (hours<12){
        // 시간이 5시~12시이면 굿모닝
        mention = 'Good morning';
    } else{
        // 13시부터 20시까지는 굿애프터눈
        mention = 'Good afternoon';
    }
    // js-greeting에 innerText 넣어주기
    greeting.innerText = `${mention}, ${username}.`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}