import styled from "styled-components";

<<<<<<< HEAD
export const ListBody = styled.div`
  width: 1200px;
  height: auto;
  /* left: 50%; */
  /* position: absolute; */
  background-color: beige;

  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center; // 유진 - ListBody를 센터로 맞추려고 left position은 주석처리했습니다
  padding-top: 60px; // 유진 - 버튼 위치때문에 상단에 여백 줌
  padding-bottom: 60px; // 유진 - 상단이랑 비율 맞추려고 하단에도 여백 줌
`;

// 글쓰기 버튼
export const ListBtn = styled.button`
  border: none;
  width: 150px;
  height: 60px;
  border-radius: 30px;

  /* position: relative; */
  /* left: 80%; */

  float: right; // 유진 - position: relative;, left: 80%; 설정 지우고 왼쪽정렬
  margin-right: 10%; // 유진 - 버튼 오른쪽 여백
  background-color: white;

  font-size: 25px;
  font-weight: bold;

  &:hover {
    background-color: #e7b5f7;
  }
`;

export const SearNBtn = styled.div`
  height: 100px;
`;

// 메인페이지 글 리스트
export const ListBox = styled.div`
  width: 950px;
  height: 100px;
  background-color: #f0d8f8;
  position: relative;
  left: 10%;
  font-size: 25px;
  align-items: center;
  display: flex;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 40px;
  margin: 20px;

  text-decoration: none;
`;
=======

//리스트 몸통
export const ListBody = styled.div` 
    width : 1200px;

    height: auto;
    left: 20%;
    position: absolute;
    background-color: beige;
`;


//글생성 버튼
export const ListBtn = styled.button` 
border:none;
width: 120px;
height: 40px;
border-radius: 30%;
position: relative;
left: 80%;
top: 50px;

font-size: large;
font-weight: bold;

&:hover {
        border-radius: 10px;
        background-color: #e7b5f7;
    }
`;

//검색과 글생성 버튼이 있는 공간
export const SearNBtn = styled.div` 
height:100px`

//리스트 박스(글 하나하나)
export const ListBox = styled.div` 
width : 950px;
height:200px;
background-color: #f0d8f8;
position: relative;
left: 10%;
font-size: 40px;
align-items: center;
display: flex;
padding: 50px;
box-sizing: border-box;
border-radius: 40px;
margin : 20px;

text-decoration: none;
`


>>>>>>> f0f236b96e96f97400a42756627e46c327e19ff7
