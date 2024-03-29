import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import HotelListCard from '../components/HotelListCard'
import PlacesCarouselCard from '../components/PlacesCarouselCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'



export default function Home (props:any) {
  const { exploreData, cardsData } = props
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2  className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          { exploreData?.map((item:any) => (
              <HotelListCard img={item?.img} location={item?.location} distance={item?.distance} key={item?.location} />
          )) }
          </div>
        </section>
        <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            { cardsData?.map((item:any) => (
                <PlacesCarouselCard key={item?.title} title={item?.title} img={item?.img}/>
            ))}
            </div>
        </section>

        <LargeCard img='https://links.papareact.com/4cj'  title='The Greatest Outdoors' description='Whitelists Curated by Airbnb' buttonText='Get Inspired'/>

      </main>
      <Footer />

     
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const exploreData = await res.json();

  const res2 = await fetch('https://www.jsonkeeper.com/b/VHHT')
  const cardsData = await res2.json()
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}


