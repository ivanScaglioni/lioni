import Link from "next/link"

export default function Admin(props){

return(
    <div className="admin-menu">
        <Link href="/admin/messages">
            <p className="push">MESSAGES</p>
        </Link>

        <Link href="/admin/project">
            <p className="push">PROJECTS</p>
        </Link>

        <Link href="/admin/post">
            <p className="push">BLOG</p>
        </Link>
    </div>
)

}
