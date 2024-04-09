export const SecondComponent = () => {
  return (
    <div className="flex flex-col justify-between p-6 items-start w-[90%] md:w-[70%] lg:w-[40%] h-full gap-6">
      <div className="flex flex-col justify-start gap-8">
        <p className=" text-3xl font-medium">
          Tell us a little more about yourself
        </p>
        <p className="font-sm text-md">
          Your answers will help us build an experience to match your needs.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 w-[100%]">
          <p className=" font-bold">Do you currently run an online business?</p>
          <div className=" ">
            <select
              type="text"
              className=" border border-black w-[100%] rounded outline-none  py-2 p-3"
            >
              <option value="">Please choose an option...</option>
              <option value="option1">Yes, I run an online business</option>
              <option value="option2">No, just exploring!</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[100%]">
          <p className=" font-bold">I primarily identify as a:</p>
          <div className=" ">
            <select
              type="text"
              className=" border border-black w-[100%] rounded outline-none py-2 p-3"
            >
              <option value="">Please choose an option...</option>
              <option value="option1">Full-time employee</option>
              <option value="option2">Part-time employee</option>
              <option value="option3">
                Freelancer or Consultant (project-based work)
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1  w-[100%]">
          <p className=" font-bold">
            Are you already teaching or offering content online?
          </p>
          <div className=" ">
            <select
              type="text"
              className=" border border-black w-[100%] rounded outline-none py-2 p-3"
            >
              <option value="">Please choose an option...</option>
              <option value="option1">Yes, I teach online</option>
              <option value="option2">
                No, I'm just getting started sharing my knowledge
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[100%]">
          <p className=" font-bold">
            How big is your current audience (email list, social media
            followers, subscribers, etc.)?
          </p>
          <div className=" ">
            <select
              type="text"
              className=" border border-black w-[100%] rounded outline-none py-2 p-3"
            >
              <option value="">Please choose an option...</option>
              <option value="option1">1-10 people</option>
              <option value="option2">1-100 people</option>
              <option value="option3">1-1000 people</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[100%]">
          <p className=" font-bold">
            Which topic is most relevant to your business or content?
          </p>
          <div className=" ">
            <select
              type="text"
              className=" border border-black w-[100%] rounded outline-none py-2 p-3"
            >
              <option value="">Please choose an option...</option>
              <option value="option1">Photo or Video</option>
              <option value="option2">Docs</option>
              <option value="option2">Book</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[100%]">
          <p className=" font-bold">
            Approximately how much money do you make charging for your knowledge
            today (in courses, consulting, books, speaking, etc.)? We ask this
            so that we can provide you with relevant resources for the size and
            stage of your business.
          </p>
          <div className=" ">
            <select
              type="text"
              className=" border border-black w-[100%] rounded outline-none py-2 p-3"
            >
              <option value="">Please choose an option...</option>
              <option value="">Less than 20K</option>
              <option value="option1">More than 20K</option>
              <option value="option2">I prefer not to answer</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[100%] py-2">
          <p className=" font-bold">
            What are you hoping to do first on Teachable? (Select up to 3 to get
            started as quickly as possible)
          </p>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" className="" />
              <p className="text-sm">Create an online course</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" className="" />
              <p className="text-sm">Create a coaching program</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" className="" />
              <p className="text-sm">
                Create a digital download (ebook, article, template, worksheet,
                etc.)
              </p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" className="" />
              <p className="text-sm">Create a community or forum</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" className="" />
              <p className="text-sm">Create a pre-sell</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" className="" />
              <p className="text-sm">I'm not sure yet</p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" className="" />
              <p className="text-sm">Something else (please tell us more)</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-[100%] py-2">
            <p className=" font-bold">
              How much content or training material (videos, worksheets,
              downloads, etc.) have you already prepared?
            </p>
            <div className=" ">
              <select
                type="text"
                className=" border border-black w-[100%] rounded outline-none py-2 p-3"
              >
                <option value="" className="">
                  Please choose an option...
                </option>
                <option value="option1">None - I'm just getting started</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end py-8">
            <button className=" px-10 py-2 font-bold border-2 rounded-md border-black">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
