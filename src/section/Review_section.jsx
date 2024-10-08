


const Review_section = () => {
    return (
        <div className=" py-20 bg-[#FBFBFB]">
           <div className="flex flex-col lg:flex-row items-center gap-20 font max-w-screen-xl m-auto p-4 pb-10">
                <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-bold">What our clients and
                partners reviews</h2>
                <div>
                <p className="pb-4 font-medium text-[#6F6F6F] text-center lg:text-left">Crafting compelling digital experiences that captivate audiences and drive meaningful connections.</p>
                <button className="hover:underline cursor-pointer font-semibold text-lg">View All Blogs</button>
                </div>
            </div>

            {/* Cards */}
            <section className="dark:bg-gray-100 dark:text-gray-800 font">
	<div className="container p-6 mx-auto space-y-8 ">
		
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-1 lg:grid-cols-3 ">
			<article className="flex flex-col dark:bg-gray-50 p-6 bg-white">
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-lg dark:text-gray-600">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
                    <div className="flex flex-col flex-1 py-10">
					<a rel="noopener noreferrer" href="#" aria-label="Consulting Industry adapts to the changing business."></a>
					
					<h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">Consulting Industry adapts to the changing business.</h3>
					
				</div>
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co.com/yS3jq5P/image-8.png" />
				</a>
			</article>
			<article className="flex flex-col dark:bg-gray-50 p-6 bg-white">
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-lg dark:text-gray-600">
						<span>Application
                        </span>
						<span>03 April, 2025</span>
					</div>
				<div className="flex flex-col flex-1 py-10">
					<a rel="noopener noreferrer" href="#" aria-label="Consulting Industry adapts to the changing business."></a>
					
					<h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">Consulting Industry adapts to the changing business.</h3>
					
				</div>
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co.com/DKBqcXk/rvw.png" />
				</a>
			</article>
			<article className="flex flex-col dark:bg-gray-50 p-6 bg-white">
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-lg dark:text-gray-600">
						<span>Application</span>
						<span>03 April, 2025</span>
					</div>
                    <div className="flex flex-col flex-1 py-10">
					<a rel="noopener noreferrer" href="#" aria-label="Consulting Industry adapts to the changing business."></a>
					
					<h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">Consulting Industry adapts to the changing business.</h3>
					
				</div>
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co.com/44Lx63g/image-7.png" />
				</a>
			</article>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Review_section;