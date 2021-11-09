# dana-s-restaruant
연재의 레스토랑 메뉴 with Node.js, typescript, express
---

# 실행방법
- `npm run dev`
- .env 파일 없이 정상작동하지 않습니다.
---

# 배운것 ( 21.11.09~ing)
- 인터페이스
  - 타입스크립트 유형 검사는 값의 형태에 초점을 맞춤.(duck typing, structural subtyping)
  - 인터페이스는 이런 유형의 이름을 지정하는 역할을 한다.

```javascript
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
타입 검사기는 printLabel 호출을 확인합니다.  
printLabel 함수는 객체를 통과하는 string 유형의 라벨 호출을 필요로 하는 단일 파라미터를 가집니다.  

아래와 같이 변경하면,

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
인터페이스를 사용하여 label이 문자열이어야 한다고 설명합니다.  
함수에 전달하는 객체가 요구사항을 충족하면 허용됩니다.  
이러한 속성은 순서대로 올 필요가 없으며, 인터페이스에 필요한 속성이 있고  필요한 유형만 있으면 됩니다.

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
{ 위 코드에서도 BaseItem 객체의 요구사항을 인터페이스가 설명하고 있다.  
Item의 요구사항은 BaseItem기반으로 한다.}

