
import Link from "next/link";
import explore from "#public/icons/explore.svg"


export default function Navbar() {
  const handleMenu = () => {
    const menu = document.getElementById('themenu');
    const menuIcon = document.getElementById('menu-icon');
    if (menu.className.includes('up')) {
      menuIcon.style.transform = "rotateZ(90deg)"
      menu.style.display = 'grid';
      menu.className = menu.className.replace('up', 'down');
    } else {
      menuIcon.style.transform = "rotateZ(0)"
      menu.className = menu.className.replace("down", "up");
      menu.className = menu.className.trim()
    }

  }
  return (
    <div className="navbar">


      <img onClick={handleMenu} className="nav_bar push" id="menu-icon" src={`${explore.src}`} alt="" />

      <div className="container-menu up" id="themenu" style={{ display: 'none' }} onClick={handleMenu}>
        <div className="menu" >
          <div>
            <Link href="/">
              <a className="a-nav"> HOME</a>
            </Link>
          </div>
          <div >
            <Link href="/projects">
              <a className="a-nav"> PROJECTS</a>
            </Link>
          </div>
          <div >
            <Link href="/posts">
              <a className="a-nav">BLOG</a>
            </Link>
          </div>
        </div>
        <div className="glass" >

        </div>
      </div>
    </div>


  )
}

