import './App.css';
import Paragraph from './Paragraph';

const App = () => {
  const num = 10;

  // Calling events without argument
  // const searchHandler = () => {
  //   console.log("I am clicked");    
  // };


  // Calling events with argument
  const searchHandler = (arg) => {
    console.log(arg + " " + "I am clicked");
  };

  
  return (
    <div className="App">
      <header className="App-header">Hello World</header>
      <button onClick={() => searchHandler('hello')}>Search</button>
      <Paragraph num={num} />
      <Paragraph />
    </div>
  );
};

export default App;