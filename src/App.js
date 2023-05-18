import {useState,useEffect} from 'react';
import AddMovie from "./components/AddMovie";
import "./app.css";
import MovieList from './components/MovieList';
import Filtring from './components/Filtring';



function App(){
  
  const [list,setList] = useState([
    { title:'spiderman', img:'https://i.pinimg.com/736x/67/f6/0e/67f60e447c9ad5b9e65450fd65f27e2e.jpg', description:"The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 in the Soviet Socialist Union, which became one of the worst human disasters in the twentieth century.", posterURL:"www.spiderman.com", rating:"9.4" },
    { title:'Cosmos', img:'https://cineuropa.org/Galleries/295/703/poster1_fr.jpg?1443187479255', description:"An exploration of our discovery of the laws of nature and coordinates in space and time.", posterURL:"www.cosmos.com", rating:"6.3" },
    { title:'MR. ROBOT', img:'https://cdn.flickeringmyth.com/wp-content/uploads/2019/08/Mr-Robot-final-season.jpg', description:"The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.", posterURL:"www.mrrobot.com", rating:"8.5" },
    { title:'Planet War', img:'https://i.etsystatic.com/10683147/r/il/06d771/1250536725/il_570xN.1250536725_2ox9.jpg', description:"Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.", posterURL:"www.planewar.com", rating:"9.4" },
    { title:'Prison Break', img:'https://ae01.alicdn.com/kf/HTB183z2Xbr1gK0jSZR0q6zP8XXa0.jpg', description:"An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.", posterURL:"www.prisonbreak.com", rating:"8.3" },
    { title:'Harry Potter', img:'https://m.media-amazon.com/images/I/51asM9eJMXL.jpg', description:"Chronicles some of the most famous leaders of the Roman Civilization.", posterURL:"www.harrypotter.com", rating:"9.9" },
    { title:'The Expanse', img:'https://flxt.tmsimg.com/assets/p18951239_b_v13_ad.jpg', description:"In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.", posterURL:"www.theexpanse.com", rating:5.5 },
    { title:'The Walking Dead', img:'https://m.media-amazon.com/images/I/51ifcV+yjPL._AC_.jpg', description:"Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.", posterURL:"www.thewalkingdead.com", rating:"8.2" },
    { title:'The Hobbit', img:'https://wp.missmalini.com/wp-content/uploads/2011/09/hobbit-resized.jpg', description:"Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.", posterURL:"www.voltron.com", rating:8.1 },
    {title:'Peaky Blinders', img:'https://www.themoviedb.org/t/p/original/se86cWSwdSftjJH8OStW7Yu3ZPC.jpg', description:"Birmingham, UK, 1919. In the aftermath of WW1, the Shelby family are making a name for themselves as bookmakers, racketeers and gangsters. Nominally the head of the family is the oldest brother, Arthur, but the real brains, ambition and drive in the organisation lies with Tommy, the second oldest. He will carve out an empire for himself that will stretch beyond Birmingham. This with the aid of his family and his gang, the Peaky Blinders.", posterURL:"www.peakyblinder.com", rating:"9.5" },
    {title:'Fast & Furious', img:'https://static.posters.cz/image/1300/affiches-et-posters/fast-furious-dominic-toretto-i114155.jpg', description:"Birmingham, UK, 1919. In the aftermath of WW1, the Shelby family are making a name for themselves as bookmakers, racketeers and gangsters. Nominally the head of the family is the oldest brother, Arthur, but the real brains, ambition and drive in the organisation lies with Tommy, the second oldest. He will carve out an empire for himself that will stretch beyond Birmingham. This with the aid of his family and his gang, the Peaky Blinders.", posterURL:"www.voltron.com", rating:"7.5" },
    {title:'ByWatch', img:'https://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Baywatch_movie_poster.jpg', description:"Birmingham, UK, 1919. In the aftermath of WW1, the Shelby family are making a name for themselves as bookmakers, racketeers and gangsters. Nominally the head of the family is the oldest brother, Arthur, but the real brains, ambition and drive in the organisation lies with Tommy, the second oldest. He will carve out an empire for himself that will stretch beyond Birmingham. This with the aid of his family and his gang, the Peaky Blinders.", posterURL:"www.voltron.com", rating:"8.5" },
  ]);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  const adding=(movie)=>{
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  const getWord=(word)=>{
    setKeyword(word)
  }
  const  getRate=(rate) => {
    setRate(rate);
};
  return(
    <div className="App">
        <Filtring getWord={getWord} getRate={getRate}/>
        <MovieList list={list.filter((movie)=> movie.rating >= rate && movie.title.toLowerCase().includes(keyword.trim().toLowerCase()))} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;