import Link from "next/link";
import Nofound from "components/notfound.js"
import { useRouter } from 'next/router'

export default function ProjectDetail(props){

    if(props.proj == undefined){
        return(
            <Nofound type="Project">

            </Nofound>
        )
    }
    
    const proj = props.proj

    return(
        <div>
            <div className="card-project">
                <div>
                  {proj.title}
                </div>

                <div className="card-img">
                  
                </div>
                <div className="card-description">
                  {proj.description}
                </div>
                <button type="button" onClick={() => window.history.go(-1)}>
                    Click me
                </button>

            </div>
        </div>
    )
}


export async function getServerSideProps(context){
    
   
    const {query:{id}} = context; 
    const resProj = await fetch(`${process.env.HOST}/api/project/${id}`)
    if(!(resProj.status === 200)) return {props:{}};
    const dataProj = await resProj.json()
    
    return{
        props: {proj:dataProj}
    }

}