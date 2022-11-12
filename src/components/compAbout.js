import  Image from 'next/image';
import ils5 from "#public/ils5.jpg";
import arrow from '#public/icons/arrow_down.svg';
import arrow_back from '#public/icons/arrow_back_white.svg';
import send from '#public/icons/send_white.svg';
import info from '#public/icons/info_white.svg';
import chat from '#public/icons/chat_white.svg';
import close from '#public/icons/close_white.svg';
import perfil2 from "#public/ils2.jpg";
import Skills from "components/skills";
import Link from 'next/link';
import { useEffect, useState } from 'react';




export default function CompAbout (props){

    // typing.. 
    const [ status, setStatus ] = useState('online');
    const responseChat = [
        "Hi, please choose a question and send it", 
        "On this website you can see my projects and activities. there isn't much content to watch right now, but I'm working on changing that", 
        "At the bottom of the page you will find my contact and you can also send me a message without having to put your contact but I will not be able to answer you if you do not put it",
        "Mainly web pages but I like everything related to programming, such as software, video games, AI",
        "My main language is Spanish but I can also understand written English quite well.",
        "My battery is low, we'll talk later. bye"
    ];
    
    const [ msgChat , setMsgChat] = useState(responseChat[0]);
    const [flag, setFlag] = useState(false);
    const [quest, setQuest]= useState('null');
    const [ lastMsg , setLastMsg ] = useState('typing...')
    const [ idOption , setIdOption] = useState('nope');
    const [indexOption, setIndexOption] = useState(0);
    
    const [arrowBackSrc , setArrowBackScr] = useState('none');
    const [ sendSrc , setSendSrc ] = useState('none');
    const [ ils , setIls] = useState('none');
    const [ infoCube , setInfoCube] = useState('none');
    const [ chatCube , setChatCube] = useState('none');
    const [ closeCube , setCloseCube] = useState('none');


    useEffect(() => {
        if(props.page == 'Home'){
            setArrowBackScr(arrow_back.src);
            setSendSrc(send.src);
            setIls(ils5.src);
            setInfoCube(info.src);
            setChatCube(chat.src);
            setCloseCube(close.src);
            if (flag){
                handleChat('response');
            }
            setFlag(true);
        }

        
    }, [flag]); 
   

 




    const handleChat = (action)=>{
        const chat = document.getElementById('chat');
        const myDiv = document.createElement("div");
        const dateMsg = document.createElement("div");
        const date = document.createTextNode(`${new Date().getHours()}:${new Date().getMinutes()}`);
        console.log(action,quest)
        dateMsg.appendChild(date);
        dateMsg.setAttribute('class', 'hour-msg');

        if(action == "response"){

            if ((msgChat != "null") && (lastMsg !=msgChat )) {
                setStatus('typing...');
                setLastMsg('typing...');
                if(indexOption==3){




  
                    const offline = setTimeout(() => {
                    setStatus('offline');
                    },10000);
                    offline;
    
                    
                }
                const myLagTimer =  setTimeout(() => {
                    const loadMsg = document.getElementById('loading-msg').style.display='flex'
                    chat.scrollTo(chat.scrollHeight-1,chat.scrollHeight);
                }, 800);
                const myResponseTimer =  setTimeout(() => {
                    const loadingMsg = document.getElementById('loading-msg');
                    console.log(loadingMsg)
                    if( loadingMsg != null){
                        myDiv.setAttribute('class', 'chat-msg res-msg');
                        dateMsg.setAttribute('class', 'hour-msg');
                        const myMsg = document.createTextNode(msgChat);
                        myDiv.appendChild(myMsg);
                        myDiv.appendChild(dateMsg);
                        chat.appendChild(myDiv);
                        chat.scrollTo(chat.scrollHeight-1,chat.scrollHeight);
                        loadingMsg.style.display='none';
                        setLastMsg(msgChat);
                        const notif = document.getElementById('screen-1').style.animationName='notifi'
                        setStatus('online');
                    }
                    
                   
                }, 2000);

                myLagTimer;
                myResponseTimer;
                
                

            }
        }else if(action == "question"){
            if (quest != "null") {
                const queti = document.getElementById('que');
                const deleteOption = document.getElementById(idOption).style.display='none';
                const myMsg = document.createTextNode(quest);
                myDiv.setAttribute('class', 'chat-msg quest-msg');
                myDiv.appendChild(myMsg);
                myDiv.appendChild(dateMsg);
                chat.appendChild(myDiv);
                queti.selectedIndex=0;
                setLastMsg(quest);
                setQuest('null');
                setIndexOption(indexOption+1);
                handleChat('response');
                chat.scrollTo(chat.scrollHeight-1,chat.scrollHeight);    
                if(indexOption == 3){
                    setIndexOption(indexOption+1);
                    const myLastResponse =  setTimeout(() => {
                        msgChat=responseChat[5];
                        handleChat('response');
                    }, 3000);



                    myLastResponse;
                }

                
                    

                
            }


        }
        
        
    }

    const handleResponseChat = (quest)=>{
        
            
        setQuest(quest);
        if(quest.includes("what is this website?")){
            setMsgChat(responseChat[1]);
            setIdOption('option_1');
        }else if(quest.includes("How can I contact you?")){
            setMsgChat(responseChat[2]);
            setIdOption('option_2');
        }else if(quest.includes("What is your job?")){
            setMsgChat(responseChat[3]);
            setIdOption('option_3');
        }else if(quest.includes("what languages do you speak?")){
            setMsgChat(responseChat[4]);
            setIdOption('option_4');
        }

    }



    const handlePhone = (e,action)=>{
        console.log(e)
        e.preventDefault();
        const screen1 = document.getElementById('screen-1');
        const screen2 =  document.getElementById('screen-2');
        if(action == 'notification'){

            screen1.style.display = 'none';
            screen2.style.display ='grid';
            const notif = document.getElementById('screen-1').style.animationName='none'
            const chat = document.getElementById('chat');
            chat.scrollTo(chat.scrollHeight-1,chat.scrollHeight);
               
            
 
        }else if(action == 'back'){
          
            screen2.style.display = 'none';
            screen1.style.display ='flex';
            document.getElementById('cube').style.display='none';
            const notif = document.getElementById('screen-1').style.animationName='none'
           
        
        }
    }


   


    if (props.page == 'Home'){
        return(
            <div className='contanier-center'>
                <div className='phone'>
                    <div id='screen-1'>
                        <div id='cube'>
                            <img className='cube-img' src={ils} alt=""/>
                            <div className='cube-options'>
                                <img className='push' src={closeCube} onClick={()=>document.getElementById('cube').style.display='none'} alt=""/>
                               
                                <Link href="/about">
                                    <img className='push' src={infoCube}  alt=""/>
                                </Link>
                                
                                <img className='push' src={chatCube} alt=""  onClick={(e) => handlePhone(e,'notification')}/>
        
                            </div>
                           
                          
                        </div>
                        <div className='notification push' id='noti'>
                            <img className='notification-photo' src={ils} alt="" onClick={(e)=>document.getElementById('cube').style.display='flex'}/>

                            <div className='notification-body' onClick={(e) => handlePhone(e,'notification')} >
                                <div className='notification-name'>
                                    Ivan
                                </div>
                                <div className='notification-msg'>
                                    {lastMsg}
                                </div>
                            </div>
       
                        </div>
                    </div>






                    <div id='screen-2'>


                        <div className='notification' id='noti'>
                            
                            <img className='push' src={arrowBackSrc}  onClick={(e)=>handlePhone(e,'back')}/>
                            
                           
                            <img className='notification-photo' src={ils} alt="" />
                            
                            <div className='notification-body'  >
                                <div className='notification-name'>
                                    Ivan
                                </div>
                                <div className='notification-msg'>
                                    {status}
                                </div>
                            </div>

                            <div className='notification-info'>
                                <Link href="/about">
                                    <img className='push' src={infoCube}  alt=""/>
                                </Link>
                            </div>
                        </div>
             
                        <div id='chat'>
                    
                        
                        </div>
                        <div id='loading-msg'  >
                            <div id='ball-1' className='ball'>
                                
                            </div>
                            <div id='ball-2' className='ball'>
                                
                            </div>
                            <div id='ball-3' className='ball'>
                                
                            </div>
                        </div>
                        <div className='question'>

                            
                            <select name="questions" className='search-msg' id="que" onChange={(e)=>handleResponseChat(e.target.value)}  >
                                <option id='option_0' value="null">Message</option>
                                <option id='option_1' value="what is this website?">what is this website?</option>
                                <option id='option_2' value="How can I contact you?">How can I contact you?</option>
                                <option id='option_3' value="What is your job?">What is your job?</option>
                                <option id='option_4' value="what languages do you speak?">what languages do you speak?</option>
                            </select>


                            <img className='send-msg push' src={sendSrc} onClick={(e)=>(handleChat('question'),setQuest("null"))} />
                        </div>

                    </div>
                    
                </div>
                



            </div>
            

        )
    } else {
        return(

            <div className='about-page '>
 
                <div className='about-card '>
                    <div className='name'>
                            IVAN SCAGLIONI
                    </div>
                    <div className='me'>

                        <div className='picture-container item'>
                            <div className='picture '>
                                <Image src={perfil2} width={200} height={200} ></Image>
                            </div>
                        </div>
                        <div className='info-container'>
                            <div className='info item'>
                                <p>
                                    My first steps in programming was at the university of UNCUYO in the career of "bachelor's degree in computer science" (unfinished), there I learned about logic of algorithms, data structures, efficiency of algorithms (annotation O), solve problems, maths.
                                    I also like to study in a self-taught way with online courses, reading documentation, training
                                </p>
                            
                            </div>
                           
                            
                        </div>
                        
                        
                    </div>
                    <Skills />
                    



                </div>

                <Link href='#contact'>
                    <div className='container-v contactme push'>
                        
                        Contact
                        <img className='arrow'  src={`${arrow.src}`} alt=""/>
                    </div>

                </Link>

            </div>
            
        )
    }


}

