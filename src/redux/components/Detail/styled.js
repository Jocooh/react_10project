import styled from "styled-components";

// 지은 : main 태그
export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// 지은 : PostDetail 컴포넌트와 Comment 컴포넌트를 감싸는 div 태그
export const StyledContainer = styled.div`
    max-width: 860px;
`;

// 지은 : PostDetail과 Comment 구분선
export const StyledLine = styled.b`
    margin: 0 auto;
    display: block;
    width: 860px;
    height: 1px;
    border: 0;
    background-color: #9c9c9c;
`;

// PostDetail Css
export const StyledSection = styled.section`
    /* width: 860px; */
    min-height: 400px;
    margin: 30px;
`;

export const StyledIconSpanDiv = styled.div`
    font-size: small;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 20px;
`;

export const StyledPostBoxDiv = styled.div`
    padding: 10px 25px;
`;

export const StyledSpan = styled.span`
    margin: 0 5px;
`;

export const StyledPostP = styled.p`
    padding: 20px;
`;

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
    background-color: rgba(234, 207, 243, 0.459);
`;

export const StyledPwtInput = styled.input`
    width: 170px;
    height: 40px;
    margin-left: 10px;
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    background-color: rgba(234, 207, 243, 0.459);
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
    background-color: rgba(234, 207, 243, 0.459);
    &:hover {
        background-color: #e7b5f7;
    }
`;


// Comment List Css

