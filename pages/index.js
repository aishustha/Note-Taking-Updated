import dynamic from "next/dynamic"
import Layout from '../components/Layout/Layout'

const Tasks = dynamic(() => import("../components/Tasks/Tasks"), {
  ssr: false,
});

function Home({posts}) {
  return (
    <Layout>
      <Tasks/>
      {posts.title}
    </Layout>

  )
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/hello', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
      });
            
    const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


export default Home;


//https://stackoverflow.com/questions/62451917/fetching-data-from-api-using-nextjs-and-material-ui-react

//https://stackoverflow.com/questions/64379817/nextjs-auth-token-stored-in-memory-refresh-token-in-http-only-cookie
//https://github.com/vercel/next.js/issues/2252
//https://github.com/vercel/next.js/issues/2252