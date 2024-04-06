export const Login = () => {
  const handleSubmit = () => {
    console.log("Clicked");
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="font-medium font-serif text-black text-4xl text-center">
        Get started with Teachable
      </h1>

      <p className="justify-center items-center text-center text-gray-600">
        Join more than 100,000 creators who've sold over{" "}
        <span className=" font-bold">$1 billion</span> in courses and coaching.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between  w-[80%] md:w-[65%] lg:w-[50%] h-[38vh]"
      >
        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Full Name</h2>
          <input type="text" className="border border-gray-400 rounded h-10" />
        </div>

        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Email Address</h2>
          <input type="text" className="border border-gray-400 rounded h-10" />
        </div>

        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Password</h2>
          <input type="text" className="border border-gray-400 rounded h-10" />
        </div>

        <div className="flex flex-col">
          <h2 className=" font-medium text-gray-500">Confirm Password</h2>
          <input type="text" className="border border-gray-400 rounded h-10" />
        </div>
      </form>

      <div className="flex justify-flex gap-2 items-center w-[80%] md:w-[65%] lg:w-[50%]">
        <input type="checkbox" className="" />
        <p className=" text-gray-500 text-sm">
          I agree to the{" "}
          <span className=" text-black underline">Terms of Use</span> and{" "}
          <span className=" text-black underline">Privacy Policy</span>{" "}
        </p>
      </div>
    </div>
  );
};
