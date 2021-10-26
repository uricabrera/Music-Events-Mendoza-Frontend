import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";

export default function Home({events}) {
    console.log(events)
  return (
      <Layout>
          <h1>Upcoming Events</h1>
      </Layout>
  )
}

export async function getStaticProps(){
    const res = await fetch(`${API_URL}/api/events`)
    const events = res.json();

    console.log(events)

    return{
        props: {
            events
        },
        revalidate: 1
    }
}
