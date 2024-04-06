import { Header } from "./components/header";
import { Login } from "./components/login";

function App() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="w-screen">
        <Header />
      </div>

      <div className="justify-center items-center w-[80%] md:w-[65%] lg:w-[50%]">
        <Login />
      </div>
    </div>
  );
}

export default App;
