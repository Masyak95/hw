import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

export type MessageType = {
    id:number
    user:{
        avatar:string
        name: string
    }
    message:{
        text:string
        time:string

    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://uznayvse.ru/images/catalog/2022/1/actress-amber-heard_16.jpg', // можно менять
        name: 'Amber Heard',  // можно менять
    },
    message: {
        text: 'my dog stepped on a bee', // можно менять
        time: '09:01', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://static.tvtropes.org/pmwiki/pub/images/johnny_depp_9.jpeg', // можно менять
        name: 'Johny Depp', // можно менять
    },
    message: {
        text: 'OMG', // можно менять
        time: '09:02', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
