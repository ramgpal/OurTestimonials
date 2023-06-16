import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const Testimonials =(props) => {

    let reviews = props.reviews;
    const[index, setIndex] = useState(0);
    function leftShiftHandler() {
        if((index-1) < 0) {
            setIndex(reviews.length-1);
        }
        else {
            setIndex(index - 1);
    }
    }

    function rightShiftHandler () {
        if((index+1) > reviews.length-1) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }
    }

    function surprisedHandler() {
     let randomIndex = Math.floor(Math.random()*(reviews.length));
     setIndex(randomIndex);
    }
    
    return(
        <div className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
           <Card review = {reviews[index]}></Card>

           <div className="flex mt-10 mx-auto text-3xl gap-3 text-violet-400 font-bold">
             <button onClick={leftShiftHandler} className="cursor-ponter hover:text-violet-500">
              <FiChevronLeft/>
             </button> 
             <button onClick={rightShiftHandler}  className="cursor-ponter hover:text-violet-500">
              <FiChevronRight/>
             </button> 
           </div>

           <div className="mt-6">
            <button onClick={surprisedHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 font-bold text-white text-lg">Surprised Me</button>
           </div>

        </div>
    )
}
export default Testimonials;