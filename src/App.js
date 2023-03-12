import logo from './logo.svg';
import './App.css';
import Tombol from './button/index'
import List from './list/index'


function App() {
  var data = 100
  let content;
  if (data == 100) {
    content = <Tombol />;
  } else {
    content = <List />;
  }

  return (
    <div className="App" >
      <header className="App-header">
        {content}
      </header>
    </div>
  );
}

export default App;
