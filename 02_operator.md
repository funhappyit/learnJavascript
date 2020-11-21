## 연산자

### 연산자 
```javascript
let value = 1; //변수 선언
value = 1; // 대입 연산자 
```
첫번째 줄은 새로운 변수를 선언하는 것으로서, 대입 연산자에 해당하지 않습니다. 
= -> 대입 연산자 

### 산술 연산자 
산술 연산자는 사칙연사과 같은 작업을 하는 연산자를 의미합니다.

* +: 덧셈
* -: 뻴셈
* *: 곱셈
* /: 나눗셈 
```javascript
let a = 1;
a++;
++a;
```
결과는 3이 나타납니다. ++는 특정 변수에 1을 바로 더해줍니다. 그런데,++가 변수 이름 앞에 오는 것과 
뒤에 오는 것에 차이가 있습니다.
```javascript
 let a = 1;
 console.log(a++);
 console.log(++a);
```
 1
 2

 console.log(a++); 를 할 때에는 1을 더하기 직전 값을 보여주고 console.log(++a); 를 할 때에는 1을 더한 
 다음의 값을 보여준다는 차이가 있습니다. 

 덧셈 외에는 뺄셈도 똑같이 할 수 있습니다.
```javascript
 let a =1;
 a--;
 console.log(a);
```
 결과는 0이 나타납니다. 

### 대입 연산자 

덧셈 말고 다른 연산도 가능합니다.
```javascript
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);
```
결과는 1이 나타나게 됩니다.

### 논리 연산자

논리 연산자는, 불리언 타입을 위한 연산자입니다. 논리 연산자는 다음 장에서 우리가 if문을 배울 때 매우 유용합니다.

총 3가지가 있습니다.

+ ! : NOT
+ && : AND
+ || : OR


### NOT

NOT 연산자는 true는 false로, false는 true 로 바꿔줍니다.
```javascript
const a = !true;
console.log(a);
```
a 값은 false입니다.

### AND 

AND 연산자는 양쪽의 값이 둘 다 true 일때만 결과물이 true입니다.


### OR

OR 연산자는 양쪽의 값 중 하나라도 true 라면 결과물이 true 입니다. 그리고, 두 값이 둘 다 false 일 때에만 false입니다.

다음 상황엔 t값은 true입니다.
```javascript
let t = true || false;
t = false || true;
t =  true || true;
```
반면 상황엔 false입니다.
```javascript
let f = false || false;
```
### 연산 순서

NOT -> AND -> OR 

### 비교 연산자 

비교 연산자는 두 값을 비교 할 때 사용 할 수 있습니다.

#### 두 값이 일치하는지 확인 
```javascript
const a = 1;
const b = 2;
const equals = a === b;
```
=== 는 두 값이 일치하는지 확인해줍니다. 일치한다면, true, 일치하지 않는다면 false가 나타납니다. 

두 값이 일치하는 지 확인 할때 = 문자를 3번 사용한는데, 2개로도 비교를 할 수 있습니다. 

=문자가 3개 있을 때와 2개 있을 때의 차이는 타입 검사까지는 하지 않는다는 것입니다.

== 대신 ===를 사용할 것을 권장 드립니다. == 를 사용하다보면 실수를 할 확률이 높아집니다.

### 두 값이 일치하지 않는지 확인 

두 값이 일치하지 않는지 확인 할 때에는 !== 를 사용하면 됩니다.

const value = 'a' !== 'b';

결과물은 true가 됩니다.

!= 를 사용하게 되면 타입 검사를 하지 않습니다.

### 크고 작음
두 값 중에서 무엇이 더 크고 작은지를 비교하기 위해서는 다음 연산자를 사용 할 수 있습니다.
```javascript
const a = 10;
const b = 15;
const c = 15;

console.log( a < b); //true
console.log( b < a); //true
console.log( b >= c); //true
console.log( a <= c); //true
console.log( b < c); //true
```
### 문자열 붙이기 
두 문자열을 붙일 때에는 + 로 할 수 있습니다.
```javascript
const a = '안녕';
const b = '하세요';
console.log(a+b); //안녕하세요 
```
출처:https://github.com/velopert/learnjs