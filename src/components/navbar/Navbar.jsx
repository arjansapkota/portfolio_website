import "./navbar.scss"
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
          initial={{opacity:0, scale:0.5}} 
          animate={{opacity:1, scale:1}} 
          transition ={{duration:0.5}}
          style={{
            x:100,
            fontSize: 30
          }}
        >
          
        </motion.span>

        <div className="social">
          <a href="https://www.github.com/arjansapkota/"><img src="/github.webp" alt=""/></a>
          <a href="https://www.instagram.com/xpkt_arzan_/"><img src="/instagram.png" alt=""/></a>
          <a href="http://www.youtube.com/@rzn-m10"><img src="/youtube.png" alt=""/></a>
          <a href="https://www.linkedin.com/in/arjan-sapkota-a06129279"><img src="/linkedin.png" alt=""/></a>                
        </div>
      </div>
    </div>
  )
}

export default Navbar;