import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const form = useRef();

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const clearMessages = () => {
    setTimeout(() => {
      setErrMsg("");
      setSuccessMsg("");
    }, 3000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("⚠️ Username is required!");
      clearMessages();
    } else if (phoneNumber === "") {
      setErrMsg("⚠️ Phone number is required!");
      clearMessages();
    } else if (email === "") {
      setErrMsg("⚠️ Please give your Email!");
      clearMessages();
    } else if (!emailValidation(email)) {
      setErrMsg("⚠️ Give a valid Email!");
      clearMessages();
    } else if (subject === "") {
      setErrMsg("⚠️ Please give your Subject!");
      clearMessages();
    } else if (message === "") {
      setErrMsg("⚠️ Message is required!");
      clearMessages();
    } else {
      emailjs
        .sendForm(
          "service_d7jqa9n",
          "template_y893f0j",
          form.current,
          "adC4Tcox4T2omgLR2"
        )
        .then(
          (result) => {
            setSuccessMsg(`✅ Thank you dear ${username}, your message has been sent successfully!`);
            setErrMsg("");
            clearMessages();
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            setErrMsg("❌ Failed to send message, please try again.");
            clearMessages();
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md h-full py-10 border flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              ref={form}
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              <AnimatePresence>
                {errMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="py-3 shadow shadow-red-500 text-center text-red-400 text-base tracking-wide rounded-md bg-red-100"
                  >
                    {errMsg}
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {successMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="py-3 shadow shadow-green-500 text-center text-green-500 text-base tracking-wide rounded-md bg-green-100"
                  >
                    {successMsg}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* form inputs */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm uppercase tracking-wide">Your Name</p>
                  <input
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm uppercase tracking-wide">Phone Number</p>
                  <input
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm uppercase tracking-wide">Email</p>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="contactInput"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm uppercase tracking-wide">Subject</p>
                <input
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="contactInput"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm uppercase tracking-wide">Message</p>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md border rounded-lg text-base tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
