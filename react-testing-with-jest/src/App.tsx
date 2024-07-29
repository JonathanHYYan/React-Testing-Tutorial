import "./App.css";
import { Application } from "./component/application.tsx/application";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./component/mui/mui-mode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
