
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />
     <Banner />

     <main>
        <section>
          <h2>Explore Nearby</h2>
        </section>
     </main>

    </div>
  )
}

export default Home
