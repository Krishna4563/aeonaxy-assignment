import { HomeRoute } from "./routes/homeRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SecondRoute } from "./routes/secondRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/form" element={<SecondRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
