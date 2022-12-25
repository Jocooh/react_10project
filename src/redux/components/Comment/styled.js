import styled from 'styled-components';

// Comment Css
export const StyledCommentSection = styled.section`
    /* width: 820px; */
    min-height: 400px;
    padding: 0 20px;
    margin: 30px;
`;

export const StyledCommentForm = styled.form`
    margin: 0 10px;
`;

export const StyledCommentInput = styled.input`
    margin: 0 15px 0 0;
    width: 400px;
    height: 40px;
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    background-color: rgba(234, 207, 243, 0.295);
`;

export const StyledPwtInput = styled.input`
    width: 170px;
    height: 40px;
    margin-left: 10px;
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    background-color: rgba(234, 207, 243, 0.295);
`;

// 지은 : 댓글 추가 버튼
export const StyledCommentButton = styled.button`
    width: 70px;
    height: 40px;
    float: right;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: medium;
    font-weight: bold;
    background-color: rgba(234, 207, 243, 0.295);
    &:hover {
        background-color: #e7b5f7;
    }
`;


// Comment List Css

// 댓글 리스트 li 태그
export const StyledCommentLi = styled.li`
    /* border: 1px solid black; */
    background-color: rgba(234, 207, 243, 0.26);
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
`;
