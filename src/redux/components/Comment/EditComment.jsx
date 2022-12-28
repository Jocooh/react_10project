import React from "react";

export default function EditComment({editComment, setEditComment}) {
    return (
        <span style={{display: 'none'}}>
            <input
                type='text'
                onChange={(event) => {
                    setEditComment({
                        ...editComment,
                        comment: event.target.value,
                    });
                }}
            />
            <button type='button'>수정</button>
        </span>
    );
}
