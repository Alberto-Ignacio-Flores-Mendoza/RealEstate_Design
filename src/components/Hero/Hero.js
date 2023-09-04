import React from 'react'
import "./Hero.css"
import {HiLocationMarker}  from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'


const Hero=()=>{
    return (
    <section className="hero-wrapper">
        
        <div className='paddings innerWidth flexCenter hero-container'>

            
            <div className='flexColStart hero-left'>
                <div className='hero-title'>
                <div className='orange-cirlce'></div>
                <motion.h1 
                initial={{y: "2rem", opacity: 0}}
                animate={{y: 0,opacity: 1}}
                transition = {{
                    duration: 2,
                    type: "spring"
                }}
                >

                Discover <br/> The Perfect <br/> Property</motion.h1>

                </div>

            <div className='flexColStart hero-des'>
                <span className='secondaryText'> Find the perfect residency for your lifestyle </span>
                <span className='secondaryText'> Finding a Residence has never been easier! </span>
            </div>


            <div className='flexCenter search-bar'>
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input typeof='text'/>
                <button className='button'>Search</button>

            </div>

            <div className='flexCenter stats'>
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Premium Products</span>
                </div>


                <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={195} end={2000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy customers</span>
                </div>


                <div className='flexColCenter stat'>
                    <span>
                        <CountUp end={28}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Award winnings</span>
                </div>

            </div>

            </div>

        

            <div className='flexCenter hero-right'>
                    <motion.div
                    initial={{x:"7rem", opacity: 0}}
                    animate={{x:0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }} className='image-container'>

                    <img src="./hero-image.png" alt=""></img>
                    </motion.div>
                
            </div>

        </div>

        </section>
    )
}

export default Hero