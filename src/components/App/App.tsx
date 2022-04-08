import { useTypedSelector } from "../../hooks/useTypedSelector";
import LoginForm from "../LoginForm/LoginForm";
import { AppContainer, Greeting } from "./App.styles";

const App = () => {
  const { data } = useTypedSelector((state) => state.auth);

  const GreetingJSX = () => (
    <Greeting>
      Hello, you are now logged in
    </Greeting>
  );

  const Component = data?.loggedIn ? GreetingJSX : LoginForm;
  return (
    <AppContainer>
      <Component />
    </AppContainer>
  );
};

export default App;
