

import ivue from '#public/icons/icon-vue.svg';
import ijavascript from '#public/icons/icon-javascript.svg';
import igit from '#public/icons/icon-git.svg';
import ihtml from '#public/icons/icon-html5.svg';
import itypescript from '#public/icons/icon-typescript.svg';
import imongodb from '#public/icons/icon-mongodb.svg';
import inode from '#public/icons/icon-node.svg';
import icss from '#public/icons/icon-css.svg';
import iwebpack from '#public/icons/icon-webpack.svg';
import inext from '#public/icons/icon-next.svg';
import iexpress from '#public/icons/icon-express.svg';
import ireact from '#public/icons/icon-react.svg';



export default function Skills(props) {



    const arrskills = ['JavaScript', 'TypeScript', 'mongoDB', 'Node.js', 'git', 'Webpack', 'HTML5', 'CSS', 'Vue', 'Next.js', 'React.js', 'Express.js']
    const skills = [ijavascript, itypescript, imongodb, inode, igit, iwebpack, ihtml, icss, ivue, inext, ireact, iexpress]




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