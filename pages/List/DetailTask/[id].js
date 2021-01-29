import Layout from '../../../components/Layout/Layout'
import stylesDetail from './DetailTask.module.scss'
import styles from '../ListItems.module.scss'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import { useState } from 'react'

const fetcher = async () => {
    const res= await fetch ('http://localhost:3000/api/hello')
    const fetchdata = await res.json()

    if (res.status !== 200) {
        throw new Error(fetchdata.id)
    }
    console.log('fetchdata')
    return data
}





const getTaskById = async(taskId)=> {

    const res= await fetch (`http://localhost:3000/api/hello?id=${taskId}`)
    const fetchdata = await res.json()
    

    if (res.status !== 200) {
        throw new Error(fetchdata.id)
    }

    const [note, setNote] = useState(fetchdata.note);


    console.log(fetchData)
    // return data

    const tasks = [];
    // const task = tasks.filter((t) => t.id === taskId);
    // console.log(tasks)
    // if (task) {
    //     return task[0];
    // }
   
    // if (tasks && tasks.length > 0) {
      
    //     const task = tasks.filter((t) => t.id === taskId);
    //     console.log(tasks)
    //     if (task) {
    //         return task[0];
    //     }
    // }
    // return null;
}




//props = tasks
const DetailTask = (tasks) => {
    getTaskById(tasks.taskId);

    // const task = this.state.note;     

    if (!task) {
        return (
            <h3>Task not found</h3>
        );
    } else {
        return (
            <Layout>
                <div className={stylesDetail.detailInner}>
                    <Card className={styles.cardOuter}> 
                        <CardHeader className={styles.cardTitle} avatar={
                            <Avatar className={styles.avatar}>
                                A
                            </Avatar>
                        }

                        title= {task.title}
                        >
                        </CardHeader>

                        <CardContent className={styles.gridTitle}>
                            {task.description}
                        </CardContent>
                    </Card>
                </div>
            </Layout>
        );
    }
};

//getInitialProps to fetch data when your component acts as a Page, and you want to provide the data as Props.

//ctx(Context) is the object passed down by getinitialProps()
//ctx disables the ability to perform automatic static optimization, causing every page in the app to be server-side-rendered.

DetailTask.getInitialProps = async (ctx) => {
    const taskId = ctx.query.id;
    console.log(taskId)
    return { taskId: taskId }
}
export default DetailTask;