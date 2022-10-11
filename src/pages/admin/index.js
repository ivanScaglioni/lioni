import Link from "next/link"

export default function Admin(props){

return(
    <div className="admin-menu">
        <Link href="/admin/messages">
            <p className="push">Messages</p>
        </Link>

        <Link href="/admin/project">
            <p className="push">Projects</p>
        </Link>

        <Link href="/admin/post">
            <p className="push">Post</p>
        </Link>
    </div>
)

}
