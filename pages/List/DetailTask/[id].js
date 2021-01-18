import Layout from '../../../components/Layout/Layout'
import stylesDetail from './DetailTask.module.scss'
import styles from '../ListItems.module.scss'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const getTaskById = taskId => {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')): [];
    if (tasks && tasks.length > 0) {
        const task = tasks.filter((t) => t.id === taskId);
        if (task) {
            return task[0];
        }
    }
    return null;
}
const DetailTask = (tasks) => {
    const task = getTaskById(tasks.taskId);
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

//ctx(Context) is the objecr passed down by getinitialProps()
//ctx disables the ability to perform automatic static optimization, causing every page in the app to be server-side-rendered.

DetailTask.getInitialProps = async (ctx) => {
    const taskId = ctx.query.id;
    //ctx.query ot ctx.requets.query is the query string items represented as an object
    return { taskId: taskId }
}
export default DetailTask;