<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsunhewhttps%3A%2F%2Fgithub.com%2Fsunhew&count_bg=%2379C83D&title_bg=%23555555&icon=mongodb.svg&icon_color=%23B5FAFF&title=Welcome+to+my+github&edge_flat=false"/></a>

![header](https://capsule-render.vercel.app/api?type=soft&color=gradient&text=%20CoffeeMenu%20&height=300&fontSize=100&animation=blinking&fontAlign=50)

# CoffeeMenu

[사이트 방문](https://coffee-api-rosy.vercel.app/)

## 프로젝트 설명

### 프로젝트 기획 이유

다양한 커피 사이트의 정보를 수집하여 사용자에게 편리하게 제공하기 위해 기획되었습니다. 사용자들이 여러 사이트를 일일이 방문하지 않고도 다양한 커피 메뉴와 관련 정보를 한 곳에서 쉽게 검색하고 비교할 수 있는 공간이 필요하다고 느껴 기획하게 되었습니다.

### 🛠️ 사용하는 기술

<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"  height="25px"/> <img alt="sass" src="https://img.shields.io/badge/sass-1572B6?style=for-the-badge&logo=sass&logoColor=white" height="25px"/> <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white" height="25px"/> <img src="https://img.shields.io/badge/react-512BD4?style=for-the-badge&logo=React&logoColor=white" height="25px">

### 목표

- 다양한 커피 메뉴를 쉽게 검색하고 비교하는등의 기능을 제공하여 사용자들이 편안함을 보장.

### 타겟

- 커피 애호가
- 다양한 커피 메뉴를 찾고자 하는 일반 사용자

### 겪었던 문제점

1. **서로 다른 구조의 카페 사이트들의 크롤링** - 다양한 구조의 사이트에서 데이터를 수집하는 것이 어려웠습니다. 이를 해결하기 위해 각 사이트별로 맞춤형 크롤링 스크립트를 작성하여 데이터를 효율적으로 수집할 수 있었습니다.
   <br/>

2. **크롤링 과정에서 겪었던 사이트의 보안 문제로 정보 수집의 어려움** - 일부 사이트는 보안 설정으로 인해 크롤링이 어려웠습니다. 이를 해결하기 위해 프록시 서버와 IP 로테이션을 사용하여 보안 문제를 극복하였습니다.
   <br/>

3. **수집한 정보들을 리액트에 적용하는 과정** - 수집된 데이터를 리액트에 적용하는 과정에서 데이터 구조의 일관성을 유지하는 것이 어려웠습니다. 이를 해결하기 위해 데이터 정규화 및 상태 관리를 개선하여 일관된 데이터를 제공할 수 있었습니다
   <br/>

---

## 브랜딩

Coffee Menu 이라는 브랜드 이름은 커피(Coffee) 와 메뉴(Menu) 가 결합된 단순하고 직관적인 의미를 담고 있습니다. "커피"는 다양한 커피 메뉴와 정보를 의미하고, "메뉴"는 각 프랜차이즈의 최신 메뉴를 제공한다는 의미를 담고 있습니다.

### 색상

밝으면서도 커피 고유의 따뜻한 느낌을 내기 위해 여러 색 조합을 시도하고 저희만의 색상 팔렛트를 완성했습니다.

<img src="https://github.com/gnlgk/coffee-api/assets/161446039/545c2cef-ea35-4bca-8855-e5320f21d3aa" alt="image 49" width="90%"/>

---

## 경쟁사이트 및 레퍼런스

**경쟁사이트**:

- [CoffeeGeek](https://coffeegeek.com/)
- [Home-Barista](https://www.home-barista.com/)
- [Coffee Review](https://www.coffeereview.com/)

**레퍼런스**:

- [Coffee Channel](https://www.coffeechannel.com/)
- [Perfect Daily Grind](https://perfectdailygrind.com/)
- [Bean Box](https://beanbox.com/)

---

## 구현되어 있는 기능들

- 실시간 메뉴 업데이트: Pyhon을 사용해 정보를 자동 수집해 제공하기 때문에 추가되거나 삭제되는 메뉴 역시 다음날 바로 적용되어 사용자는 최신 커피 메뉴를 빠르게 확인할 수 있습니다.

<br/>

- 모바일 최적화: 모바일 환경에서도 원할때 언제든지 검색할 수 있는 카페 음료들을 볼 수 있습니다.

<br>

- 음료 검색기능: Home의 검색바에 원하는 음료를 검색하면 해당 음료들의 정보가 제공됩니다.

<br>

---

## 📑 컨셉

- 심플하고 깔끔한 직곽적인 UI/UX
- 색상 :

1. **흰색**

   - 밝고 깔끔한 느낌을 전달하는 메인 컬러로, 넓고 확장된 공간감을 주어서 메인 컬러로 선택했습니다.
     <br/>

2. **연한 회색** - 흰색과 대비되어 무게감 있고 견고한 느낌을 전달하지만 사이트의 무게가 너무 무거워 지지않을 색상을 서브 색상으로 선택했습니다. 또한 검정색은 흰색 메인 색상과 대비되어 텍스트, 아이콘, 그리고 다른 요소들이 눈에 잘 띄게 만들어주는 효과를 기대했습니다.
   <br/>

3. **진한 커피색**
   - 고급스럽고 따뜻한 느낌의 포인트 컬러로, 사용자의 주목을 끌고 중요한 버튼이나 링크, 강조하고 싶은 정보 부분에 사용했습니다.

---

## 👤 프로젝트 팀원

박진아
[github](https://github.com/gnlgk)

최선화
[github](https://github.com/sunhew)

---

## 📑 기획 스토리 보드

<img src="https://github.com/gnlgk/coffee-api/assets/161446039/dd4139d8-2069-47bd-b7be-8601ae19f6b2" alt="디자인 맵" width="90%"/> 
<img src="https://github.com/gnlgk/coffee-api/assets/161446039/b63e6d30-fdad-427f-98ea-4313b560e8ea" alt="헤더" width="90%"/> 
<img src="https://github.com/gnlgk/coffee-api/assets/161446039/7b4a6cb3-19b1-4c5e-99d6-68e769f7d94a" alt="메뉴 정보" width="90%"/> 
<img src="https://github.com/gnlgk/coffee-api/assets/161446039/f41f3de7-9041-42af-8f88-85d746a39bf6" alt="서치" width="90%"/> 
<img src="https://github.com/gnlgk/coffee-api/assets/161446039/1268752b-a889-4370-bf43-eca5f901fb68" alt="제작자 픽" width="90%"/>
