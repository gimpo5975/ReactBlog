import './App.css';

function App() {

  let Post = '강남 우동 맛집'

  return (
    <div className="App">
        <div className='black-nav'>
          <h4 style={{color:'blue', fontSize:'20px'}}>블로그임</h4>
        </div>
        <h4>{Post}</h4>
    </div>
  );
}

export default App;
