export const fadeInLeftVariants = {
  hidden:{
    x:-50,
    opacity:0,
  },
  visible:{
    x:0,
    opacity:1,
    
    transition:{
      type:'tween',
      duration:1,
    }
  }
}

export const fadeInRightVariants = {
  hidden:{
    x:50,
    opacity:0,
  },
  visible:{
    x:0,
    opacity:1,
    
    transition:{
      type:'tween',
      duration:1,
    }
  }
}

export const fadeInTopVariants = {
  hidden:{
    y:-50,
    opacity:0,
  },
  visible:{
    y:0,
    opacity:1,
    
    transition:{
      type:'tween',
      duration:1,
    }
  }
}

export const fadeInBottomVariants = {
  hidden:{
    y:50,
    opacity:0,
  },
  visible:{
    y:0,
    opacity:1,
    
    transition:{
      type:'tween',
      duration:1,
    }
  }
}


