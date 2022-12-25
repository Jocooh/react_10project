import styled from "styled-components";

const InputBody = styled.div`
  width: 1000px;
  margin: auto;
`;

const NoneArrow = styled.select`
  appearance: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  background: #f9f4fa;
`;

//전체 input
const InputBox = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-around;
  width: 1000px;
  margin: 10px auto;
`;

const TextBody = styled.div``;

const TextArea = styled.input`
  width: 720px;
  height: 250px;
  border-radius: 20px;
  background: #f9f4fa;
  margin: auto;
`;

const UserPassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { NoneArrow, InputBody, InputBox, TextArea, UserPassword };
