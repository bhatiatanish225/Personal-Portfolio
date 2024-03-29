import {BrowserRouter} from 'react-router-dom';

import {About,Contact , Experience,Hero,Navbar,Tech,Works,StarsCanvas} from './components'


const App = ()=>  {
  

  return (
    <BrowserRouter>
    
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg bg-cover bg bg-no-repeat bg bg-center'>
        <Navbar/>
        <Hero/>
      </div>

      
      <About/>
      
      <Tech/>
      <Works/>
     

      

    
    

      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
        

      </div>


    </div>
    </BrowserRouter>

  )
}

export default App
