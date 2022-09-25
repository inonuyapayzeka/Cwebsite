import React, { Component } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import lottie from "../websites img/lottie.json"

class About extends Component {
    render() {
        return (
            <div>
                <div className='  flex flex-col  md:grid md:grid-cols-2 justify-items-center items-center p-4 '>
                    <div className=''>

                        <h5 className='text-5xl text-color3 font-bold font-fonts2 p-4'>

                          
                                HAKKIMIZDA
                        </h5>
                        <p className=''>Aute nulla velit adipisicing ullamco et.
                            roident cupidatat esse dolor culpa dolore.
                            Excepteur aliquip tempor sunt minim consectetur qui consequat
                            magna deserunt laboris ullamco ex. Do occaecat laboris quis ad
                            magna proident anim veniam esse aute tempor. Tempor dolore
                            ullamco labore occaecat. Labore pariatur excepteur aliquip do
                            voluptate ad ipsum ea reprehenderit sit ut nulla occaecat
                            ipsum. Esse occaecat excepteur voluptate exercitation
                            magna excepteur reprehenderit pariatur qui. Esse minim
                        </p>
                    </div>
                    <div className='   ' >
                        <Player className="w-2/3 h-1/3"
                            loop
                            autoplay src={"https://assets9.lottiefiles.com/private_files/lf30_cmd8kh2q.json"}>
                        </Player>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;