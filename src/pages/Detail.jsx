import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams()
  return <div>
    {id}번 게시물 상세페이지
    
  </div>;
}

export default Detail;
