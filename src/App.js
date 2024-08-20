import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Domain from './components/Domains/Domain';
import Landing from './components/Landing/Landing';
import Benefits from './components/Benefits/Benefits';
import Strength from './components/Strengths/Strength';


function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Domain />
      <Benefits/>
      <Strength/>
      <div className='flex flex-col bg-[#E8F4FA] px-96 py-52 justify-center items-center font-poppins gap-5'>
        <p className='text-3xl font-semibold'>Start using the best in class softwares
        </p>
        <div className='flex gap-5'>
          <input className='h-16 w-[530px] rounded-lg px-10 shadow-md'placeholder='Enter your email'/>
          <button className='w-44 h-16 bg-black text-white rounded-lg'>Subscribe</button>
        </div>
      </div>
      <footer>
        <div>
          <div>

            <p>CYAN</p>
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div>

        </div>
      </footer>
    </>
  );
}

export default App;
