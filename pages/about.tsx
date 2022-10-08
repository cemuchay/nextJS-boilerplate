import styles from "styles/about/About.module.css";
import type { NextPage } from "next";
import { ReactElement } from "react";
import Layout from "components/layout/Layout";

const About = () => {
   return <div className="text-center m-5">Welcome to About Page</div>;
};

export default About;

About.getLayout = (page: ReactElement) => {
   return <Layout>{page}</Layout>;
};
