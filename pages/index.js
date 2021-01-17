import dynamic from "next/dynamic"
import Layout from '../components/Layout/Layout'

const Tasks = dynamic(() => import("../components/Tasks/Tasks"), {
  ssr: false,
});


export default function Home() {
  return (
    <Layout>
      <Tasks/>
    </Layout>
  )
}
