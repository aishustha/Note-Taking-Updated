import Layout from '../../../components/Layout/Layout'
import React from 'react';
import stylesDetail from './DetailTask.module.scss'
import styles from '../ListItems.module.scss'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import FormList from '../../../components/Form/FormList'
import Form from '../../../components/Form/form';

class Detail extends React.Component {

     static async getInitialProps(ctx) {
        return { taskId: ctx.query.id};
      }
t
      constructor(props) {
        super(props);
        this.state = {
          note: {},
          title:"",
          description:""
        }
      }

      componentDidMount() { //useEffect
          const { taskId } = this.props;
         this.getDetail(taskId);
      }


    handleTitle = event => {
        console.log("handle change")
        this.setState({"title":event.target.value})
    }

    handleDescription = event => {
        console.log("handle description")
        this.setState({description:event.target.value})
    }

    handleSubmitForm = async event => {
        //console.log('called')
        event.preventDefault()

        const task = {
            title: this.state.title,  // title -> title1
            description: this.state.description // desci
        };

        const res = await fetch(`http://localhost:3000/api/hello?id=${this.state.note.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(task) //convert js obj to string
        });

        const updateData = await res.json()

        this.setState({note: updateData.data})
        

    }

      getDetail = async() => {
          const {taskId} = this.props;
          const res= await fetch (`http://localhost:3000/api/hello?id=${taskId}`)
            const fetchdata = await res.json()
            
            
            if (res.status !== 200) {
                throw new Error(fetchdata.data.id)
            }
            
            this.setState({note: fetchdata.data, title: fetchdata.data.title, description: fetchdata.data.description});

      }

      render () {
          const {note} = this.state;

          console.log(note);
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
<form onSubmit={this.handleSubmitForm}>
                    <Form 
       title={note.title} 
       description={note.description} 
       handleTitle={this.handleTitle}
           handleDescription={this.handleDescription}
           handleSubmitForm={this.handleSubmitForm}
       />
       <button type="submit"> update</button>
       </form>
                </div>
            </Layout>


        }
    </div>
    
          )
        

      }

}

export default Detail;
