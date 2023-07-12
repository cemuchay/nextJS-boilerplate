import styles from "styles/Home.module.scss";
import Layout from "components/layout/Layout";
import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import HeadComponent from "components/headComponent/HeadComponent";
import ReusableHeroSection from "components/HeroSection/HeroSection";


const Index = () => {
   return (
      <Container fluid>
         <HeadComponent
            data={{ title: "Home", link: "https://www.example.com" }}
         />
         <ReusableHeroSection
            title="Welcome to My Website"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={{url: "/public/vercel.svg", height: 300,width: 300}}
            backgroundImage="public/vercel.svg"
         />



      </Container>
   );
};

export default Index;

Index.getLayout = (page: ReactElement) => {
   return <Layout>{page}</Layout>;
};
