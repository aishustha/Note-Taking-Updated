import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './Listitems.module.scss';

const Listitems = ({ expenses }) => (
    <div>
        <List>
            {expenses.map(item => (
                <ListItem className={styles.listContent}>
                     <ListItemText key={item.id}> 
                         {item.name} - $ {item.amount}
                     </ListItemText>
                </ListItem>
            ))}
      </List>
    </div>
)

export default Listitems;