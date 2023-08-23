import "./App.css";
import { createGlobalStyle } from "styled-components";
import { Button } from "./components/button";
import { SubmitButton } from "./components/submit-button";

// Нельзя использовать Styled components в теле рендер функции. Это замедлит весь рендер из-за их постоянного обновления
// Хорошей практикой считается вынести Styled comps в отдельный js файл
const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: teal;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <Button> Normal Button </Button>
        <Button primary={true}> Primary Button </Button>
        <SubmitButton />
      </header>
    </div>
  );
}

export default App;
