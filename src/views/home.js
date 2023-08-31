import {useEffect, useState} from 'react'


const Home = ()=>{
    const messages = ['Adaptive.','Creative.','Driven.','Responsive.','a Web Developer.']
    const [message,setMessage] = useState('')
    const [index,setIndex] = useState(0)
    const [word,setWord] = useState(0)
    const [isDeleting, setDeleting] = useState(false)
const changeMessage = ()=>{
            setMessage((message + messages[word][index]))
    }
const deleteMessage = ()=>{
    let newMessage = message.slice(0,message.length - 1)
    setMessage(newMessage)
    setIndex(index - 1)
}

useEffect(()=>{
    const timer = setTimeout(()=>{
        if(!isDeleting){
            if(index <= messages[word].length - 1){
                    changeMessage()
                    setIndex(index + 1)}
                else if(word <= messages.length - 1 && message !== 'a Web Developer.'){
                    setDeleting(true)
                    setWord(word + 1)
                }
    } else {
        if(message !== ''){
            deleteMessage()
        }else{setDeleting(false)}
    }
        },150)
    return () => timer
},[message,word,isDeleting])

    return (<>
        <h1>Hello my name is Cameron, I am {message}<span className='blink'>|</span></h1>
    </>)
}


export default Home