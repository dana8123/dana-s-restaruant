# dana-s-restaruant
연재의 레스토랑 메뉴 with Node.js, typescript, express
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
