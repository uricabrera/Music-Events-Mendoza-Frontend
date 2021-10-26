import Head from "next/head";
import {useRouter} from "next/router";
import Header from "./Header";
import styles from "@/styles/Layout.module.css"
import Footer from "./Footer";
import Showcase from "@/components/Showcase";


export default function Layout({title,keywords,description,children}){
    const router = useRouter();
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>

            <Header/>

            {router.pathname === "/" ? <Showcase/> : ""}

            <div className={styles.container}>
                {children}
            </div>

            <Footer/>
        </div>
    )
}


Layout.defaultProps = {
    title: "Music Events Mendoza | Find the best events",
    description: "Find the latest musical events",
    keywords: "music,events,Mendoza,mendoza"
}