
import Head from 'next/head'
import Layout from 'components/layout.js';
import 'styles/indexLayout.css';
import 'styles/home.css';
import 'styles/footerStyle.css';
import 'styles/navbarStyle.css';
import 'styles/skillStyle.css';
import 'styles/newStyle.css';
import 'styles/about.css';
import 'styles/loginStyle.css';
import 'styles/stylePoPro.css';
import 'styles/adminStyle.css';
import 'styles/msgStyle.css';
import 'styles/phoneStyle.css';
import favi from "#public/favicon.ico"

function MyApp({ Component, pageProps }) {
  return (
    <div id='app'>
      <Head>
        <title>Ivan Scaglioni</title>
        <link rel="icon" type="image/x-icon" href={`${favi.src}`}/>
       
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