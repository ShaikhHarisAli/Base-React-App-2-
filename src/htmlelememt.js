import React from 'react';
import './htmlelement.css';



function Html() {
  return <div className="htmlelement">
    <ol>
      <li>Heading : The heading tag is used in HTML to define headings of a page</li>
      <li>Description list — Used to create a list of terms and their descriptions.</li>
      <li>Ordered list — Used to create a list of related items, in a specific order.</li>
      <li>Unordered list — Used to create a list of related items, in no particular order.</li>
      <li>Form tag : form tag is uesd to create form </li>
    </ol>
    <p>
    HTML browsers ignore white space in general,
    it allows us to have clearly formatted source code, without affecting the output
    </p>
    <h1>Close Tag :</h1>
    <p>
      Not closing HTML tags just makes things more confusing for you, will cause pages to render inconsistently from expectations and between browsers, 
      and is just generally a bad idea
    </p>
  </div>
    
}

export default Html;