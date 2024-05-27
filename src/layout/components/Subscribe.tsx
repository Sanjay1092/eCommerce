function Subscribe() {
  return (
    <div className="bg-black flex md:flex-row xs:flex-col xs:items-start xs:gap-y-4 md:justify-between items-center mx-12 md:p-12 xs:p-4 rounded-lg z-50 relative top-[84px]">
      <p className="font-primary text-white font-black text-3xl xs:w-80 md:w-[40%]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className="flex flex-col gap-y-2">
        <input
          type="email"
          placeholder="Enter your Email address "
          className="rounded-3xl px-14 py-2 font-light text-sm"
        />
        <button
          type="button"
          className="bg-white rounded-3xl px-14 py-2   text-sm font-semibold"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
