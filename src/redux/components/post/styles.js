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
  margin: auto;
`;

const ColumnInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.input`
  width: 100%;
  height: 250px;
  margin: 20px auto;
  border-radius: 20px;
  background: #f9f4fa;
`;

export { NoneArrow, InputBody, InputBox, ColumnInput, TextArea };
