arguments 객체

자바스크립트에서는 함수를 호출할 때 내부적으로 arguments 객체가 생성됩니다.

arguments 객체는 호출할때 넘겨준 인자값들을 가지고 있습니다.

이 정보는 실제로 넘겨받은 매개변수와 별개로 갖게 되는 정보입니다. 
```javascript
var arguFunc = function(first, second){
    console.log(first);
    console.log(second);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
 
arguFunc("첫번째 인자", "두번째 인자");
```
출력결과
```javascript
첫번째 인자
두번째 인자
첫번째 인자
두번째 인자
```
 

그리고 인자값이 없는 경우 비어있는 arguments 객체가 생성됩니다.

또한 arguments 객체는 배열처럼 사용될 수 있으나 엄밀히 배열이 아닌 객체입니다.

### 가변인자 함수 만들기

arguments 객체를 이용하면 다음처럼 가변인자 함수를 만들 수 있습니다.
```javascript
var showArguments = function(){
    for(var i = 0; i < arguments.length; i++){
        console.log("인자 " + (i + 1) + " : " + arguments[i]);
    }
}
 
 
showArguments("첫번째 인자", "두번째 인자", "세번째 인자");
```

```javascript
인자 1 : 첫번째 인자
인자 2 : 두번째 인자
인자 3 : 세번째 인자
```
출처: https://dololak.tistory.com/37 [코끼리를 냉장고에 넣는 방법]