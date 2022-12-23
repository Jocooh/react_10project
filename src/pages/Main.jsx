import React from "react";
import { ListBody, ListBox, ListBtn } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";

function Main() {


  const articles = [ 
    {id:1, title: 'test1' },{id:2 ,title: 'test2'},{id:3, title: 'test3'},{id:4, title: 'test4'},{id:5, title: 'test5'},{id:6, title: 'test6' }
  ]

 
  const navigate = useNavigate()
  return <div>
  <ListBody>
    <ListBtn onClick={()=> {navigate("/post");}}>글쓰기</ListBtn> <br/>

    {articles.map((article) => { return (<ListBox key={article.id}><NavLink to ={`/detail/${article.id}`}   style={{color:"black", textDecoration: "none"}}>{article.title}</NavLink></ListBox>);}  )}



  </ListBody>
  </div>
}

export default Main;
