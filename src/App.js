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
  let [title, setTTitle] = useState(0);
  let [text,setText] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        <div className="buttonBox">
          <button
            onClick={()=> {
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
        <h4 onClick={()=>{
          modal==false ? setModal(true):setModal(false);
          setTTitle(i);
          }}>{a}</h4>
        <span onClick={()=>{
          //하트추가 함수
          let cpGood = [...good];
          cpGood[i] = cpGood[i]+1;
          setGood(cpGood);
        }}>💟</span>{good[i]}
        </div>
        <p>{글내용}</p>
        <button onClick={()=>{
          //글 삭제 함수
          let copy = [...글제목]
          copy.splice(i,1);
          setTitle(copy);
        }}>삭제</button>
      </div>);
      })
      }

       <input onChange={(e)=>{setText(e.target.value);}} />
       <button onClick={()=>{
        let copy = [...글제목];
        //입력 값이 공백이거나 null일 경우 저장 안되게
        (text == '' || text== null) ? alert('내용을 입력해주세요'):copy.unshift(text);
        setTitle(copy);
        let cpGood = [...good]
        cpGood.unshift(0);
        setGood(cpGood);
       }}>입력</button> 

      {modal == true ? <Modal 글제목={글제목} title={title}/> : null}
    </div>
  );//end of return
} //end of App

function Modal(props) {
  return (
   
      <div className="modal"  >
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜1</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
      );//end of return
    
} //end of modal

export default App;
