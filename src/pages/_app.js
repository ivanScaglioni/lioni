
import Head from 'next/head'
import Layout from 'components/layout.js';
import 'styles/indexLayout.css';
import 'styles/home.css';
import 'styles/footerStyle.css';
import 'styles/navbarStyle.css';
import 'styles/skillStyle.css';
import 'styles/newStyle.css';
import 'styles/loginStyle.css';
import 'styles/stylePoPro.css';
import 'styles/adminStyle.css';
import 'styles/phoneStyle.css';
import 'styles/msgAdminStyle.css'
import favi from "#public/favicon.ico"
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {

  const [favisrc , setFavi] = useState('none');

  useEffect(()=>{
    setFavi(favi.src);
  },[]);

  return (
    <div id='app'>
      <Head>
        <title>Ivan Scaglioni</title>
        <meta name="description" content="Developer FullStack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favisrc}/>
        
      </Head>
      <div id='background'></div>
      <Layout >
        <Component  {...pageProps} />
      </Layout>

    </div>

  )
}



// MyApp.getInitialProps = async (context) => {
//   return {
    
//     props: {}, // will be passed to the page component as props
//   }
// }

export default MyApp;