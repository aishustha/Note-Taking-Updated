import Layout from '../components/Layout/Layout'
import Tasks from '../components/Tasks/Tasks'
import Table from '../components/Table/Table'

export default function Home() {
  return (
    <Layout>
      <Tasks/>
      <Table/>
    </Layout>

  )
}