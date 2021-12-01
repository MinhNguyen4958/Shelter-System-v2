import Link from 'next/link';

import styles from '../styles/Nav.module.css';

// A navigation bar with links to the home page and adding a post
export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/customers">
                        <a>Customers</a>
                    </Link>
                </li>
                    <Link href="/add-post">
                        <a>Staff</a>
                    </Link>
            </ul>
        </nav>
    );
}