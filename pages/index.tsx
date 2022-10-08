import styles from "styles/Home.module.css";
import Layout from "components/layout/Layout";
import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import HeadComponent from "components/headComponent/HeadComponent";

const Index = () => {
   return (
      <Container fluid>
         <HeadComponent
            data={{ title: "Home", link: "https://www.example.com" }}
         />
      </Container>
   );
};

export default Index;

Index.getLayout = (page: ReactElement) => {
   return <Layout>{page}</Layout>;
};
