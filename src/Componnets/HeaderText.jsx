import 'animate.css';

const HeaderText = ({title, description}) => {
    return (
        <div className="animate__animated animate__slideInLeft font">
        <h1 className="text-3xl lg:text-5xl text-center font-bold w-1/2 m-auto">{title}
          </h1>
          <p className='py-6 font-medium text-[#6F6F6F] text-center'>{description}</p>
    </div>
    );
};

export default HeaderText;