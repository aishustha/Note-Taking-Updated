import React from 'react'
import styles from './Listitems.module.scss';
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const Listitems = ({ tasks, deleteTasks}) => (
    <div>
        <Grid container spacing={4} className={styles.gridContent}>
            {tasks.map(item => (
                <Grid item xs={12} md={4}>
                     
                     <Card className={styles.cardOuter} key={item.id}> 
                        <CardHeader className={styles.cardTitle} avatar={
                            <Avatar className={styles.avatar}>
                                A
                            </Avatar>
                        }

                        action={
                            <div>
                                <IconButton aria-label="delete" onClick={() => deleteTasks(item.id)}>
                                    <i class="fas fa-trash"></i>
                                </IconButton>
                            </div>
                        }

                        title= {item.title}
                        >
                        </CardHeader>

                        <Link href={`List/DetailTask/${item.id}`}>
                            <a>
                                <CardContent className={styles.gridTitle}>
                                    {item.description}
                                </CardContent>
                            </a>
                        </Link>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
)

export default Listitems;