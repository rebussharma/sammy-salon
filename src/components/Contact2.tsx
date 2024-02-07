import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from "react";

import '../css/Contact.css';

const Contact: React.FC = () => {
  useEffect(() => emailjs.init("YOUR-PUBLIC-KEY-HERE"), []);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "YOUR-SERVICE-ID-HERE";
    const templateId = "YOUR-TEMPLATE-ID-HERE";
    if (nameRef.current !== null && emailRef.current !== null){
      try {
        setLoading(true);
        await emailjs.send(serviceId, templateId, {
          name: nameRef.current.value,
          recipient: emailRef.current.value
        });
        alert("email successfully sent check inbox");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="">name</label>
          <input ref={nameRef} placeholder="enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="">email</label>
          <input ref={emailRef} type="email" placeholder="enter your email" />
        </div>
        <button className="btn" disabled={loading}>
          subscribe
        </button>
      </form>
    </section>
  );

};
export default Contact