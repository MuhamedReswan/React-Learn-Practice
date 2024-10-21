import UserGreeting from "./Components/UserGreeting/UserGreeting";
import "./App.css";

function App() {
  return (
    <>
      <UserGreeting username="reswan" isLoggedIn={true} />
      <UserGreeting username="aju" isLoggedIn={false} />
    </>
  );
}

export default App;
