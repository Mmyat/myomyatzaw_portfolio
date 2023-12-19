import { useRef } from 'react';
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import email from "../assets/mail.svg";
import telegram from "../assets/telegram.svg";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_h00z8g8', 'template_jn2y1nk', form.current, '9WdP69qN8ZkGq1S5n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setReply("Thanks, I will reply as soon as possible^^")
  };

  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-title font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p className="my-3 text-gray-900 md:w-3/4 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex ">
            <a href="https://www.facebook.com/myo.myat.31542841/" target="_blank" rel="noreferrer">
              <img className="rounded-lg" 
                style={{
                  width: "32px",
                  aspectRatio: "1/1",
                }} src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mmyat-mmyat-92a795182/" target="_blank" rel="noreferrer">
              <img className="ml-4" 
                style={{
                  width: "32px",
                  aspectRatio: "1/1",
                }} src={linkedin} alt="" />
            </a>
            <a
              className="ml-4"
              href="https://github.com/Mmyat"
              target="_blank"
              rel="noreferrer"
            >
              <img
                
                style={{
                  width: "32px",
                  aspectRatio: "1/1",
                }}
                src={github}
                alt=""
              />
            </a>
            <a className="ml-4" href="https://t.me/myo_myat_zaw" target="_blank" rel="noreferrer">
              <img className="text-primary rounded-lg"
                style={{
                  width: "32px",
                  aspectRatio: "1/1",
                }} src={telegram} alt="" />
            </a>
            <a
              className="ml-4"
              href="mailto:mmyathaha@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img style={{
                  width: "32px",
                  aspectRatio: "1/1",
                }} src={email} alt="" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className="mt-16 text-gray-900 text-2xl mb-6">
            Contact me, let's make magic together
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              className="bg-[#fff3ec] py-3 px-3 md:w-3/4 w-full rounded "
            />
            <input
              type="email"
              name="email"
              placeholder="Email:"
              className="bg-[#fff3ec] py-3 px-3 md:w-3/4 w-full rounded my-3"
            />
            <textarea
              name="message"
              id="message"
              cols="54"
              rows="4"
              className="bg-[#fff3ec] py-3 px-3 md:w-3/4 w-full rounded mb-2"
              placeholder="Message:"
            ></textarea>
            <button type="submit" className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-btntext hover:text-white shadow-primary shadow-sm block">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
