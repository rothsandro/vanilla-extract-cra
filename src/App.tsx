import { themeClass } from "./theme.css";
import * as css from "./App.css";

function App() {
  return (
    <div className={themeClass}>
      <h1 className={css.title}>Hello World</h1>
    </div>
  );
}

export default App;
