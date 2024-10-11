import { INPUTFIELDS } from "../constants";
import React, { useState } from 'react';
import { HeadingText } from "../elements/HeadingText";


// Define the type for the form fields
type FieldInput ={
  id: number;
  label: string;
  type: string;
  value: string;
}

const ContactPage = () => {

const [formData, setFormData] = useState<FieldInput[]>(INPUTFIELDS);


const MAINTXT ="LET'S WORK"
const SUBTEXT = "TOGETHER"

 // Handle input change
 const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { value } = e.target;
  const updatedFields = [...formData];
  updatedFields[index].value = value;
  setFormData(updatedFields);
};

// Handle form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Prepare data to submit
  const dataToSubmit = formData.reduce((acc: Record<number, string>, field: FieldInput) => {
    acc[field.id] = field.value;
    return acc;
  }, {});
  console.log(dataToSubmit);
};


return (
  <div style={{marginTop:"120px"}} className="contact-parent">
    <HeadingText mainText={MAINTXT} subText={SUBTEXT}/>
     <form onSubmit={handleSubmit} className="contact-form">
       <div className="input-phase1">
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="Your @email.com"/>
       </div> 
       <div className="input-phase2">
          <input type="text"/>
          <textarea id="subject" name="subject" placeholder="Message.." style={{height:"120px"}}></textarea>
       </div> 
      <button type="submit">Submit</button>
    </form>
  </div>
 
);
}

export default ContactPage