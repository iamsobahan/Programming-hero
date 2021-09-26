import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cost from '../Cost/Cost';
import './Team.css'

const Team = () => {
    const [team,setteam] = useState([])
    const [member,setmember] =useState([])

    useEffect(()=>{
        fetch('./employee.json')
        .then(res => res.json())
        .then(data => setteam(data))
    },[])

    const eventHandler = (memberInfo)=>{
       const totalMember = [...member ,memberInfo]
       setmember(totalMember)

    }
    return (
        <div className="grid-cart-cost">
        <div className="grid-team">
        {
         team.map((memberInfo)=> <Cart totalMember={eventHandler} key={memberInfo.name} member={memberInfo}></Cart>)
        }
        </div>
        <Cost member={member}></Cost>
        
    </div>
    );
};

export default Team;