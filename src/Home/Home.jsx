

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Navbar/Nav";
import Feature_Services from "../section/Feature_Services";
import Global_brand_Section from "../section/global_brand_Section";
import Recent_Studies from "../section/Recent_Studies";
import Review_section from "../section/Review_section";
import StepByStep_section from "../section/StepByStep_section";


const Home = () => {
    return (
        <>
        <Nav></Nav>
        <Header></Header>
        <Global_brand_Section></Global_brand_Section>
        <Feature_Services></Feature_Services>
        <Recent_Studies></Recent_Studies>
        <StepByStep_section></StepByStep_section>
        <Review_section></Review_section>
        <Footer></Footer>
        </>
    );
};

export default Home;