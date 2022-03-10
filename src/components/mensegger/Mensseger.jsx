import React, { useEffect, useRef, useState } from 'react'
import './mensseger.scss'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux'
import Conversation from '../conversation/Conversation'
import Message from '../message/Message'
import axios from 'axios'
// import { newConversation } from '../../Redux/apiCalls/chatManager/newConversation'
// const envia = "3c23ae97-1f3b-4cdc-a615-1764a9ee8168"
// const recive = "56e1e9a1-1659-45b8-ac0b-44199da5d93c"

const Mensseger = () => {
    const user = useSelector(state => state.user.currentUser)
    const [conversations, setConversations] = useState([]);

    const [currentChat, setCurrentChat] = useState(null);

    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState("");

    const [arrivalMessage, setArrivalMessage] = useState(null);
    // const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const scrollRef = useRef();

    // useEffect(() => {
    //     const createNewConversation = () => {
    //         try {
    //             newConversation(envia, recive)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     createNewConversation()
    // }, [envia, recive])


    useEffect(() => {
        socket.current = io("contra-reloj.herokuapp.com");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user.userId);
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:8200/api/conversations/" + user.userId);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user.userId]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("http://localhost:8200/api/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            conversationId: currentChat._id,
            sender: user.userId,
            text: newMessage,
        };

        const receiverId = currentChat.members.find(member => member !== user.userId);

        socket.current.emit("sendMessage", {
            senderId: user.userId,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post("http://localhost:8200/api/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    console.log(currentChat)
    console.log(messages);
    return (
        <div className='contentChat' >
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        {conversations?.map((c) => (
                            <div onClick={() => setCurrentChat(c)}>
                                <Conversation conversation={c} currentUser={user} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? (
                            <>
                                <div className="chatBoxTop">
                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Message message={m} own={m.sender === user.userId} />
                                        </div>
                                    ))}
                                </div>
                                <form onSubmit={handleSubmit} className="chatBoxBottom">
                                    <input
                                        className="chatMessageInput"
                                        placeholder="write something..."
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                    ></input>
                                    <button
                                        className="chatSubmitButton"
                                        type='submit'
                                    >
                                        Send
                                    </button>
                                </form>
                            </>
                        ) : (
                            <span className="noConversationText">
                                Open a conversation to start a chat.
                            </span>
                        )}
                    </div>
                </div>
                {/* <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default Mensseger