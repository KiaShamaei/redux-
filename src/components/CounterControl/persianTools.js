import { addCommas, removeCommas ,getBankNameFromCardNumber } from "persian-tools";
import getBankNameFromCard from '../../functions'
import React, {useState} from 'react';



const Persiantest = () => {
  const [test, setTest] = useState("");

const tetete = getBankNameFromCard(5041721111111111)

  
    return ( <p>persian test view {tetete}</p> );
}
 
export default Persiantest;