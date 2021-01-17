import Link from 'next/link'
import styles from './Navbar.module.scss'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export default function Navbar() {
    return (
        <div className={styles.navHeader}>
            <AppBar position="fixed">
                <Toolbar className={styles.navListLink}>
                    <div className={styles.navBrand}>
                        <ul>
                            <li><Link href="/">Note Taking Application</Link></li>
                        </ul> 
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}