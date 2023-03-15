import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
// ADD NEW WORKS!
// ADD VALIDATION!!!
// Fix canvas if possible
const App = () => {
  return (
    <BrowserRouter>
      <div className='reletive z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeact bg-center'>
          <header><Navbar/></header>
          <Hero/>
        </div>
        <main>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
        </main>
        <footer className='reletive z-0'>
          <Contact/>
          {/* <StarsCanvas/> */}
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
