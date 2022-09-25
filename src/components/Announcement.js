import React, { Component } from 'react';
import Calendar from 'react-awesome-calendar';

class Announcement extends Component {
    
state = {
    events: [
        {
            "id": 1,
            "title": "BootCamp",
            "event": "Cupidatat ea labore quis cit nood id fugiat consequat non et magna eiusmod irure esse nisi et.",
            "from": "2022-09-13",
            "to": "2022-09-15",
            "color":"#2e0d49"
        },
        {
            "id": 2,
            "title": "BootCamp",
            "event": "Cupidatat ea labore quis consequat et cillum ut aute nisi eu.",
            "from": "2022.10.20",
            "to": "2022.10.25",
            "color":"#2e0d49"

        },
        {
            "id": 3,
            "title": "BootCamp",
            "event": "Cupidatat ea labore quis consequat et cillum ut aute nisi eu.",
            "from": "2022.11.20",
            "to": "2022.11.25",
            "color":"#2e0d49"
        },
        {
            "id": 4,
            "title": "BootCamp",
            "event": "Cupidatat ea labore quis consequat et cillum ut aute nisi eu.",
            "from": "2022.12.20",
            "to": "2022.12.25",
            "color":"#2e0d49"
        },
        {
            "id": 5,
            "title": "BootCamp",
            "event": "Cupidatat ea labore quis consequat et cillum ut aute nisi eu.",
            "from": "2022.09.08",
            "to": "2022.09.10",
            "color":"#2e0d49"
        },
        {
            "id": 6,
            "title": "BootCamp",
            "event": "Cupidatat ea labore quis consequat et cillum ut aute nisi eu.",
            "from": "2023.06.20",
            "to": "2023.06.25",
            "color":"#2e0d49"
        },
    ]}
    
    render() {
         
        return (
                <div>
                <div className='  flex  flex-col h-fit p-2  md:grid md:grid-rows-3 md:grid-cols-3  md:h-fit  md:space-x-2   '>
                    <div className='  col-start-1  row-start-1 row-end-4 bg-white gap-4  h-fit '>
                <Calendar
                locale={"tr"}
                events={this.state.events}
                

                ></Calendar>
                    </div>
                    {this.state.events.map(events => (
                        <div   id='eventTable'  key={events.id}>
                            <a  className='block p-6  h-full w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '>
                                <h5 className='text-2xl text-color1 font-bold tracking-tight underline decoration-indigo-500 font-fonts2'>  {events.title}  </h5>
                                <p className='font-normal text-color2'> {events.event} </p>
                                <time className='text-indigo-500'>{events.from}</time>
                            </a>
                        </div>

                    ))}
                </div>
            </div>
            
        );
    }
}

export default Announcement;