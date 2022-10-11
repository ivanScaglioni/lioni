import  Image from 'next/image';
import perfil from "#public/perfil.jpg";
import arrow from '#public/icons/arrow_down.svg'
import perfil2 from "#public/ils2.jpg"
import Skills from "components/skills"
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function CompAbout (props){

    
    const [ hours, setMyHours ] = useState(0);
    const [ minutes, setMyMinutes ] = useState(0);
    const responseChat = ['Hi!', 'Welcome to my website', '22'];

    function setMyDate(){
        const ayer = new Date();
        setMyHours(ayer.getHours());
        setMyMinutes(ayer.getMinutes());
        
       
    }

    useEffect(() => {
        setMyDate();
        
    }, []); 


    const handleChat = ()=>{

    }

    const handlePhone = (e,action)=>{
        console.log(e)
        if(action == 'notification'){
            const noti = document.getElementById('noti');
            noti.style.display = 'none';
            const contra =  document.getElementById('contra');
            contra.style.display ='flex';
        }
    }

   




    if (props.page == 'Home'){
        return(
            <div className='contanier-center'>
                <div className='phone'>
                    <div className='notification' id='noti'>
                        <div className='notification-photo'></div>
                        <div className='notification-body' onClick={(e) => handlePhone(e,'notification')} >
                            <div className='notification-name'>
                                Ivan
                            </div>
                            <div className='notification-msg'>
                                Hi!
                            </div>
                        </div>
                        <div className='notification-info'>
                            <div className='notification-date'>
                                {hours}:{minutes}
                            </div>
                            <div className='notification-alert'>
                                1
                            </div>
                        </div>
                    </div>
                    <div className='contractil' id='contra'>
                        <div className='contractil-photo'>
                            
                        </div>
                        <div className='contractil-body'>
                            <div className='contractil-name'>
                                ivan
                            </div>
                            <div className='contractil-status'>
                                in line
                            </div>
                        </div>
                        
                    </div>
                    <div className='chat'>

                  
                    
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

