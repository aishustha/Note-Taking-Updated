import Layout from '../../../components/Layout/Layout'
import React from 'react';
import stylesDetail from './DetailTask.module.scss'
import styles from '../ListItems.module.scss'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

class Detail extends React.Component {

     static async getInitialProps(ctx) {
        return { taskId: ctx.query.id};
      }

      constructor(props) {
        super(props);
        this.state = {
          note: {}
        }
      }

      componentDidMount() { //useEffect
          const { taskId } = this.props;
         this.getDetail(taskId);
      }

      getDetail = async() => {
          const {taskId} = this.props;
          const res= await fetch (`http://localhost:3000/api/hello?id=${taskId}`)
            const fetchdata = await res.json()
            
            
            if (res.status !== 200) {
                throw new Error(fetchdata.data.id)
            }
            
            this.setState({note: fetchdata.data});

      }

      render () {
          const {note} = this.state;
          return (
            <div>
        {
            note === undefined?    
            <h3>Task not found</h3>:
            <Layout>
                <div className={stylesDetail.detailInner}>
                    <Card className={styles.cardOuter}> 
                        <CardHeader className={styles.cardTitle} avatar={
                            <Avatar className={styles.avatar}>
                                A
                            </Avatar>
                        }

                        title= {note.title}
                        >
                        </CardHeader>

                        <CardContent className={styles.gridTitle}>
                            {note.description}
                        </CardContent>
                    </Card>
                </div>
            </Layout>
        }
    </div>
          )
        

      }

}

export default Detail;
