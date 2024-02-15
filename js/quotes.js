const quotes = [
    {
        quote : "책은 마음의 음식이다.",
        author : "프랑수아 라브레",
    },
    {
        quote : "독서는 생각의 촉매이다.",
        author : "알버트 아인슈타인",
    },
    {
        quote : "좋은 글은 언제나 새로운 것을 발견하게 만든다.",
        author : "에르네스트 헤밍웨이",
    },
    {
        quote : "책 없는 방은 마치 살아있지 않은 방과 같다.",
        author : "마리아 무주토바",
    },
    {
        quote : "좋은 책을 찾는 것은 새로운 친구를 만나는 것과 같다.",
        author : "셸비 스터론",
    },
    {
        quote : "책은 우리가 살아가는 세상을 더 깊이 이해하게 해준다.",
        author : "마빈 메인델",
    },
    {
        quote : "책은 마음을 풍부하게 만들고, 인생을 확장시킨다.",
        author : "헨리 데이비드 소로우",
    },
    {
        quote : "우리가 읽는 것은 우리가 되고자 하는 것이다.",
        author : "제이드 코크랜",
    },
    {
        quote : "책을 읽는 것은 여행하는 것과 같다. 새로운 세계를 발견할 수 있다.",
        author : "도로시 프로우드",
    },
    {
        quote : "책은 미래의 문을 여는 열쇠이다.",
        author : "비클로 와이어",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
