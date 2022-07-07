
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
          <div>
            <Link href="/">
              <a> Home </a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a> About me</a>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <a> Projects</a>
            </Link>
          </div>
          <div>
              <Link href="/posts">
                <a> Posts</a>
              </Link>
          </div>
        </div>
    )
  }
  
 