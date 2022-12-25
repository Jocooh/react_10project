import styled from "styled-components";

// 모달 뒷배경
export const StyledModalBg = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
`;

// 모달창
export const StyledModalContainer = styled.div`
    width: 600px;
    height: 400px;
    background-color: #f6ebfa;
    border-radius: 10px;
`;

// 모달 내용 감싸는 form
export const StyledModalBox = styled.form`
    text-align: center;
`;

// 모달 title
export const ModalTitle = styled.div`
    font-size: x-large;
    font-weight: bold;
    margin-top: 100px;
    color: rgba(0,0,0,0.5);
`;

// 모달 비밀번호 입력 input창
export const ModalPwInput = styled.input`
    background-color: white;
    margin-top: 40px;
    width: 200px;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid white;
`;

// 모달 확인 버튼
export const ModalButton = styled.button`
    cursor: pointer;
    margin-top: 40px;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid white;
    font-size: large;
    font-weight: bold;
    &:hover {
        border: 2px solid white;
        box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
        -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
        -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
    }
`;

// 모달 닫기 버튼
export const ModalCloseButton = styled.button`
    float: right;
    margin: 5px;
    border: none;
    border-radius: 100%;
    background-color: transparent;
    font-size: x-large;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
        -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
        -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
    }
`;