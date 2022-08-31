import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

const Index = () => {
  return (
    <Container fluid>

    </Container>
  );
}

export default Index;

Index.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}