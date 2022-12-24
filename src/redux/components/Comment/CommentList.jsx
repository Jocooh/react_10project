import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalBox from "../Modal/ModalBox";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { StyledCommentLi } from "../Comment/styled";

export default function CommentList() {
    const comments = useSelector((state) => state.comments);
    // 비밀번호 모달
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandle = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
    };

    // ul태그 밑에 li태그로 리스트들을 다 뽑아 왔어요..
    // 근데 아이콘이 안먹어요...RiEditBoxLine, RiDeleteBinLine 요 두놈이 아이콘이고
    // {modalOpen && (<ModalBox setModalOpen={setModalOpen} />)}
    // ⬆ 요 코드는 안건드셔도 됩니다! 모달 오픈하는 코드에요!
    return (
        <>
            <ul>
                {comments.map((item) => {
                    return (
                        <div>
                            <StyledCommentLi>{item.comment}</StyledCommentLi>
                            <RiEditBoxLine
                                onClick={modalHandle}
                                style={{
                                    cursor: "pointer",
                                    marginLeft: "30px",
                                }}
                            />
                            <RiDeleteBinLine
                                onClick={modalHandle}
                                style={{
                                    cursor: "pointer",
                                    marginLeft: "15px",
                                }}
                            />
                            {modalOpen && (
                                <ModalBox setModalOpen={setModalOpen} />
                            )}
                        </div>
                    );
                })}
            </ul>
        </>
    );
}
