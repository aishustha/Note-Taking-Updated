import dynamic from "next/dynamic"
import Layout from '../components/Layout/Layout'

const Tasks = dynamic(() => import("../components/Tasks/Tasks"), {
  ssr: false,
});


export default function Home({data}) {
  return (
    <Layout>
      <Tasks/>

      <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  const request = await fetch('http://localhost:3000/api/hello')
  const json = await request.json()

  return {
    props: {
      data: json.data
    }
  }
}


//https://stackoverflow.com/questions/62451917/fetching-data-from-api-using-nextjs-and-material-ui-react

//https://www.freecodecamp.org/news/nextjs-basics/

//https://hoangvvo.com/blog/nextjs-middleware

//https://stackoverflow.com/questions/64379817/nextjs-auth-token-stored-in-memory-refresh-token-in-http-only-cookie
//https://github.com/vercel/next.js/issues/2252
//https://github.com/vercel/next.js/issues/2252