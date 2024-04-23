import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [글내용, setContent] = useState("2월 17일 발행");
  let [good, setGood] = useState([0,0,0]);
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
      {
      글제목.map(function (a, i) {
        return (     
       <div className="list" key={i}>
        <div className="flex">
        <h4 onClick={()=>{modal==false ? setModal(true):setModal(false)}}>{a}</h4>
        <span onClick={()=>{
          let cpGood = [...good];
          cpGood[i] = cpGood[i]+1;
          setGood(cpGood);
        }}>💟</span>{good[i]}
        </div>
        <p>{글내용}</p>
      </div>);
      })
      }
      {modal == true ? <Modal 글제목={글제목}/> : null}
    </div>
  );
} //end of App

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
} //end of modal

export default App;
