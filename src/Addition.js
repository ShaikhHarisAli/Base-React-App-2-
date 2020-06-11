import React from 'react';
import './Addition.css'


function Add({num1,num2}){
    return <div className="Add">
        <h1>Addition of Two Numbers</h1>
        Addition of {num1} and {num2} is : {num1 + num2}
    </div>
}
export default Add