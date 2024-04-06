import { Header } from "../components/header";
import { Login } from "../components/login";

export const HomeRoute = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="w-screen">
        <Header />
      </div>

      <div className="justify-center items-center w-[80%] md:w-[65%] lg:w-[55%]">
        <Login />
      </div>
    </div>
  );
};
