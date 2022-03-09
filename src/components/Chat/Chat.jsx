import styles from './Chat.module.scss';
import { getUserById } from '../../Redux/apiCalls/allUsersTrainer/userById';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import noUser from '../../assets/images/noUser.jpg'
import {firstConvo} from '../../Redux/apiCalls/chatManager/firstConvo'
import {findConvo} from '../../Redux/apiCalls/chatManager/findConvo'
import {getMessages} from '../../Redux/apiCalls/chatManager/getMessages'
import {sendMessage} from '../../Redux/apiCalls/chatManager/sendMessage'


export default function Chat({userId="69d8ece1-4f6a-486f-b0b0-6bd81dfa434f", targetId="428bb2f3-510e-4c9d-9ccf-16dc440f2a5a"}) {
    const dispatch = useDispatch()
    const targetUser = (async()=>await getUserById(dispatch, targetId))()

    const [convo, setConvo] = useState({})
    const [messageHistory, renewHistory] = useState([])
    const [message, setMessage] = useState('')

    async function handleConvo(){
        let foundConvo = await findConvo(userId, targetId)

        if(!foundConvo) return await firstConvo(userId, targetId)
         
        return foundConvo
    }

    useEffect(async ()=>{
        setConvo(await handleConvo())
    }, [])

    useEffect(async ()=>{
        renewHistory(await getMessages(convo._id))
        console.log(convo, messageHistory)
    },[convo])

    
    // useEffect(async ()=>{
    //     renewHistory(await getMessages(convo?._id))
    // }, [sendMessage])

    


    function handleMessage(e){
        e.preventDefault()
        setMessage(e.target.value)
        console.log(message)
    }

    

    async function sendMessageHandler(e){
        e.preventDefault()
        sendMessage(convo._id, userId, message)
        renewHistory(await getMessages(convo?._id))
        let textarea = document.getElementsByClassName(styles.messages)[0]
        textarea.scrollTo({top:textarea.scrollHeight})
        console.log(messageHistory)
    }


    return (
        <div className={styles.chatbox}>
            <div className={styles.userData}>
                <img src={targetUser?.profile_img||noUser} alt='target'/>
                <span>{targetUser?.username||"No username"}</span>
            </div>

            <div className={styles.messages}>
                {messageHistory.map(e=><p className={styles[e.sender===userId?"receiver":"sender"]}>{e.text}</p>)}
            </div>
            <div className={styles.input}>
                <textarea type='text' onChange={handleMessage}></textarea>
                <button onClick={sendMessageHandler}>
                    Send
                </button>
            </div>
        </div>
    )
}