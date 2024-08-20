import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Domain from './components/Domains/Domain';
import Landing from './components/Landing/Landing';
import Benefits from './components/Benefits/Benefits';


function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Domain />
      <Benefits/>
      <div className='px-20 py-24'>
        <div className='w-[572px] h-[459px] p-10 bg-[#F4F4F4] flex flex-col gap-5 '>
          <p>
          Innovating for the Future of Business"
          </p>
          <p>
          At Cyan Cloud Technologies, innovation is at the core of everything we do. Our products are designed to harness the latest advancements in AI, automation, and cloud technologies to drive your business forward.We’re committed to pushing the boundaries of technology, ensuring that your company is always equipped with the tools of tomorrow.
          </p>
          <button>View More</button>
        </div>
      </div>
    </>
  );
}

export default App;
