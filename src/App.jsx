import React from 'react'
import { Subscribe, CustomerReviews, Footer, Hero, PopulerProduct, Services, SpecialOffer, SuperQuality } from './sections'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-l wide:padding-l '>
        <Hero />
      </section>
      <section className='padding' >
        <PopulerProduct />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding' >
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding'>
        <CustomerReviews />
      </section>
      <section className='padding'>
        <Subscribe />
      </section>
      <section className='padding'>
        <Footer />
      </section>
    </main>
  )
}
