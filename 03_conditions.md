## 조건문

### if문 

가장 기본적인 조건문은 if문 입니다. 
if문은 "~~ 하다면 ~~를 해라 "를 의미합니다.

if문을 사용하면, 이렇게 특정 조건이 만족 될 때에만 특정 코드를 실행 시킬수 있습니다.

if(조건){
    코드;
} 

const a = 1;
if (true) {
  const a = 2;
  console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

if문 안의 a 값은 2
if문 안의 a 값은 1

var a = 1;
if (true) {
  var a = 2;
  console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

if문 안의 a 값은 2
if문 안의 a 값은 2

--->이러한 문제로 var는 쓰지 말라 


### if~else문 
if~else문은 "~~하다면 ~~하고 , 그렇지 않다면 ~~~해라"를 의미합니다.

const  a =10;
if(a > 15){
    console.log('a가 15보다 큽니다.');
}else {
    console.log('a가 15보다 크지 않습니다.');
}


### if~else if문 
if~else if문은 여러 조건에 따라 다른 작업을 해야 할 때 사용됩니다.

const a = 10;
if(a===5){
    console.log('5입니다.');
}else if(1 === 10){
    console.log('10입니다.!');
}else{
    console.log('5도 아니고 10도 아닙니다.');
}

### switch/case 문
switch/case 문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용합니다.

const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}

출처:https://github.com/velopert/learnjs