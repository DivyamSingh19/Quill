import React from 'react'
import motion from 'motion'
const Card = () => {
  return (
    <div>
      <motion.div
       className="box"
       animate={{sacle :2}}
       whileInView =  {{opacity:1}}
       layout
       style={{x:100}}
      />

       
      
    </div>
  )
}

export default Card
