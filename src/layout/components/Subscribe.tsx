function Subscribe() {
  return (
    <div className="bg-black flex md:flex-row sm:flex-col md:justify-between items-center w-[92%] p-10   rounded-lg absolute left-[4%] top-[18%]  z-50">
      <p className="font-primary text-white font-black text-2xl ">
        STAY UPTO DATE ABOUT <br />
        OUR LATEST OFFERS
      </p>
      <div className="flex flex-col gap-y-2 ">
        <input
          type="email"
          placeholder="Enter your Email address "
          className="rounded-xl px-14 py-1 font-light text-sm"
        />
        <button
          type="button"
          className="bg-white rounded-xl px-14 py-1   text-sm font-semibold"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
