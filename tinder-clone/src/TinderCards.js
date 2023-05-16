import React,{ useState } from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
// import axios from './axios';
function TinderCards() {
    const[people,setPeople]=useState([
        {
            name:"Elon Musk",
            url:
            "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
        },
        {
            name:'jeff Bezos',
            url:"https://i.insider.com/5db1d99cdee01947694e61e9?width=700",
        },
        {
            name:'Bill Gates',
            url:'https://imageio.forbes.com/specials-images/imageserve/5fa89f29bfcf8584f1f799ef/Bill-Gates/960x0.jpg?format=jpg&width=960',
        },
        {
            name:'ratan tata',
            url:'https://e0.pxfuel.com/wallpapers/570/696/desktop-wallpaper-the-kohinoor-of-india-ratan-tata.jpg',
        },
        {
            name:'Ambani',
            url:'https://openthemagazine.com/wp-content/uploads/2020/09/MukeshAmbani1.jpg',
        },
    ]);
    const swiped = (direction,nameToDelete)=>{
        console.log("removing: "+nameToDelete);
        
    };
    const outOfFrame = (name)=>{
        console.log(name+" left the screen");
    };
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((person)=>(
                <TinderCard
                className='swipe' key={person.name} preventSwipe={['up','down']}
                onSwipe={(dir)=> swiped(dir,person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)}>
                    <div
                    style={{backgroundImage: `url(${person.url})`}}
                    className='card'
                    >
                        <h3>{person.name} </h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  );
}

export default TinderCards
