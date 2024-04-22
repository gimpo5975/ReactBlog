import { useState } from 'react';
import './App.css';

function App() {

  let[글제목, setTitle] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);
  let[글내용, setContent] = useState('2월 17일 발행');

  return (
    <div className="App">
        <div className='black-nav'>
          <h4>ReactBlog</h4>
        </div>
        <div className='list'>
          <h4>{글제목[0]}</h4>
          <p>{글내용}</p>
        </div>
        <div className='list'>
          <h4>{글제목[1]}</h4>
          <p>{글내용}</p>
        </div>
        <div className='list'>
          <h4>{글제목[2]}</h4>
          <p>{글내용}</p>
        </div>
    </div>
  );
}

export default App;
