import Link from "next/link";
import Layout from "../components/Layout";

export default function AboutPage(){
    return(
        <Layout title="About Music Events Mendoza">
            <h1>About</h1>
            <p>This is an app to find the latest musical events!</p>
            <p>Version: 1.0.0</p>
        </Layout>
    )
}