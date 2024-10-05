

import Header from "../Header/Header";
import Nav from "../Navbar/Nav";
import Feature_Services from "../section/Feature_Services";
import Global_brand_Section from "../section/global_brand_Section";
import Recent_Studies from "../section/Recent_Studies";


const Home = () => {
    return (
        <>
        <Nav></Nav>
        <Header></Header>
        <Global_brand_Section></Global_brand_Section>
        <Feature_Services></Feature_Services>
        <Recent_Studies></Recent_Studies>
        </>
    );
};

export default Home;