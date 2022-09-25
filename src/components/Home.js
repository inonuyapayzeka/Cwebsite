import React, { Component } from 'react';
import Navbar from './Navbar';
import bg from "./../websites img/bgımg.jpg"
import About from './About';
import Info from './Info';
import Announcement from './Announcement';
class Home extends Component {
    render() {
    
        return (
            
            <div>
                <div style={{ backgroundImage: `url(${bg})` }} className="  scroll-auto grid grid-cols-4 grid-rows-4 h-screen bg-center bg-cover  ">
                    <div className='col-span-4 '> <Navbar></Navbar></div>
                    <div className='flex col-start-1 col-end-3 row-start-2 row-end-5 text-left  '  >
                        <div className='grid grid-rows-4 text-color1 font-fonts2 ml-20    '>
                            <div className='text-6xl font-bold '>MERHABA </div>
                            <div className='text-xl '>İnönü Üniversitesi Yapay Zeka Topluluğu</div>
                            <div className='text-lg overflow-clip '>Adipisicing adipisicing ad minim quis dolor proident exercitation. Laborum mollit quis deserunt aliquip incididunt excepteur velit mollit quis. Nisi do eu cillum sint incididunt sunt reprehenderit deserunt amet deserunt ad commodo. Sit consectetur ea ut dolore quis. Consectetur reprehenderit pariatur enim in reprehenderit nostrud qui veniam reprehenderit. Ipsum duis duis irure ullamco et.</div>
                            <div>
                                <button class="bg-color1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"> 
                                 DAHA FAZLA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

              <div  ><h5 className='h-30  text-center font-bold text-2xl' >ETKİNLİK TAKVİMİ</h5> </div>
                <Announcement></Announcement>
                <Info></Info>
                <About></About>
               
            </div>
        );
    }
}

export default Home;