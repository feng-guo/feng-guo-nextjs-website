import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NavigationBar from '@components/NavigationBar' // Import the NavigationBar component
import { Router } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="container">
      <Router location={''} navigator={undefined}>
        <NavigationBar />
      </Router>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Home