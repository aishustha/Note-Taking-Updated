import React, {useState, useEffect} from 'react'
import styles from './Tasks.module.scss'
import FormList from '../Form/FormList'
import Listitems from '../../pages/List/ListItems'


//conditional operator
const ALL_TASKS = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')): [];

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
        event.preventDefault()
        //check whether the name is not empty and the amount is not negative

        if(title !== '' && description !== '') {
            //single expense object
            //donot override previous values in the array
            //use spread operator to access previous values
            const task = {
                id: Math.random().toString(36).substr(2, 9),
                title, 
                description
            };


            await fetch('http://localhost:3000/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(task)
            });

            setTasks([...tasks, task])

            //clean input fields
            setTitle('')
            setDescription('')
        }else {
            console.log('Invalid tasks.')
        }
    }


    const handleClearTasks = () => {
        setTasks([])
    }

    const handleDelete = (idToDelete) => {
        const filteredTasks = tasks.filter((item) => item.id !== idToDelete);
        setTasks(filteredTasks);
    };


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    //key(tasks) = setitem() = getItem()
    //need to pass as props in form components

    return (
        <div>
            <div className={styles.taskContent}>
                {/* passing as a prop */}
                <FormList   
                    title={title}
                    description={description}
                    handleTitle={handleTitle}
                    handleDescription={handleDescription}
                    handleSubmitForm={handleSubmitForm}
                    handleClearTasks={handleClearTasks}
                />
                <Listitems tasks={tasks} handleDelete={handleDelete}/>
            </div>
        </div>

    )
}