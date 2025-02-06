import {motion} from "framer-motion";
import { useState } from "react";

const Test = () => {

  const [open, setOpen] = useState(false) 

  const variants = {
    visible: (i)=>( {
      opacity: 1, 
      x: 100, 
      transition:{ delay: i*0.3 }
    }),
    hidden: { opacity:0 }
  };

  const items = ["item1","item2","item3","item4"];

  return (
    <div className="course">
      {/* <motion.div 
        className="box" 
        variants={variants}
        // initial="hidden"
        // animate='visible'
        transition={{duration:2}}
        animate={open ? "visible" : "hidden"}
     ></motion.div>
    <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}
    <motion.ul initial="hidden" animate="visible" variants={variants}>
      {items.map((item, i)=>(
        <motion.li variants={variants} key={item} custom={i}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
    </div>
  );
};

export default Test
