import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import C_gallery from "./components/c_gallery";
import Footer from "./components/footer";


export default function Kami() {
  return (
    <div>
      <Head>
        <title>smpiainulhuda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/apple-icon-57x57.png" />
      </Head>
      <Header />
      
      <Footer />
    </div>
  );
}