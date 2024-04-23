import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [글내용, setContent] = useState("2월 17일 발행");
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        <div className="buttonBox">
          <button
            onClick={() => {
              let copy = [...글제목];
              copy[0] = "여자 코트 추천";
              setTitle(copy);
            }}
          >
            제목변환
          </button>
          <button
            onClick={() => {
              let copy2 = [...글제목];
              copy2.sort();
              setTitle(copy2);
            }}
          >
            제목정렬
          </button>
        </div>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>{글내용}</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{글내용}</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          {setModal(true)}
        }}>{글제목[2]}</h4>
        <p>{글내용}</p>
      </div>
      {
        modal==true ? <Modal/> : null  
      }
    </div>
  );
} //end of App

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
} //end of modal

export default App;
