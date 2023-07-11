import styles from "styles/Home.module.scss";
import Layout from "components/layout/Layout";
import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import HeadComponent from "components/headComponent/HeadComponent";
import ReusableHeroSection from "components/HeroSection/HeroSection";

async function getData() {
   const res = await fetch('/api/hello')
   // The return value is *not* serialized
   // You can return Date, Map, Set, etc.
  
   // Recommendation: handle errors
   if (!res.ok) {
     // This will activate the closest `error.js` Error Boundary
     throw new Error('Failed to fetch data')
   }
  
   console.log(res.json())
   return res.json()
 }

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
