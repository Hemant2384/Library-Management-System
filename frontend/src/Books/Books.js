import React, { useEffect, useState } from 'react'
import { UserContext } from '../App'
import axios from 'axios'
import books from '../books'
import './Books.css'


const Books = () => {

    const[days,setDays] = useState(0)
    const { emailstate, emaildispatch } = useContext(UserContext);

    // const[books,setbooks] = useState([])
    // const[list,setList] = useState([])
    // useEffect(() => {
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyBCD3AP3MqXwvQ0uo5UC4x5Lf42nuUep-s')
    //     .then(response => {setbooks(response.data.items)})
    // },[])

    const handleclick = () => {
        // console.log("book issued");
    }
  return (
    <div className="mainn">
       <div className="main-heading">
          Books
    </div>
      <div className="myservices">
        <div className="contents">
        {books.map((book,index) => {
          return ( 
            <div className="main_displayy" key={index}>
               <div className="card_component">
                 <div className="services_data">
                   <img className='images' src={`${book.url}`}/>
                 </div>
            <div className="service_name">{book.name}</div>
            <div className="author">{book.author}</div>
            <div className="card_content">
                {book.desc}
            </div>
            <button>Add to Wishlist +</button>
            <input className='inps' type="number" placeholder="Issue for (in days)" onChange={(e) => setDays(e.target.value)}/>
            <button onClick={handleclick}>Issue</button>
            </div> 
        </div>
        )
    })}
        </div> 
         </div> 
        </div>
)}

export default Books