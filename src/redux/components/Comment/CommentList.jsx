import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import ModalBox2 from "../Modal/ModalBox2";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { StyledCommentLi, StyledCommentDateSpan } from "../Comment/styled";
import { StyledCommentLiIcon } from "../Comment/styled";
import EditModalBox from "../Modal/EditModalBox";
import axios from "axios";
import EditComment from "./EditComment";
// import axios from 'axios';

export default function CommentList({
    selectedComments,
    setCommentList,
}) {
    const [editComment, setEditComment] = useState({ comment: "" });

    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    // 삭제 아이콘 누르면 뜨는 비밀번호 모달
    const modalHandle = (id, password) => {
        selectedComments?.map((item) => {
            console.log(item);
            return id === item.id ? setModalOpen(true) : console.log("응 아님");
        });
        document.body.style.overflow = "hidden"; // 모달창 오픈 시 배경 스크롤 비활성화
    };

    // 수정 아이콘 누르면 뜨는 비밀번호 모달
    const editModalHandle = (id, password) => {
        selectedComments?.map((item) => {
            console.log(item);
            return id === item.id
                ? setEditModalOpen(true)
                : console.log("응 아님");
        });
        document.body.style.overflow = "hidden"; // 모달창 오픈 시 배경 스크롤 비활성화
    };

    // ul태그 밑에 li태그로 리스트들을 다 뽑아 왔어요..
    return (
        <>
            <ul>
                {selectedComments?.map((item) => {
                    return (
                        // 유진 - 가로정렬하려고 div태그를 StyledCommentLiIcon으로 만들어서 import함!!
                        <StyledCommentLiIcon key={item.id}>
                            <StyledCommentLi>{item.comment}</StyledCommentLi>
                            <EditComment
                                isEdit={false}
                                editComment={editComment}
                                setEditComment={setEditComment}
                            />
                            <StyledCommentDateSpan>
                                {item.date}
                            </StyledCommentDateSpan>
                            <RiEditBoxLine
                                onClick={() => {
                                    return editModalHandle(
                                        item.id,
                                        item.password
                                    );
                                }}
                                style={{
                                    cursor: "pointer",
                                    marginLeft: "30px",
                                    float: "right",
                                }}
                            />
                            {editModalOpen && (
                                <EditModalBox
                                    setCommentList={setCommentList}
                                    commentList={item}
                                    setEditModalOpen={setEditModalOpen}
                                />
                            )}
                            <RiDeleteBinLine
                                onClick={() => {
                                    return modalHandle(item.id, item.password);
                                }}
                                style={{
                                    cursor: "pointer",
                                    marginLeft: "15px",
                                    float: "right",
                                }}
                            />
                            {modalOpen && (
                                <ModalBox2
                                    setCommentList={setCommentList}
                                    commentList={item}
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
