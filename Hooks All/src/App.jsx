import React,{useReducer} from 'react';
import './App.css'
// import OnChange from './Components/OnChange';
// import UseEffect from './Components/UseEffect';
// import CleanUpUseEffect from './Components/CleanUpUseEffect';
// import ContextA from './Components/Use Context/ContextA';
// import UseRef from './Components/Use Ref/useRef';
// import ParentCallback from './Components/useCallback/ParentCallBack';
// import DocTitleOne from './Components/Custom Hook/DocTitleOne';
// import DocTitleTwo from './Components/Custom Hook/DocTitleTwo';
// import CounterOne from './Components/CustomHookTwo/CounterOne';
// import CounterTwo from './Components/CustomHookTwo/CounterTwo';

import ReducerSimpleAction from './Components/Reducer Hook/ReducerSimpleaction';
import UseReducerComplexState from './Components/Reducer Hook/UseReducerComplexState';
import MultipleReducer from './Components/Reducer Hook/MultipleReducer';

import ComponentA from './Components/Reducer Hook/useReducer With useContext/ComponentA';
import ComponentB from './Components/Reducer Hook/useReducer With useContext/ComponentB';
import ComponentC from './Components/Reducer Hook/useReducer With useContext/ComponentC';




const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}


export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);


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
     <UseRef/>
     <hr />
     <h4>useCallback And useMemo</h4>
<ParentCallback/>
<hr />
<h4>Custom Hook</h4>
<DocTitleOne/>
<DocTitleTwo/>
<hr />
<h4>Custom Hook 2 Counter</h4>
<CounterOne/>
<CounterTwo/>
<hr /> */}
<h4>Reducer Hook Simple state action</h4>
<ReducerSimpleAction/>
<hr />
<h4>Reducer Hook with complex state action </h4>
<UseReducerComplexState/>
<hr />
<h4>Multiple Reducer Hook with complex state action </h4>
<MultipleReducer/>

<hr />
<h4> Reducer Hook with use Context </h4>
<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}>
<ComponentA/>
<ComponentB/>
<ComponentC/>
</CountContext.Provider>


    </>
  )
}

export default App
