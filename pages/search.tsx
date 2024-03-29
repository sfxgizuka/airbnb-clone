import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

const Search = (props:any) => {
    const { searchResults } = props
    console.log(searchResults)

    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query
    const formattedStartDate = format(new Date(startDate as string), 'dd MMM yy')
    const formattedEndDate = format(new Date(endDate as string), 'dd MMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
        <div className='h-screen'>
             <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
                <main className='flex'>
                    <section className='flex-grow px-6 pt-14'>
                        <p className='text-sm'>300+ stays - {range} - for {noOfGuests} guests</p>
                        <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                        <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                            <p className='button'>Cancelation Flexibility</p>
                            <p className='button'> Type of Place</p>
                            <p className='button'>Price</p>
                            <p className='button'>Rooms and Beds</p>
                            <p className='button'>More Filters</p>
                        </div>
                        <div className='flex flex-col'>
                        { searchResults.map(({ img, location, title, description, star, price, total}:any) =>(
                            <InfoCard 
                                key={location}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                        </div>
                    </section>
                </main>
             <Footer />
        </div>
  )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(data => data.json())
    

    return {
        props: {
            searchResults
        }
    }
}