import HeaderText from "../Componnets/HeaderText";


const Feature_Services = () => {
    return (
        <div>
            
            <div className="dark:bg-gray-100 dark:text-gray-900">
  <div className="container grid grid-cols-12 mx-auto">
    <div
      className="flex flex-col justify-center col-span-12 lg:col-span-6 bg-no-repeat bg-cover lg:h-auto"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/640x480')",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col space-y-10 p-8 dark:text-gray-800">
      <HeaderText
            leftAlignText={"Our Feature Services"}
            leftAlignDescription={"Etiam sed odio dictum, tempus velit non, sollicitudin neque. Donec quis aliquet velit. Aliquam convallis dapibus purus."}
            ></HeaderText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    {/*  */}
    <div className="flex flex-col col-span-12 px-4 md:px-6 lg:px-8 divide lg:col-span-6 lg:p-10 dark:divide-gray-300 gap-10 ">
      
          <div className="pb-4  border-2 border-gray-200">

           <div className="flex justify-around items-center space-y-10">
           <div><img src="https://i.ibb.co.com/rcXGHqs/Icon.png" alt="" /></div>
           <div className="w-1/2"><h1 className="text-3xl font-bold font">Planning</h1>
            <p className="font text-lg">Etiam sed odio dictum, tempus velit non, sollicitudin nutoeque. Donec quis aliquet velit.</p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
            >
              <span className="font text-xl hover:underline text-black font-bold">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a></div>
           </div>
               </div>
          <div className="pb-4 border-2 border-gray-200">

           <div className="flex justify-around items-center space-y-10">
           <div><img src="https://i.ibb.co.com/0jpSbnM/image-5.png" alt="" /></div>
           <div className="w-1/2"><h1 className="text-3xl font-bold font">Branding</h1>
            <p className="font text-lg">Etiam sed odio dictum, tempus velit non, sollicitudin nutoeque. Donec quis aliquet velit.</p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
            >
              <span className="font text-xl hover:underline text-black font-bold">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a></div>
           </div>
               </div>
          <div className="pb-4 border-2 border-gray-200">

           <div className="flex justify-around items-center space-y-10">
           <div><img src="https://i.ibb.co.com/R73zTXk/image-6.png" alt="" /></div>
           <div className="w-1/2"><h1 className="text-3xl font-bold font">Marketing</h1>
            <p className="font text-lg">Etiam sed odio dictum, tempus velit non, sollicitudin nutoeque. Donec quis aliquet velit.</p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
            >
              <span className="font text-xl hover:underline text-black font-bold">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a></div>
           </div>
               </div>

          
     
    </div>
  </div>
</div>

        </div>
    );
};

export default Feature_Services;