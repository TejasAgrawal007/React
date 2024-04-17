import React from 'react'
import { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import './Message_card.css'

const Message = forwardRef(({ message, username }, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>

            <Card className={isUser ? "message_userCard" : "message_gustCard"}>
                <CardContent>
                    <Typography
                        color='black'
                        variant="h5"
                        component="h2"
                    >{message.username} : {message.message}
                    </Typography>
                </CardContent>
            </Card>

            {/* <h2>{props.username} : {props.text}</h2> */}

        </div>
    )
})

export default Message
