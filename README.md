# 서비스명 : BooKids
### 서비스설명: 추천/알고리즘 기반 아동 도서/동화 추천 웹/앱 도서관
주요 기능
추천 알고리즘 기반 도서추천
온라인 도서 관람/결말 수정해보기
리뷰/게시판 기능

프로젝트 기간
2025.08.11 ~ 2024.08.22 (2주)



### 화면 구성

<img width="1500" height="800" alt="image" src="https://github.com/user-attachments/assets/5382d81e-2377-42c4-ab0a-b4536f86271e" />

<img width="1500" height="800" alt="image" src="https://github.com/user-attachments/assets/ef04f300-9fcb-4a7e-bd97-94b98b130918" />

<img width="1500" height="800" alt="image" src="https://github.com/user-attachments/assets/1644d2ee-fa4e-470a-ab6e-382034463aa0" />

<img width="1500" height="800" alt="image" src="https://github.com/user-attachments/assets/7f567753-5b67-45e2-baa1-bfbd1a35bb6d" />

<img width="1500" height="800" alt="image" src="https://github.com/user-attachments/assets/e153f171-cbb9-429f-a214-dc30c6e6488a" />

<img width="1500" height="800" alt="image" src="https://github.com/user-attachments/assets/ed21b756-6195-491f-bce1-ace968a05b87" />



### 기능정의 

<img width="952" height="525" alt="기능정희1" src="https://github.com/user-attachments/assets/797a2d36-4e56-4127-92dd-9ba007b26fc3" />
<img width="947" height="525" alt="기능정의2" src="https://github.com/user-attachments/assets/32efaa03-4115-42da-b598-14e349977a92" />
<img width="953" height="525" alt="기능정의3" src="https://github.com/user-attachments/assets/6c828272-6301-4bee-8311-101ed75cc2b4" />



### URL 다이어그램

<img width="950" height="525" alt="ULM" src="https://github.com/user-attachments/assets/eec5f5b5-fe4c-4170-bdfb-52d713e513fb" />



### DB 설계

<img width="950" height="525" alt="DB설계1" src="https://github.com/user-attachments/assets/0f797569-d1c1-4702-b36a-74187737909d" />
<img width="950" height="525" alt="image" src="https://github.com/user-attachments/assets/d8919497-65c2-4198-88be-5c43edd3c59e" />




 ###  트러블슈팅 및 로드맵 

| 항목 | 내용 |
| :--- | :--- |
| **당초 목표** | **AI 기반의 결말 생성 기능 구현** <br> 사용자가 입력한 키워드를 바탕으로 AI가 새로운 결말 텍스트와 삽화 이미지를 자동으로 생성하는 아키텍처 설계 |
| **현재 상황** | **사용자 직접 수정 방식 (수동 구현)** <br> 한정된 개발 기간 내에 모델 서빙 환경(FastAPI) 구축에 제약이 있어, 사용자가 직접 사진을 업로드하고 내용을 작성하는 참여형 방식으로 우선 구현 |
| **해결 방법** | 서비스 런칭 안정성을 위해 기능의 본질인 '결말 바꾸기'를 유지하되, **AI 자동 생성 대신 사용자 직접 편집 인터페이스**를 최적화하여 제공 |
| **향후 계획** | **AI 기반 자동화 업데이트 예정** <br> Langchain 및 모델 서빙 서버를 연동하여 '키워드 입력만으로 결말이 완성되는 AI 동화 엔진'으로 고도화할 계획 |
 

### 기술스택

| 구분 | 내용 |
| :--- | :--- |
| **사용 언어** | ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) |
| **프레임워크** | ![Spring Boot](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) |
| **개발 및 빌드** | ![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white) ![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white) ![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) |
| **실행 환경** | ![JDK 17](https://img.shields.io/badge/JDK_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) ![JVM](https://img.shields.io/badge/JVM-007396?style=for-the-badge&logo=java&logoColor=white) |
| **데이터베이스** | ![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white) |
| **API** | ![Aladdin API](https://img.shields.io/badge/Aladdin_API-0054A6?style=for-the-badge) |


 
### 팀원 소개

| <img src="이미지주소" width="100"> | <img src="이미지주소" width="100"> | <img src="이미지주소" width="100"> |
| :---: | :---: | :---: |
| **김태준** | **이민지** | **모준영** |
| Frontend | Frontend | Backend |
| [![github](https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/jakemoti0n) | [![github](https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/깃허브ID) | [![github](https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/깃허브ID) |




