export default function NewProject(){

    return(
        <div >
    
            <form className="form-new" action={'/api/project'} method="POST" >
                <h1>New Project</h1>
                <input className="input-new" type="text" name="title" placeholder="title " />
                <textarea className="input-new" rows="5" cols="30" type="text" name="description" placeholder="little description of post" />
                <textarea className="input-new" rows="5" cols="30" type="textA" name="expand" placeholder="body of post"/>
                <input className="input-new" type="text" name="image" placeholder="url of image"/>
                <input className="input-new" type="text" name="website" placeholder="url of website"/>
                <input className="input-new" type="text" name="github" placeholder="url of github"/>
                <input className="input-new" type="submit" value="sumit"></input>
            </form>
        </div>
    )
}