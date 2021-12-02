import Nav from '../components/Nav';
import App from '../components/App';
import styles from '../styles/Home.module.css';


export default function CustomerHome() {

    return (
        <div className={styles.container}>
            <Nav />
            <App />
        </div>
    )
}

