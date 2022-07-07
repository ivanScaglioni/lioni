import Link from "next/link";


function HomePage() {


    return (
      <div>
        <section>
          <div>
            <h1>ivan scagliopin</h1>
            <Link href="/about">
              <a> read more</a>
            </Link>
          </div>
        </section>
        <section>
          <div>
            <h1>projectos</h1>
            <Link href="/projects">
              <a> read more</a>
            </Link>
          </div>

        </section>
        <section>
          <div>
            <h1>POSTS</h1>
              <Link href="/posts">
                <a> read more</a>
              </Link>
          </div>

        </section>
     </div>
    )


    

    
  }
  
  export default HomePage