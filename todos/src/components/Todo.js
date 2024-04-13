import { Button, List, ListItem, ListItemText, Modal } from '@mui/material'
import db from '../firebase'
import React, { useState } from 'react'
import AutoDeleteTwoToneIcon from '@mui/icons-material/AutoDeleteTwoTone';
function Todo(props) {



    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className="">
                    <h1 className="">Hello I am Tejas</h1>
                    <Button onClick={e => setOpen(false)}>Close</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary={'Dummy deadline ⏰'}></ListItemText>
                </ListItem>
                <Button onClick={e => setOpen(true)}>Edit</Button>
                <AutoDeleteTwoToneIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </List>
        </>
    )
}

export default Todo
