


const Recent_Studies = () => {
    return (
        <div className="my-10 py-10 lg:my-20 lg:py-20 bg-[#FBFBFB]">
            <div className="flex flex-col lg:flex-row items-center gap-10 font max-w-screen-xl m-auto p-4 pb-10">
                <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-bold">Some of our recent case studies.</h2>
                <p className="w-1/2 font-medium text-[#6F6F6F] text-center lg:text-left">Crafting compelling digital experiences that captivate audiences and drive meaningful connections.</p>
            </div>
 
 {/* cards */}
            <section>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img
      src="https://i.ibb.co.com/d5LYmRT/image.png"
      className=" shadow-2xl" />
    <div className="font">
      <h1 className="text-4xl font-bold">Our Feature Services</h1>
      <p className="py-6 font-semibold">
      Etiam sed odio dictum, tempus velit non, sollicitudin neque. Donec quis aliquet velit. Aliquam convallis dapibus purus.
      </p>
      <button className=" hover:underline cursor-pointer font-semibold text-lg">View Full Project </button>
    </div>
  </div>
</div>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img
      src="https://i.ibb.co.com/9HdfYpT/image.png"
      className=" shadow-2xl" />
    <div className="font">
      <h1 className="text-4xl font-bold">Our Feature Services</h1>
      <p className="py-6 font-semibold">
      Etiam sed odio dictum, tempus velit non, sollicitudin neque. Donec quis aliquet velit. Aliquam convallis dapibus purus.
      </p>
      <button className=" hover:underline cursor-pointer font-semibold text-lg">View Full Project </button>
    </div>
  </div>
</div>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img
      src="https://i.ibb.co.com/MGhTSSY/image.png"
      className=" shadow-2xl" />
    <div className="font">
      <h1 className="text-4xl font-bold">Our Feature Services</h1>
      <p className="py-6 font-semibold">
      Etiam sed odio dictum, tempus velit non, sollicitudin neque. Donec quis aliquet velit. Aliquam convallis dapibus purus.
      </p>
      <button className=" hover:underline cursor-pointer font-semibold text-lg">View Full Project </button>
    </div>
  </div>
</div>
            </section>
        </div>
    );
};

export default Recent_Studies;