import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalBox2 from "../Modal/ModalBox2";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { StyledCommentLi } from "../Comment/styled";
import { StyledCommentLiIcon } from "../Comment/styled";

export default function CommentList() {
    const comments = useSelector((state) => state.comments);

    // 비밀번호 모달
    const [modalOpen, setModalOpen] = useState(false);


    const modalHandle = () => {
        comments.map((item) => {
            if (item.id === comments.id) {
                setModalOpen(true);
                document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
            }
            
        });
     };
    // console.log(comments);
    // comments.filter((item) => item.password !== action.payload);

    // ul태그 밑에 li태그로 리스트들을 다 뽑아 왔어요..
    return (
        <>
            <ul>
                {comments.map((item) => {
                    return (
                        // 유진 - 가로정렬하려고 div태그를 StyledCommentLiIcon으로 만들어서 import함!!
                        <StyledCommentLiIcon key={item.id}>
                            <StyledCommentLi>{item.comment}</StyledCommentLi>
                            <RiEditBoxLine
                                onClick={modalHandle}
                                style={{
                                    cursor: "pointer",
                                    marginLeft: "30px",
                                    float: "right",
                                }}
                            />
                            <RiDeleteBinLine
                                onClick={modalHandle}
                                style={{
                                    cursor: "pointer",
                                    marginLeft: "15px",
                                    float: "right",
                                }}
                            />
                            {modalOpen && (
                                <ModalBox2
                                    comment={item}
                                    setModalOpen={setModalOpen}
                                />
                            )}
                        </StyledCommentLiIcon>
                    );
                })}
            </ul>
        </>
    );

  
}
