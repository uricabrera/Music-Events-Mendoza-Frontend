import Link from "next/link";
import styles from "@/styles/Footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Copyright &copy; Music Events Mendoza 2021</p>
            <p>
                <Link href="/about"><a>About this project</a></Link>
            </p>
        </footer>
    )
}