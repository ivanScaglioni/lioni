
import Image from "next/image";
import gmail from "#public/icons/icon-gmail.svg";
import telegram from "#public/icons/icon-telegram.svg";
import linkedin from "#public/icons/icon-linkedin.svg";
import github from "#public/icons/icon-github.svg";
import Link from "next/link";

import { useState } from "react";


export default function Footer() {

    const initialState = {
        name: '',
        contact: '',
        msg4me: ''
    }

    const [message, setMessage] = useState(initialState);


    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/message', { method: 'POST', body: JSON.stringify(message), })
        setMessage({ ...initialState });
        if (res.status == 201) {
            const btn = document.getElementById("btn-greeting");
            btn.innerText = "thanks!!";
            btn.className = btn.className + " thanks";

        } else {
            const btn = document.getElementById("btn-greeting");
            btn.innerText = "ERROR";
            btn.className = btn.className + " err";

        }
        const reset = setTimeout(() => {

            const btnt = document.getElementById("btn-greeting");
            if (btnt != undefined) {
                btnt.className = btnt.className.replace('thanks', "")
                btnt.className = btnt.className.replace('err', "")
                btnt.innerHTML = "send message"
                btnt.className.trim()
            }
        }, 5000);
        reset;

    };





    return (
        <div id="contact">

            <div id="link-container">
                <div className="link" id="a-gmail">
                    <a className="a-contact" target={"_blank"} href="mailto:ivanscargentino@gmail.com">
                        <div className="icon">
                            <Image src={gmail} layout="responsive" />
                        </div>

                        ivanscargentino@gmail.com
                    </a>
                </div>
                <div className="link" id="a-telegram">
                    <a className="a-contact" target={"_blank"} href="https://t.me/IvanScaglioni">
                        <div className="icon">
                            <Image src={telegram} layout="responsive" />
                        </div>


                        Telegram

                    </a>
                </div>
                <div className="link" id="a-linkedin">
                    <a className="a-contact" target={"_blank"} href="https://www.linkedin.com/in/ivan-sca-6b7719221/">
                        <div className="icon">
                            <Image src={linkedin} layout="responsive" />
                        </div>

                        Linkedin

                    </a>
                </div>
                <div className="link" id="a-github">
                    <a className="a-contact" target={"_blank"} href="https://github.com/ivanScaglioni">
                        <div className="icon">
                            <Image src={github} layout="responsive" />
                        </div>

                        Github


                    </a>
                </div>
            </div>

            <div className="container-msg" >

                <form className="form-msg">
                    <h2 >send me a message</h2>
                    <input className="input-msg" type="text" name="name" placeholder="Name" value={message.name} onChange={handleChange} />
                    <input className="input-msg" type="text" name="contact" placeholder="Contact (optional)" value={message.contact} onChange={handleChange} />
                    <textarea className="input-msg" type="text" rows="5" cols="30" name="msg4me" value={message.msg4me} placeholder="Send me your opinion or a message" onChange={handleChange}></textarea>
                    <button className="btn-msg push" type="button" id="btn-greeting" onClick={(e) => handleSubmit(e)}  >send message</button>

                </form>
            </div>
            <div className="footer-nav">
                <div >
                    <Link href="/admin">
                         <a href="" className="card-link">administrator</a>
                    </Link>
                </div>
                <p>IVAN SCAGLIONI</p>

            </div>
        </div>
    )
}


