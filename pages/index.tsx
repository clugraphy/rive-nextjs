import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.css";
import Rive, { Layout, Fit, Alignment } from '@rive-app/react-canvas';



export default function Home() {



  return (
    <>

      <main className={styles.main}>
        {/* <div className={styles.center}> */}

        <Rive
          src="smoofslottie.riv"
          stateMachines='Smoofs-machine'
          layout={new Layout({ fit: Fit.Fill, alignment: Alignment.Center })}
        />
        {/* </div> */}
      </main>




    </>
  );
}
