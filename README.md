# dana-s-restaruant
연재의 레스토랑 메뉴 with Node.js, typescript, express
- https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/#test-the-express-api-endpoints
- 위 주소의 자료를 보고 공부한 것을 정리하는 레포지토리
---

# 실행방법
- `npm run dev`
- .env 파일 없이 정상작동하지 않습니다.
---

# 배운것 ( 21.11.09~ing)

## 인터페이스
  - 코드에서 사용되는 값의 형태를 미리 지정하여 사용할 수 있다.
  - 인터페이스에 이름을 지정하여 사용할 수 있다.

```javascript
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
    타입 검사기는 printLabel 호출을 확인합니다.  
    printLabel 함수는 객체를 통과하는 string 유형의 라벨 호출을 필요로 하는 단일 파라미터를 가집니다.  

LabelValue라는 이름을 가진 인터페이스를 생성하여 사용하면,  
인터페이스를 통해 label의 형태를 정의하고 parameter가 해당 인터페이스를 충족시키면 허용된다.  
인터페이스 내의 속성은 순서 상관없다.  
```javascript
interface LabeledValue {
  label: string;
}
 
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
### 프로젝트에 사용된 코드

```javascript
// src/items/item.interface.ts

export interface BaseItem {
    name: string;
    price: number;
    dascription: string;
    image: string;
}

export interface Item extends BaseItem {
    id: number; 
}
```
- 위 코드에서도 BaseItem 객체의 요구사항을 인터페이스가 설명하고 있다.  
- Item의 요구사항은 BaseItem기반으로 한다.
  
## controller
- 컨트롤러의 로직은 서비스에 위임하므로, 코드가 간결하다.
- 데이터를 유지하기 위해 mongoDB 등을 사용할 경우, ItemService 모듈의 로직만 수정하면 됨

## ES6
### import * as
- 해당 모듈 전체를 가져온다.
- export한 모든 것들을 현재 범위 내 모듈로 바인딩되어 들어간다.
- 모듈에서 내보낸 모든 함수를 가져와서 로컬에 하나의 객체로 묶어서 이름 충돌을 피하고  
  어떤 패키지에서 함수가 나오는지 쉽게 찾을 수 있다.
  ```javascript
  import * as ItemService from "./items.service";

  ```
### 객체지향 구문
- 자바스크립트에서 클래스는 함수의 한 종류이다.
- 이전에 프로토타입으로 클래스를 사용할 수 있었으나 es6에서 클래스개념이 도입되었다.


```javascript
class Member {
  // 생성자
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // 메서드

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member('연재','김');
console.log(m.getName()); // 김연재
```
- `class Member`가 하는 일
  - Member라는 이름을 가진 함수를 생성, 함수 본문은 생성자 메서드 `constructor`에서 가져옴.
  - 생성자 메서드가 없으면, 본문이 비워진 채로 함수가 만들어짐
- getName()같은 클래스 내에서 정의한 메소드를 `Member.prototyp`에 저장

클래스 명령
  class 클래스명 {
    ...셍성자 정의
    ...프로퍼티 정의
    ...메소드 정의
  }
- 생성자는 객체를 초기화 하는 역할을 한다.
- 생성자의 이름은 constructor로 고정
- 

## 에러 핸들링 
- 클라이언트가 예상치 못한 경로로 요청을 한다면, 400 Bad Request로 응답한다.
- 이러한 것을 처리하는 미들웨어를 만들어 관리하는것이 좋다.

