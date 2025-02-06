import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import "./portfolio.scss";

const variants = {
    initial: { x: -500, y: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.1 } }
};

const skills = [
    { name: "Blender", src: "/blender.png" },
    { name: "Unreal Engine 5", src: "/ue5.png" },
    { name: "HTML", src: "/html.png" },
    { name: "CSS", src: "/css.png" },
    { name: "React.js", src: "/react.png" },
    { name: "C", src: "/clogo.png" },
    { name: "C++", src: "/cpp.png" },
    { name: "Python", src: "/py.png" },
    { name: "NumPy", src: "/numpy.png" },
    { name: "Pandas", src: "/pandas.png" },
    { name: "Scikit Learn", src: "/scikit.png" },
    { name: "OpenCV", src: "/opencv.png" },
    { name: "PyTorch", src: "/torch.png" },
    { name: "ScikitImage", src: "/skimg.png" },
];

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="portfolio" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>Showcasing my education, skills, and experience in the field of technology</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="Portfolio" />
                    <h1><motion.b whileHover={{ color: "orange" }}>My</motion.b> Portfolio</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>Skills &</motion.b> Experience</h1>
                    <button>
                        <a href="https://github.com/arjansapkota" className="button">View GitHub</a>
                    </button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "black", color: "white" }}>
                    <h2>Education</h2>
                    <p>
                        SEE - Triyog High School<br />
                        +2 - Uniglobe SS/ College<br />
                        Bachelors in Computer Engineering - IOE Thapathali Campus
                    </p>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "black", color: "white" }}>
                    <h2>Skills</h2>
                    <div className="skills-logos">
                        {skills.map(skill => (
                            <motion.img 
                                key={skill.name} 
                                src={skill.src} 
                                alt={skill.name} 
                                className="skill-logo"
                                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.8)" }}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "black", color: "white"}}>
                    <h2>Experience</h2>
                    <p className="experience-text">AI/ML Engineer Intern at Fusemachines Nepal</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
