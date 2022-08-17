import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';
import { ReactElement } from 'react';

const Index = () => {
  return (
    <div className="text-center m-5">
      Welcome To Cottage Hospital Azumini Website
    </div>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}