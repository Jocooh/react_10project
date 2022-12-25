import styled from "styled-components";



//리스트 몸통
export const ListBody = styled.div` 
    width : 1200px;
    height: auto;
    left:20%;
    position: absolute;
    background-color: beige;
`
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
`
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

