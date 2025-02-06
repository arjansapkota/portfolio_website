import "./projects.scss"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from 'react';

const items = [
    {
        id:1,
        title:"Neoscapes",
        img:"/neoscapes.jpeg",
        desc:"A 2.5D endless platformer runner game developed using Unreal Engine 5 with C++ and blueprints."
    },
    {
        id:1,
        title:"Rapid Rampage",
        img:"/rapid_rampage.png",
        desc:"Rapid Rampage is a 3D endless runner game that I developed in Unreal Engine 5.3.1. It is packaged to run on Windows."
    },
    {
        id:1,
        title:"Ghadi",
        img:"/ghadi.png",
        desc:"A 3D Watch Customizer with Augmented Reality using Unity Engine and Vuforia SDK."
    },
    {
        id:1,
        title:"Synthetic Data Generation",
        img:"/SyntheticData.webp",
        desc:"ynthetic Data Generation of Electronic Health Records using CTGAN, Transformer and Diffusion models."
    }
];

const Single=({item})=>{

    const ref = useRef()

    const {scrollYProgress} = 
    useScroll({
        target: ref,
        // offset:["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">

                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>

                <motion.div className="textContainer" style={{y}}>
                   <h2>{item.title}</h2> 
                   <p>{item.desc}</p>
                   <button>
                    <a href="https://github.com/arjansapkota?tab=repositories">View on GitHub</a>
                    </button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref= useRef()

    const {scrollYProgress} = 
    useScroll({
        target: ref, 
        offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 500,
        damping: 18
    })

  return (
    <div className="projects" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
    {items.map(item=>(
        <Single item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default Portfolio