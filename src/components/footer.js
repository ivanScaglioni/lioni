
import Image from "next/image";
import gmail from "#public/icons/icon-gmail.svg";
import telegram from "#public/icons/icon-telegram.svg";
import linkedin from "#public/icons/icon-linkedin.svg";
import github from "#public/icons/icon-github.svg";
import Link from "next/link";


export default function Footer() {
    return (
        <div id="contact">
            <div id="link-container">
                <div className="link">
                    <a className="a-contact" target={"_blank"} href="mailto:ivanscargentino@gmail.com">
                        <div className="icon">
                        <Image  src={gmail} layout="responsive" />
                        </div>
                         
                        ivanscargentino@gmail.com 
                    </a>
                </div>
                <div className="link">
                    <a  className="a-contact" target={"_blank"} href="https://t.me/IvanScaglioni">
                    <div className="icon">
                    <Image src={telegram}  layout="responsive" />
                    </div>
                   
                    
                    t.me/IvanScaglioni
                        
                    </a>
                </div>
                <div className="link">
                    <a  className="a-contact" target={"_blank"} href="https://www.linkedin.com/in/ivan-sca-6b7719221/">
                        <div className="icon">
                            <Image src={linkedin}  layout="responsive" />
                        </div>
                       
                        Linkedin
                        
                    </a>
                </div>
                <div className="link">
                    <a  className="a-contact" target={"_blank"} href="https://github.com/ivanScaglioni">
                        <div className="icon">
                            <Image src={github} layout="responsive" />
                        </div>
                        
                        ivanScaglioni
    
                       
                    </a>
                </div>
            </div>
            
            <div className="container-msg" >
                
                <form className="form-msg">
                    <h2 >Write me a message</h2>
                    <input className="input-msg" type="text" name="author"  placeholder="Name" />
                    <input className="input-msg" type="text" name="contact"  placeholder="Contact(optional)" />
                    <textarea className="input-msg" rows="5" cols="30" placeholder="Write your message here"></textarea>
                    <button className="btn-msg" >Send Message</button>
                </form>
            </div>
            <div className="footer-nav">
                <div>
                    <Link href="/about">
                        <a className="a-contact"> ABOUT ME</a>
                    </Link>
                </div>
                <div >
                    <Link href="/projects">
                        <a className="a-contact"> PROJECTS</a>
                    </Link>
                </div>
                <div >
                    <Link href="/posts">
                        <a className="a-contact"> POSTS</a>
                    </Link>
                </div>
            </div>
        </div>
    )
  }
  
