import React from "react";
import { useParams } from "react-router-dom";
import Contents from '../redux/components/Detail/Contents';

export default function Detail() {
  const {id} = useParams()
  return <div>
    {id}번 게시물 상세페이지
     <Contents />
  </div>;


