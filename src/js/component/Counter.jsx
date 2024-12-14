import React, {useState, useEffect} from 'react'; 
import { HiOutlineClock } from "react-icons/hi";

const Counter = () => {

    const [seconds, setSeconds] = useState(0); 
    const [digits, setDigits] = useState([0, 0, 0, 0]); 

    useEffect(() => {
        const interval = setInterval(() => {
            const digitsArray = seconds.toString().padStart(4, '0').split(' '); 

            setDigits(digitsArray); 
            setSeconds((prevSeconds) => prevSeconds + 1); 
        }, 1000); 
        return () => clearInterval(interval); 
   }, [seconds] ); 

   return (
    <div className="bg-dark text-warning display-1 align-content-center vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-success p-5 rounded-3" style={{width: "50%"}}>
        <span><HiOutlineClock /></span>
        <p className="fs-1">Tiempo transcurrido:</p>
        <p >{digits[0]}</p>
        <p>{digits[1]}</p>
        <p>{digits[2]}</p>
        <p>{digits[3]}</p>
        </div>
    </div>
   ); 


};

export default Counter; 