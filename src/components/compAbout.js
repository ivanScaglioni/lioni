import Image from "next/image";
import ils5 from "#public/ils5.jpg";
import arrow_back from "#public/icons/arrow_back_white.svg";
import send from "#public/icons/send_white.svg";
import info from "#public/icons/info_white.svg";
import chat from "#public/icons/chat_white.svg";
import close from "#public/icons/close_white.svg";
import Skills from "components/skills";
import Link from "next/link";
import gmail from "#public/icons/icon-gmail.svg";
import telegram from "#public/icons/icon-telegram.svg";
import linkedin from "#public/icons/icon-linkedin.svg";
import github from "#public/icons/icon-github.svg";

import { useEffect, useState } from "react";

export default function CompAbout(props) {
  const [status, setStatus] = useState("online");
  const responseChat = [
    "👋 Hi, Come and choose a question for me 👀",
    "On this website you can see my projects 😅 and activities. there isn't much content to watch right now, but I'm working on changing that 💪",
    "😏 At the bottom of the page you will find my contact and you can also send me a message 💬",
    "Mainly web pages 😎 but I like everything related to programming, such as software, video games 🎮, AI 🧠",
    "👅 My native language  is Spanish and my level of English is A1 💩",
    "My battery is low 😔, we'll talk later. bye 👋",
  ];

  const [msgChat, setMsgChat] = useState(responseChat[0]);
  const [flag, setFlag] = useState(false);
  const [quest, setQuest] = useState("none");
  const [lastMsg, setLastMsg] = useState("typing...");
  const [idOption, setIdOption] = useState("none");
  const [indexOption, setIndexOption] = useState(0);
  const [lastScreen, setLastScreen] = useState("screen1");

  const [arrowBackSrc, setArrowBackScr] = useState("none");
  const [sendSrc, setSendSrc] = useState("none");
  const [ils, setIls] = useState("none");
  const [infoCube, setInfoCube] = useState("none");
  const [chatCube, setChatCube] = useState("none");
  const [closeCube, setCloseCube] = useState("none");

  useEffect(() => {
    if (props.page == "Home") {
      setArrowBackScr(arrow_back.src);
      setSendSrc(send.src);
      setIls(ils5.src);
      setInfoCube(info.src);
      setChatCube(chat.src);
      setCloseCube(close.src);
      if (flag) {
        handleChat("response");
      }
      setFlag(true);
    }
  }, [flag]);

  const handleChat = (action) => {
    const chat = document.getElementById("chat");
    const myDiv = document.createElement("div");
    const dateMsg = document.createElement("div");
    const date = document.createTextNode(
      `${new Date().getHours()}:${new Date().getMinutes()}`
    );

    dateMsg.appendChild(date);
    dateMsg.setAttribute("class", "hour-msg");
    if (action == "response") {
      if (msgChat != "none" && lastMsg != msgChat) {
        setStatus("typing...");
        setLastMsg("typing...");
        if (indexOption == 3) {
          const offline = setTimeout(() => {
            setStatus("offline");
          }, 10000);
          offline;
        }
        const myLagTimer = setTimeout(() => {
          const loadMsg = document.getElementById("loading-msg");
          if (loadMsg != null) {
            loadMsg.style.display = "flex";
            chat.scrollTo(chat.scrollHeight - 1, chat.scrollHeight);
          }
        }, 800);
        const myResponseTimer = setTimeout(() => {
          const loadingMsg = document.getElementById("loading-msg");

          if (loadingMsg != null) {
            myDiv.setAttribute("class", "chat-msg res-msg");
            dateMsg.setAttribute("class", "hour-msg");
            const myMsg = document.createTextNode(msgChat);
            myDiv.appendChild(myMsg);
            myDiv.appendChild(dateMsg);
            chat.appendChild(myDiv);
            chat.scrollTo(chat.scrollHeight - 1, chat.scrollHeight);
            loadingMsg.style.display = "none";
            setLastMsg(msgChat);
            const notif = (document.getElementById(
              "noti-screen-1"
            ).style.animationName = "notifi");
            setStatus("online");
          }
        }, 2000);

        myLagTimer;
        myResponseTimer;
      }
    } else if (action == "question") {
      if (quest != "none") {
        const queti = document.getElementById("que");
        const deleteOption = (document.getElementById(idOption).style.display =
          "none");
        const myMsg = document.createTextNode(quest);
        myDiv.setAttribute("class", "chat-msg quest-msg");
        myDiv.appendChild(myMsg);
        myDiv.appendChild(dateMsg);
        chat.appendChild(myDiv);
        queti.selectedIndex = 0;
        setLastMsg(quest);
        setQuest("none");
        setIndexOption(indexOption + 1);
        handleChat("response");
        chat.scrollTo(chat.scrollHeight - 1, chat.scrollHeight);
        if (indexOption == 3) {
          setIndexOption(indexOption + 1);
          const myLastResponse = setTimeout(() => {
            msgChat = responseChat[5];
            handleChat("response");
          }, 3000);

          myLastResponse;
        }
      }
    }
  };

  const handleResponseChat = (quest) => {
    setQuest(quest);
    if (quest.includes("what is this website?")) {
      setMsgChat(responseChat[1]);
      setIdOption("option_1");
    } else if (quest.includes("How can I contact you?")) {
      setMsgChat(responseChat[2]);
      setIdOption("option_2");
    } else if (quest.includes("What is your job?")) {
      setMsgChat(responseChat[3]);
      setIdOption("option_3");
    } else if (quest.includes("what languages do you speak?")) {
      setMsgChat(responseChat[4]);
      setIdOption("option_4");
    }
  };

  const handlePhone = (e, action) => {
    e.preventDefault();
    const screen1 = document.getElementById("screen-1");
    const screen2 = document.getElementById("screen-2");
    const screen3 = document.getElementById("screen-3");
    if (action == "notification") {
      screen1.style.display = "none";
      screen2.style.display = "grid";
      const notif = (document.getElementById(
        "noti-screen-1"
      ).style.animationName = "none");
      const chat = document.getElementById("chat");
      chat.scrollTo(chat.scrollHeight - 1, chat.scrollHeight);
      setLastScreen("screen2");
    } else if (action == "back") {
      if (e.target.id == "back-screen-2") {
        screen2.style.display = "none";
        screen1.style.display = "flex";
        document.getElementById("cube").style.display = "none";
        const notif = (document.getElementById(
          "noti-screen-1"
        ).style.animationName = "none");
        setLastScreen("screen1");
      } else if (e.target.id == "back-screen-3") {
        screen3.style.display = "none";
        if (lastScreen == "screen1") {
          screen1.style.display = "flex";
          setLastScreen("screen1");
        } else {
          screen2.style.display = "grid";
          setLastScreen("screen2");
        }
      }
    } else if (action == "perfil") {
      screen1.style.display = "none";
      screen2.style.display = "none";
      screen3.style.display = "flex";
      document.getElementById("cube").style.display = "none";
      const notif = (document.getElementById(
        "noti-screen-1"
      ).style.animationName = "none");
    }
  };

  if (props.page == "Home") {
    return (
      <div className="contanier-center">
        <div className="phone">
          <div id="screen-1" className="screen">
            <div id="cube">
              <img className="cube-img" src={ils} alt="" />
              <div className="cube-options">
                <img
                  className="push"
                  src={closeCube}
                  onClick={() =>
                    (document.getElementById("cube").style.display = "none")
                  }
                  alt=""
                />

                <img
                  className="push"
                  src={infoCube}
                  onClick={(e) => handlePhone(e, "perfil")}
                  alt=""
                />

                <img
                  className="push"
                  src={chatCube}
                  alt=""
                  onClick={(e) => handlePhone(e, "notification")}
                />
              </div>
            </div>
            <div className="notification push" id="noti-screen-1">
              <img
                className="notification-photo"
                src={ils}
                alt=""
                onClick={(e) =>
                  (document.getElementById("cube").style.display = "flex")
                }
              />

              <div
                className="notification-body"
                onClick={(e) => handlePhone(e, "notification")}
              >
                <div className="notification-name">Ivan</div>
                <div className="notification-msg">{lastMsg}</div>
              </div>
            </div>
          </div>

          <div id="screen-2" className="screen">
            <div className="notification" id="noti-screen-2">
              <img
                className="push"
                id="back-screen-2"
                src={arrowBackSrc}
                onClick={(e) => handlePhone(e, "back")}
              />

              <img className="notification-photo" src={ils} alt="" />

              <div className="notification-body">
                <div className="notification-name">Ivan</div>
                <div className="notification-msg">{status}</div>
              </div>

              <div className="notification-info">
                <img
                  className="push"
                  src={infoCube}
                  onClick={(e) => handlePhone(e, "perfil")}
                  alt=""
                />
              </div>
            </div>

            <div id="chat"></div>
            <div id="loading-msg">
              <div id="ball-1" className="ball"></div>
              <div id="ball-2" className="ball"></div>
              <div id="ball-3" className="ball"></div>
            </div>
            <div className="question">
              <select
                name="questions"
                className="search-msg"
                id="que"
                onChange={(e) => handleResponseChat(e.target.value)}
              >
                <option id="option_0" value="none">
                  Message
                </option>
                <option id="option_1" value="what is this website?">
                  what is this website?
                </option>
                <option id="option_2" value="How can I contact you?">
                  How can I contact you?
                </option>
                <option id="option_3" value="What is your job?">
                  What is your job?
                </option>
                <option id="option_4" value="what languages do you speak?">
                  what languages do you speak?
                </option>
              </select>

              <img
                className="send-msg push"
                src={sendSrc}
                onClick={(e) => (handleChat("question"), setQuest("none"))}
              />
            </div>
          </div>

          <div id="screen-3" className="screen">
            <div className="about-card">
              <div className="me">
                <div className="picture-container item">
                  <div className="picture ">
                    <Image src={ils5} width={200} height={200}></Image>
                  </div>
                </div>
                <div>
                  <div className="name">IVAN SCAGLIONI</div>
                  <div className="description-screen-3">
                    Hi, I'm a web developer who wants to work on projects and
                    help his business grow.
                  </div>
                </div>
              </div>

              <div>
                <div className="title-screen-3">Skills:</div>
                <Skills />
              </div>

              <div className="container-a-phone">
                <div className="title-screen-3">Links:</div>
                <a
                  className="a-contact"
                  target={"_blank"}
                  href="mailto:ivanscargentino@gmail.com"
                >
                  <div className="icon">
                    <Image src={gmail} layout="responsive" />
                  </div>
                </a>
                <a
                  className="a-contact"
                  target={"_blank"}
                  href="https://t.me/IvanScaglioni"
                >
                  <div className="icon">
                    <Image src={telegram} layout="responsive" />
                  </div>
                </a>
                <a
                  className="a-contact"
                  target={"_blank"}
                  href="https://www.linkedin.com/in/ivan-sca-6b7719221/"
                >
                  <div className="icon">
                    <Image src={linkedin} layout="responsive" />
                  </div>
                </a>
                <a
                  className="a-contact"
                  target={"_blank"}
                  href="https://github.com/ivanScaglioni"
                >
                  <div className="icon">
                    <Image src={github} layout="responsive" />
                  </div>
                </a>
              </div>

              <div id="contanier-arrow-3">
                <img
                  className="push"
                  id="back-screen-3"
                  src={arrowBackSrc}
                  onClick={(e) => handlePhone(e, "back")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
