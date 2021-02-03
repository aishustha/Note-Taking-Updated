import React, {useState, useEffect} from 'react'
import styles from './Tasks.module.scss'
import FormList from '../Form/FormList'
import ListItems from '../../pages/List/ListItems'


//conditional operator
// let ALL_TASKS = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')): [];
let ALL_TASKS = [];

//getItem() from the localStorage API - can read any value stored

export default function Tasks() {
    const [tasks, setTasks] = useState(ALL_TASKS)
    //initial state have empty value
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    //handler methods when user is typing
    //retrieving the value
    const handleTitle = event => {
        //console.log('Title', event.target.value)
        setTitle(event.target.value)
    }

    const handleDescription = event => {
        //console.log('Description', event.target.value)
        setDescription(event.target.value)
    }

    const handleSubmitForm = async event => {
        //console.log('called')
        event.preventDefault()
        //check whether the name is not empty and the description is not negative
        if(title !== '' && description !== '') {
            //single expense object
            //donot override previous values in the array
            //use spread operator to access previous values
            const task = {
                title, 
                description
            };

            // Save notes to API.
            const res = await fetch('http://localhost:3000/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(task) //convert js obj to string
            });
            

            const fetchdata = await res.json()
            //console.log(fetchdata)

            setTasks([...tasks, fetchdata.data])

            //clean input fields
            setTitle('')
            setDescription('')
        }else {
            console.log('Deleted')
        }
    }


    // const handleClearTasks = () => {
    //     setTasks([])
    // }



    const handleDelete = async idToDelete => {
        const res = await fetch(`http://localhost:3000/api/hello?id=${idToDelete}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                },
        });

        // const filteredTasks = tasks.filter((item) => item.id !== idToDelete);
        // setTasks(filteredTasks);
        const deletedata = await res.json();
        setTasks(deletedata.data);
    }


    useEffect(async () => {
        // localStorage.setItem('tasks', JSON.stringify(tasks))
        const res = await fetch('http://localhost:3000/api/hello');
        const fetchdata = await res.json()
        setTasks(fetchdata.data);
    }, [])


    //using setState inside useEffect will create an infinite loop that most likely you don't want to cause. 
    //useEffect is called after each render and when setState is used inside of it, it will cause the component to re-render which will call useEffect and so on and so on.
    //One of the popular cases that using useState inside of useEffect will not cause an infinite loop 
    //is when you pass an empty array as a second argument to useEffect like useEffect(() => {....}, []) 
    //which means that the effect function should be called once: after the first mount/render only. 
    //This is used widely when you're doing data fetching in a component and you want to save the request data in the component's state.
    //key(tasks) = setitem() = getItem()
    //need to pass as props in form components

    return (
        <div>
            <div className={styles.taskContent}>
                <h1>Add Fields</h1>
                {/* passing as a prop */}
                <FormList   
                    title={title}
                    description={description}
                    handleTitle={handleTitle}
                    handleDescription={handleDescription}
                    handleSubmitForm={handleSubmitForm}
                    //handleClearTasks={handleClearTasks}
                />
                <ListItems tasks={tasks} handleDelete={handleDelete}/>
            </div>
          
        </div>

    )
}