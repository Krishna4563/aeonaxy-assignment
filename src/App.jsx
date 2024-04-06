import { SecondComponent } from "./components/secondComponent";
import { HomeRoute } from "./routes/homeRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/form" element={<SecondComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
