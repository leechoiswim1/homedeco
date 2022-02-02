# HomeDeco

---

ggumim 인테리어 관련 물품 판매 페이지 구현 과제

## 🔗 배포 링크

---

https://ggumimhomedeco.netlify.app/

### ✨ 설명
![HomeDecoDescImage](https://user-images.githubusercontent.com/85476908/152180643-76b90291-fbd4-4c9a-a585-5f5d5c81e442.PNG)

##### [상품 설명 버튼 변경]

- 가구 위 돋보기 모양을 클릭하면 tooltip이 표시되고 버튼은 닫기버튼으로 변경
- 닫기 버튼을 클릭하면 toolt tip이 없어지고 돋보기 버튼으로 변경

##### [tooltip 기능]

- 상품설명 버튼 클릭시 tool tip 하나만 노출
- 하단 슬라이드에서 가구 선택시 해당 tool tip으로 변경
- 가구 위치에 따라 tooltip박스 위치 변경
  - 전체 이미지의 width의 위쪽에 위치한 가구의 경우 tool tip이 상품 설명 버튼 밑 위치
  - 전체 이미지의 width의 아래에 위치한 가구의 경우 tool tip이 상품 설명 버튼 위 위치
  - 전체 이미지의 height의 왼쪽에 위치한 가구의 경우 tool tip이 상품 설명 버튼부터 시작
  - 전체 이미지의 height의 오른쪽에 위치한 가구의 경우 tool tip이 상품 설명 버튼쪽에서 끝남

##### [가구 이미지 슬라이드]

- 이미지 선택시 뒤에 배경색 변경
- 스와이프 라이브러리를 사용하여 스와이프 구현
- 할인율이 있는경우 이미지 우측상단에 할인율 표시

##### [입점 여부에 따라 정보 처리]

- 입점시 할인율을 표시, 미입점시 예상가로 표시

## 💿 설치 및 실행 방법

    $ yarn install
    $ yarn start

---

## 📚 프로젝트 구조

---

    ├── public
    │   ├── index.html
    ├── src
    │   ├── Components
    │   ├── service
    │   ├── styles
    │   └── utils
    └── some_more_file.xxx

## 🛠️ 기술 스택

---

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
