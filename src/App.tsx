import "./App.css";
import { Loader } from "./components/Loader/loading";

import { Root } from "./routes";
import { useRouterLoader } from "./components/useRouterLoader/useRouterLoader";

function App() {
  const isLoading = useRouterLoader(500);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="app-container">
      {isLoading && <Loader />}
      <Root />
    </div>
  );
}

export default App;
