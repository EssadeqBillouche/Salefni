import './App.css'


function Header({text}) {
  return (
    <nav>
      <ul>
        <li>
          {text}
        </li>
      </ul>
    </nav>
  );
}

function App() {

  return (
    <>
     <Header text = 'hello from header' />
    </>
  )
}

export default App
