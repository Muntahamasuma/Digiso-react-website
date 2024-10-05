

import Header from "../Header/Header";
import Nav from "../Navbar/Nav";
import Feature_Services from "../section/Feature_Services";
import Global_brand_Section from "../section/global_brand_Section";


const Home = () => {
    return (
        <>
        <Nav></Nav>
        <Header></Header>
        <Global_brand_Section></Global_brand_Section>
        <Feature_Services></Feature_Services>
        </>
    );
};

export default Home;