import { INPUTFIELDS } from "../constants";
import React, { useState } from 'react';

// Define the type for the form fields
type FieldInput ={
  id: number;
  label: string;
  type: string;
  value: string;
}

const ContactPage = () => {


  const [formData, setFormData] = useState<FieldInput[]>(INPUTFIELDS);

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
  <form onSubmit={handleSubmit} className="contact-form">
    <div className="grid-container">
      {formData.map((field, index) => (
        <div key={field.id} className={field.id === 1 || field.id === 2 ? 'grid-item' : 'full-width'}>
          <label htmlFor={`field-${field.id}`}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={`field-${field.id}`}
              value={field.value}
              onChange={(e) => handleChange(index, e)}
              required
            />
          ) : (
            <input
              type={field.type}
              id={`field-${field.id}`}
              value={field.value}
              onChange={(e) => handleChange(index, e)}
              required
            />
          )}
        </div>
      ))}
    </div>
    <button type="submit">Submit</button>
  </form>
);
}

export default ContactPage