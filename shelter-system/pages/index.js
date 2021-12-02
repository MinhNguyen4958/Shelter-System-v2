import Head from 'next/head';

// Import the forms to render them
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

// Write the home page form (this can serve as the home page for the shelter)
export default function Home({ isConnected }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />
   
      <div className={styles.container}>
        <h1>Welcome to the shelter!</h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      posts: ['message'],
    },
  };
}
