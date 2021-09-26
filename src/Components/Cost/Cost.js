import React from 'react';
import './Cost.css'


const Cost = (props) => {
    
const {member} =props;
const total = member.reduce((accumulation,memberInfo)=> accumulation + memberInfo.salary,0)
   
    return (
        <div className="costAlignment">
            <h1>Team added : {member.length}</h1>
            <h1>Total Cost : ${total}</h1>
            <ol>
            {
                member.map(addMember => <li className="list">{addMember.name} <img className="costimgWidth" src={addMember.img} alt="" /></li>)
            }
            </ol>
        </div>
    );
};

export default Cost;