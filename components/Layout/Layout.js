import Head from 'next/head'
import styles from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'
export default function Layout(props) {
    return (
        <div className={styles.overflowBody}>
            <Head>
                <title>Note Taking Application</title>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    rel="stylesheet"
                />

                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js"
                />
            </Head>

            <div className={styles.noteHeader}>      
                <Navbar />
                {props.children}
            </div>
        </div>
    )
}