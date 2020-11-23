## 타이머 함수

타이머 함수는 일정시간마다 혹은 지정한 시간에 특정 함수를 실행할 수 있도록 하는 함수입니다. 

타이머 함수의 경우 setTimeout()과 setInterval() 두 가지가 있고 각 함수에 맞는 타이머 취소 함수가 있습니다. 
사실 타이머 함수는 Window객체의 메서드이므로 어디서나 사용 가능한 전역 함수입니다. 

+ setTimeout(Function, millisecond)
->  Function - 특정 시간이 되면 실행시킬 함수
    millisecond - 실행시킬 시간
    지금 시점으로 몇 밀리초 후에 실행할 것인지를 지정하며 밀리초(1/1000) 단위입니다

->  일정 시간 후 지정한 함수를 한 번 실행합니다

+ setInterval(Function, millisecond)

->  Function - 특정 시간이 되면 실행시킬 함수
    millisecond - 실행시킬 시간
    지금 시점으로 몇 밀리초 후에 실행할 것인지를 지정하며 밀리초(1/1000) 단위입니다

 ->  넘긴 시간을 주기로 매번 함수를 실행합니다

+ clearTimeout(참조값)

->   참조값 - 중지시킬 타이머의 참조값 
    (setTimeout()을 실행시키고 return 받은 값)

->  setTimeout()으로 지정한 타이머를 중지시킵니다.

+ clearTimeout(참조값)

->  참조값 - 중시시킬 타이머의 참조값
setInterval()을 실행시키고 return 받은 값)

->  setInterval()로 지정한 타이머를 중지시킵니다

### test

+ setTimeout(Function, millisecond)

일정한 시간이 지나면 특정 함수를 한 번 실행할 수 있습니다.

다음은 1초 후 hello() 함수를 실행하는 코드입니다.

```javascript
var hello = function() {
            alert("반가워요");
        }
 
    setTimeout(hello, 1000);
```
결과 - 페이지가 로딩되고 1초 후 알림창이 나타납니다. 

+ clearTimeout(참조값)

실행한 setTimeout를 취소시킵니다. 
```javascript
 var hello = function() {
            alert("반가워요");
        }
 
        //타이머를 걸고 해당 타이머에 대한 참조값을 timeout 변수에 저장
        var timeout = setTimeout(hello, 1000);
 
        //timeout 타이머를 취소시킴
        clearTimeout(timeout);

```
결과 - 페이지가 로딩되고 1초가 지나도 아무 반응도 일어나지 않습니다. 타이머가 취소 되었기 때문입니다.

+ setInterval(Function, millisecond)

```javascript
일정 시간마다 특정 함수를 실행 시킵니다.
  var hello = function() {
            alert("반가워요");
        }
 
        setInterval(hello, 1000);
```
결과 - 1초마다 알림창이 뜹니다.(확인 버튼을 계속 눌러야 합니다) 

+ clearInterval(참조값)
실행한 setInterval() 함수를 중지시킵니다. 

```javascript
        var hello = function() {
            alert("반가워요");
        }
 
        var interval = setInterval(hello, 1000);
 
        //setTimeout을 통해 3초 후 setInterval()을 중지
        setTimeout(function () {
            clearInterval(interval);
        }, 3000);
```
결과 - 알림창이 1초마다 한번씩 3번까지 뜨다가 더이상 나타나지 않게 됩니다. 

출처: https://dololak.tistory.com/36?category=636505 [코끼리를 냉장고에 넣는 방법]