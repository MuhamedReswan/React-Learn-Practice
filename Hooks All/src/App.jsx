import "./App.css";
// import OnChange from './Components/OnChange';
// import UseEffect from './Components/UseEffect';
// import CleanUpUseEffect from './Components/CleanUpUseEffect';
// import ContextA from './Components/Use Context/ContextA';
// import UseRef from './Components/Use Ref/useRef';
import ParentCallback from "./Components/useCallback/ParentCallBack";

function App() {
  return (
    <>
      {/* <OnChange/>
     <hr />
     <h4>Use Effect</h4>
     <UseEffect/>
     <hr />
     <h4> Clean up in Use Effect</h4>
     <CleanUpUseEffect/>
     <hr />
     <h4>Use Conteext</h4>
     <ContextA/>
     <hr />
     <h4>Use Ref</h4>
     <UseRef/> */}
      <hr />
      <h4>useCallback And useMemo</h4>
      <ParentCallback />
    </>
  );
}

export default App;
