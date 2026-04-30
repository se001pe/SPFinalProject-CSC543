'use client';
import React, { useState } from "react";

const Contact: React.FC = () => {

        const [form,setForm] = useState({first_name: "", last_name: "", city: "", email: "", message: "" });
        const [status,setStatus] = useState("");

        async function handleSubmit (e: React.FormEvent) {
            e.preventDefault();
            setStatus("Sending...");
            
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify (form),
        });

        if (res.ok) {
            setStatus("Message sent!");
            setForm({first_name: "", last_name: "", city: "", email: "", message: ""});
        }
        else {
            setStatus("Something went wrong");
        }
    };

    return ( 
        <div className = "flex flex-row">
        <div className = "flex flex-row w-full text-center">
            <h1 className = "text-4xl font-bold">Contact Us Form</h1>
        </div>
        <div className = "flex flex-col w-full text-center"></div>
        <form onSubmit = {handleSubmit} className="space-y=4">
            <input
                className = "w-64 p-2 border rounded"
                placeholder = "First Name"
                value = {form.first_name}
                onChange = {(e) => setForm({ ...form, first_name: e.target.value})}
                required
             />
             <input
                className = "w-64 p-2 border rounded"
                placeholder = "Last Name"
                value = {form.last_name}
                onChange = {(e) => setForm({ ...form, last_name: e.target.value})}
                required
             /> 
             <input
                className = "w-64 p-2 border rounded"
                placeholder = "Your Email"
                type = "email"
                value = {form.email}
                onChange = {(e) => setForm({ ...form, email: e.target.value})}
                required
             />
             <input
                className = "w-64 p-2 border rounded"
                placeholder = "Your City"
                type = "city"
                value = {form.city}
                onChange = {(e) => setForm({ ...form, city: e.target.value})}
                required
            />
             <textarea 
                className = "w-full p-2 border rounded"
                placeholder = "Your Message"
                rows = {5}
                value = {form.message}
                onChange = {(e) => setForm({ ...form, message: e.target.value})}
                required
             />

           <button 
                type = "submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
          {status && <p className = "mt-4">{status}</p>}
        </div>
    );
};
export default Contact;