import HeaderStyleForH2 from "../Componnets/HeaderStyleForH2";


const Global_brand_Section = () => {
    return (
        <div className="bg-[#f8f8f8] py-10 md:py-20 lg:py-30">
            <HeaderStyleForH2></HeaderStyleForH2>
            <p className="py-6 font-medium text-[#6F6F6F] text-center">Crafting compelling digital experiences that captivate audiences and drive meaningful connections.</p>
            <div className="flex  flex-col md:flex-col lg:flex-row gap-10 items-center justify-center">
                <img src="https://i.ibb.co.com/0YPsQ5b/image-3.png" alt="" />
                <img src="https://i.ibb.co.com/sby41VQ/image-4.png" alt="" />
                <img src="https://i.ibb.co.com/fvtfbL2/image-3.png" alt="" />
                <img src="https://i.ibb.co.com/Dps7vKw/image-2.png" alt="" />
                <img src="https://i.ibb.co.com/wQtXC76/image.png" alt="" />
            </div>
            <div className="flex justify-center py-10 relative">
                <img src="https://i.ibb.co.com/T4LcTZN/image-3-1.png" alt="" />
                {/* Play Button */}
                <button className="absolute inset-0 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="140px" viewBox="0 -960 960 960" width="140px" fill="#fff"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>


                </button>
            </div>
            
        </div>
    );
};

export default Global_brand_Section;