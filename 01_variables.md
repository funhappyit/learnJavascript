## 변수와 상수

#### 선언: 특정 이름에 특정 값을 설정하는 것 
+ let value = 1;
-> value는 1이야~ 라고 정의 

#### 변수: 바뀔수 있는 값 한 번 값을 선언하고 나서 바꿀 수 있습니다.
+ 이런 코드는 오류 발생
let value = 1;
let value = 2;

#### 상수: 상수는, 한번 선언하고 값이 바뀌지 않는 값을 의미합니다. 즉, 값이 고정적 상수를 선언 할 때에는 다음과 같이 선언함 
+ const a = 1;
상수는 선언하고 나면, 값을 바꿀 수 없습니다. 
```javascript
const a = 1;
a = 2; 
```
+ 상수를 선언할 때에도 마찬가지로 한 번 선언했으면 같은 이름으로 선언 할 수 없습니다.
```javascript
const a = 1;
const a = 2;
```
#### var는 더이상 사용하지 않습니다.

#### 데이터 타입

#### 숫자(Number)

+ let value = 1;

#### 문자열(String)

+ let text = 'hello';

let name = '자바스크립트';

#### 참/거짓(Boolean)
+ boolean 은, 참 혹은 거짓 두가지 종류의 값만을 나타낼 수 있습니다.

let good = true;
let loading = false;

### null과 undefined

+ null: 주로, 이 값이 없다! 라고 선언 할 때 사용합니다.
      우리가 없다고, 고의적으로 설정하는 값을 의미합니다.
      
+ undefined: 아직 값이 설정되지 않은 것을 의미합니다.
            우리가 설정하지 않았기 때문에 없는 값을 의미합니다.


출처:https://github.com/velopert/learnjs