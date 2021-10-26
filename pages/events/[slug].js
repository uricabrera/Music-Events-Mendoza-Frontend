import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import {API_URL} from "@/config/index";
import styles from "@/styles/Event.module.css"
import Link from "next/link";
import Image from "next/image";
import {FaPencilAlt,FaTimes } from "react-icons/fa"


export default function EventPage({evt}){
    const router = useRouter();

    console.log(router);

    console.log("AQUÍ ESTÁ EL EVENTO FALLIDO! : " + evt)

    const deleteEvent = (e) => {
        console.log("Delete");
    }

    return(
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.id}`}>
                        <a><FaPencilAlt/> Edit Event</a>
                    </Link>
                    <Link href="#" className={styles.delete} onClick={deleteEvent}>
                         <a className={styles.delete}><FaTimes/> Delete Event</a>
                    </Link>
                </div>
                <span>
                    {evt.date} at {evt.time}
                </span>
                <h1>{evt.name}</h1>
                { evt.image && (
                    <div className={styles.image}>
                        <Image src={evt.image} width={960} height={600}/>
                    </div>
                )}
                <h3>
                    Performers:
                </h3>
                <p>{evt.performers}</p>
                <h3>
                    Description:
                </h3>
                <p>{evt.description}</p>
                <h3>
                    Venue: {evt.venue}
                </h3>
                <p>{evt.address}</p>

                <Link href="/events">
                    <a className={styles.back}> {'<'}Go Back </a>
                </Link>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({query: {slug}}){
    console.log(slug)

    const res = await fetch(`${API_URL}/api/events/${slug}`)

    let event = await res.json();

    event = event["evt"][0]

    return {
        props: {
            evt: event
        }
    }
}