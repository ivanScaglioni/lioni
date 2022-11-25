

import vue from '#public/icons/icon-vue.svg';
import javascript from '#public/icons/icon-javascript.svg';
import git from '#public/icons/icon-git.svg';
import html from '#public/icons/icon-html5.svg';
import typescript from '#public/icons/icon-typescript.svg';
import mongodb from '#public/icons/icon-mongodb.svg';
import node from '#public/icons/icon-node.svg';
import css from '#public/icons/icon-css.svg';
import webpack from '#public/icons/icon-webpack.svg';
import next from '#public/icons/icon-next.svg';



export default function Skills(props) {



    const arrskills = ['javascript', 'typescript', 'mongodb', 'node', 'git', 'webpack', 'html', 'css', 'vue', 'next']
    const skills = [javascript, typescript, mongodb, node, git, webpack, html, css, vue, next]




    const listSkills = skills.map((skill, inde, listSkills) =>

        <div className='skill' key={skill.src}>

            <div>

                <img className='skill-icon' src={`${skill.src}`} alt="" />

            </div>
            <div className='skill-name'>
                {arrskills[inde]}
            </div>



        </div>


    );
    return (

        <div className='skill-section' >




            <div className='skill-container' id="skillContainer">
                <div id='band'>
                    {listSkills}
                    {listSkills}
                </div>


            </div>
        </div>


    )
}