import './App.css'

function App() {
  return (
    <>
      <h1>ReactJS Tutorial</h1>
      <br></br><br></br>
      <h2>Fruits:</h2>
      <Fruit></Fruit>
      <br></br>
      <h2>Colors:</h2>
      <Color></Color>
    </>
  )
}

function Fruit() {
  return (
    <>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
    </>
  );
}

function Color() {
  return (
    <>
      <ul>
        <li>Orange</li>
        <li>White</li>
        <li>Green</li>
      </ul>
    </>
  );
}

export default App
