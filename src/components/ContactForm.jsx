import { useState } from 'react';
import SendSVG from '../assets/images/send.svg?react'

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a0da116e-9f7e-4f5f-8363-b997851ce995");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section id="contact">
        <h2>contact</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder='Name' required/>
          <input type="email" name="email" placeholder='Email' required/>
          <textarea name="message" placeholder='Message' required></textarea>
          <button type="submit"><SendSVG /><p>Send</p></button>
          <p>{result}</p>
        </form>
    </section>
  );
}