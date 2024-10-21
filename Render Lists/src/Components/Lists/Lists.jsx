export default function Lists(props) {
  console.log("pro",props)

  // const fruits = [
  //   { id: 1, name: "Apple", calories: 95 },
  //   { id: 2, name: "Banana", calories: 105 },
  //   { id: 3, name: "Orange", calories: 62 },
  //   { id: 4, name: "Strawberry", calories: 4 },
  //   { id: 5, name: "Grapes", calories: 62 },
  //   { id: 6, name: "Mango", calories: 201 },
  // ];

  // fruits.sort((a,b)=>a.name.localeCompare(b.name)); //ALPHEBETICAL
  // fruits.sort((a,b)=>b.name.localeCompare(a.name)); //REVERSE ALPHEBETICAL
  // fruits.sort((a,b)=>a.calories-b.calories); // NUMERIC
  // fruits.sort((a, b) => a.calories - b.calories); //rEVERSE  NUMERIC


// const lowCalFruits = fruits.filter (fruit=> fruit.calories>100);


  // const listItems = lowCalFruits.map((fruit) => (
  //   <li key={fruit.id}>
  //     {fruit.name}:&nbsp;
  //     <b>{fruit.calories}</b>
  //   </li>
  // ));


// eslint-disable-next-line react/prop-types
  const itemList = props.items;

  // eslint-disable-next-line react/prop-types
  const listItems = itemList.map(item => (
    <li className="list-items" key={item.id}>
      {item.name}:&nbsp;
      <b>{item.calories}</b>
    </li>
  ));


  return(
    <>
    <h2 className="list-fruits">Fruits</h2>
    <ol>{listItems}</ol>
    </>
  ) 

}