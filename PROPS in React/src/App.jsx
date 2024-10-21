import Students from "./Components/Students/Students";

function App() {
  return (
    <>
      <Students name="Reswan" age={45} isStudent={false} />
      <hr />
      <Students name="ajmal" age={12} isStudent={true} />
      <hr />
      <Students name="anas" age={32} isStudent={false} />
      <hr />
      <Students name="saleem" age={25} isStudent={true} />
      <hr />
      <Students name="mishal" />
    </>
  );
}

export default App;
