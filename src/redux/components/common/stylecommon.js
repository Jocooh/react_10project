import styled from "styled-components";

const StyledBtn = styled.button`
  margin: 40px;

  margin-right: 10px;
  height: 40px;
  width: 100px;
  border-style: none;

  border-radius: 10px;
  background: #f9f4fa;

  :hover {
    box-shadow: 1px 1px 1px 1px lightgray;
    cursor: pointer;
  }
`;
const StyledInput = styled.input`
  border: none;
  /* border-bottom: 2px solid #444; */
  background: #f9f4fa;
  border-radius: 10px;
  height: 50px;
  padding-left: 10px;

  :focus {
    outline: none;
  }
`;
export { StyledBtn, StyledInput };
