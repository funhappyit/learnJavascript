const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
/*
const buttons = document.querySelectorAll('button');
const [increase. decrease] = buttons;

*/

increase.onclick = () => {
    //parseInt는 text를 숫자로 변환 10은 10진수로 변환
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    console.log('decrease가 클릭됨');
    number.innerText = current - 1;
}
