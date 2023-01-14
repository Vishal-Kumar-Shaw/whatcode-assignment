import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap'
const BootTable = () => {
    const [bills, setBills] = useState({bills:[]});

    useEffect(()=>{
        const fetchBills = async ()=>{
            const {data} = await axios('https://json-server-whatcode-assignment.onrender.com/bills');
            setBills({bills: data})
        }
        fetchBills();
        
    }, [setBills]);

  return (
    
    <div>BootTable</div>
  )
}

export default BootTable;