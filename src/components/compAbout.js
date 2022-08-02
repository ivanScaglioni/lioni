import  Image from 'next/image';
import perfil from "#public/perfil.jpg"
import perfil2 from "#public/ils2.jpg"
import Skills from "components/skills"
import Link from 'next/link';

export default function CompAbout (props){

    if (props.page == 'Home'){
        return(
            <div className='container-h'>
                <Link href="/about">
                    <div className='title push'>
                        IVAN SCAGLIONI
                    </div>
                </Link>
            

                
                <div className='home-about' >
                   
                   <div className='container-perfil'>
                        <div className='perfil' >
                            <Image src={perfil2} alt="" layout='responsive'  />
                        </div>
                   </div>

                    <div className='container-ivan'>
                        <div className='home-ivan'>
                        hello and welcome to my website, here you can see completed projects and some of my ideas in post
                        </div> 
                    </div>
                                   
                </div>

            </div>

        )
    } else {
        return(
            <div>
                <div className='title'>
                    IVAN SCAGLIONI
                </div>
                <div>
                    <h1>
                        study
                    </h1>
                    <div>
                    Study
My first steps in programming was at the university of UNCUYO in the career of "bachelor's degree in computer science" (unfinished), there I learned about logic of algorithms, data structures, efficiency of algorithms (annotation O), solve problems, maths.

I also like to study in a self-taught way with online courses, reading documentation, training
                    </div>
                </div>

                

                <Skills/>
                
            </div>
        )
    }


}