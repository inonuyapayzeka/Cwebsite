import React, { Component } from 'react';
import { connect } from "react-redux";
import {Card} from  "reactstrap"
import  linkedinsvg from"../websites img/linkedin.svg"
import  instagramsvg from"../websites img/instagram.svg"
import  githubsvg from"../websites img/github.svg"
import Navbar from './Navbar';

class Teams extends Component {

  render() {
    return (
       
      <div  className=''> 
      
      <Navbar style={"background-color: #2e0d49"} ></Navbar>
        <div class="mb-10 md:mb-16  ">
    <h2
      class="
        mb-4
        text-2xl
        font-bold
        text-center text-gray-800
        lg:text-3xl
        md:mb-6
      "
    >
      Our Team Section
    </h2>

    <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
      perspiciatis omnis aspernatur impedit vel, consectetur laudantium nulla et
      aliqua
    </p>
  </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {this.props.teams.map(member=>(

<Card  key={member.id} >
<div class=" transition delay-150 duration-300 ease-in-out flex flex-col items-center justify-center bg-back hover:bg-back3 p-4 shadow rounded-lg   ">
<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
  <img src={member.photo}
   
    class="h-full w-full" />
</div>

<h2 class="mt-4 font-bold text-xl">{member.name}</h2>
<h6 class="mt-2 text-sm font-medium">{member.task}</h6>

<p class="text-xl text-gray-500 text-center mt-3 h-40">
{member.about}

</p>

<ul class="flex flex-row mt-4 space-x-2">
  <li>  <a   href={member.linkedinlinks} >
     <img   class="flex items-center justify-center h-8 w-8  " src={linkedinsvg} />    
  </a>
         
  </li>
  <li>
              <a href={member.instagramlinks} >
                 <img class="flex items-center justify-center h-8 w-8  " src={instagramsvg}/>  
              </a>
           
  </li>
  <li>
    <a  href={member.githublinks}  >
        <img class="flex items-center justify-center h-8 w-8  " src={githubsvg} />    

     </a>
         
  </li>
</ul>
</div>

</Card>




            ))}
          
        </div>
      </div>
    );
  }
}






function mapStateToProps(state) {
  return {

    teams: state.teamsReducer,

  };
}

export default connect(mapStateToProps)(Teams);
