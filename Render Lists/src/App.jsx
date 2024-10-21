
import Lists from "./Components/Lists/Lists"
import './App.css'

function App() {


  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
    { id: 4, name: "Strawberry", calories: 4 },
    { id: 5, name: "Grapes", calories: 62 },
    { id: 6, name: "Mango", calories: 201 },
  ];
  return (<Lists items ={fruits}/> )
}

export default App
