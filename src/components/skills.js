

import  Image from 'next/image';
import vue from '#public/icons/icon-vue.svg';
import javascript from '#public/icons/icon-javascript.svg';
import git from '#public/icons/icon-git.svg';
import html from '#public/icons/icon-html5.svg';
import typescript from '#public/icons/icon-typescript.svg';
import mongodb from '#public/icons/icon-mongodb.svg';
import node from '#public/icons/icon-node.svg';
import css from '#public/icons/icon-css.svg';
import webpack from '#public/icons/icon-webpack.svg';


export default function Skills(props) {

    const arrskills = ['javascript','typescript','mongodb','node','git','webpack','html','css','vue']
    const skills = [javascript,typescript,mongodb,node,git,webpack,html,css,vue]
    var inde = 0;
    const listSkills = skills.map((skill,inde,listSkills)=>

        <div className='skill'>
            <div className='skill-icon'>
                <Image src={skill} layout='responsive' />
            </div>
            <div className='skill-name'>
                {arrskills[inde]}
            </div>
        </div>
    );
    return(

        <div>

            <div>
                SKILLS
            </div>
            
            <div className='skill-container'>
            
            {listSkills}
           
            </div>
        </div>


    )
}