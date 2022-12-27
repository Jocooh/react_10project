import styled from "styled-components";

//전체영역 div
const InputBody = styled.div`
  /* width: 900px; */
  margin: auto;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoneArrow = styled.select`
  appearance: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  background: #f9f4fa;
  border: none;
  height: 50px;
`;

//카테고리+제목+닉네임+비번 div
const InputBox = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-between;
  width: 800px;
  margin: 20px auto;
  height: 40px;
`;

//본문내용
const TextArea = styled.input`
  width: 800px;
  height: 250px;
  border-radius: 20px;
  background: #f9f4fa;
  border-style: none;
  text-align: left;
  vertical-align: top;
  padding: 10px;
`;

// 닉네임+비번 div
const UserPassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  gap: 5px;
`;

export { NoneArrow, InputBody, InputBox, TextArea, UserPassword };
