

import Layout from 'components/layout.js'
import 'styles/home.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}



// MyApp.getInitialProps = async (context) => {
//   return {
    
//     props: {}, // will be passed to the page component as props
//   }
// }

export default MyApp;