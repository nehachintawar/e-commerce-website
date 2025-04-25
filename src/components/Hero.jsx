import React from 'react'
import WomenImg from '../img/women_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">

        <div className="flex FLEX-COL justify-center">
          <div className="font-semibold flex ites-center uppercase">
          <div className="w-10 h-[2px] bg-red-500 mr-3">
           </div> New Trend
          </div>
          <h1 classname= "text-[70px] leading-[1.1] font-light mb-4">AUTUMN SALE STYLISH <br />
          <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More </Link>

        </div>
        <div className="hidden lg:block">
          <img src={WomenImg} alt="" />
        </div>
      </div>
      </section>
    </div>
  )
}

export default Hero
