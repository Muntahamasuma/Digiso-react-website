

const Header = () => {
    return (
        <div>
            <div className="hero my-10 md:my-15 lg:my-20 font">
  <div className="hero-content flex-col lg:flex-row justify-around">
    
    <div className="w-1/2">
    {/* Avater */}
    <div className="flex flex-col items-start justify-start">
	<div className="flex -space-x-4">
		<img alt="" className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.ibb.co.com/RPWM7fW/testimonial-sm-img-3.png" />
		<img alt="" className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.ibb.co.com/cDwXgwV/testimonial-sm-img-2.png" />
		<img alt="" className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.ibb.co.com/RPWM7fW/testimonial-sm-img-3.png" />
		
		<span className="flex items-center justify-center w-14 h-14 font-semibold border rounded-full bg-black text-white text-center text-sm">10+ clients</span>
	</div>
</div>
      <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold">Next-Gen Storytelling Digital Agency</h1>
      <p className="py-6 font-medium text-[#6F6F6F]">
      Etiam sed odio dictum, tempus velit non, sollicitudin neque. Donec quis aliquet velit. Aliquam convallis dapibus purus.
      </p>
      <button className="btn bg-black rounded-full btn-lg text-xl text-center text-white hover:bg-[#D6FFC8] hover:text-black border-none">Explore More</button>
    </div>

    <div className="relative rounded-lg shadow-2xl" >
    <img
      src="src/assets/image 2.png"/>

      <div className=" bg-black text-white rounded-xl border-4 border-white p-4 lg:p-6 absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-11/12">
        <div className="flex gap-10 font divide-x-2 divide-white">
        <div className="flex flex-col lg:flex-row gap-5">
          <h2 className="font-bold text-5xl lg:text-6xl">10+</h2>
          <p className="font-semibold text-xl">Years of Experience</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pl-8">
          <h2 className="font-bold text-5xl lg:text-6xl">710+</h2>
          <p className="font-semibold text-xl">Projetcs Handover</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;