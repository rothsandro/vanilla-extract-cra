import { themeClass } from "./theme.css";
import * as css from "./App.css";

function App() {
  return (
    <div className={themeClass}>
      <span className={css.logo}></span>
      <h1 className={css.title}>create-react-app + vanilla-extract = ❤️</h1>
    </div>
  );
}

export default App;
