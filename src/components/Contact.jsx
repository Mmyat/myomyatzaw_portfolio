import { useRef,useContext } from 'react';
import { ThemeContext } from '../App'
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import email from "../assets/mail.svg";
import telegram from "../assets/telegram.svg";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const social = [
    {
        icon: facebook,
        link: "https://www.facebook.com/myo.myat.31542841/",
        title: "facebook",
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/in/mmyat-mmyat-92a795182/",
        title: "facebook",
    },
    {
        icon: github,
        link: "https://github.com/Mmyat",
        title: "github",
    },
    {
      icon: email,
      link: "mailto:mmyathaha@gmail.com",
      title: "email",
    },
]
  const sendEmail = (e) => {
    e.preventDefault()
    // if (form.current)
    console.log(form.current.name);
    emailjs.sendForm('service_h00z8g8', 'template_jn2y1nk', form.current, '9WdP69qN8ZkGq1S5n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      // setReply("Thanks, I will reply as soon as possible^^")
  };
  const {theme} = useContext(ThemeContext);
  return (
    <div className="md:px-10 px-7 my-10 py-2" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className={`${theme === "light" ? "text-primary" : "text-white"} font-semibold text-3xl mt-16`}>
            Connect with me:
          </h1>
          <p className={`${theme === "light" ? "text-gray-900" : "text-white"} my-3 md:w-3/4 leading-[2]`}>
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex ">
            {
            social.map(social =>
              <a href={social.link} target="_blank" rel="noreferrer">
              <img className="rounded-lg ml-4 hover:scale-125" 
                style={{
                  width: "32px",
                  aspectRatio: "1/1",
                }} src={social.icon} alt="" />
              </a>)
            }
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className={`${theme === "light" ? "text-gray-900" : "text-white"} mt-16 text-2xl mb-6`}>
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
            <button type="submit" className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-btntext hover:text-white shadow-sm block -2 rounded shadow-lg transform transition transition hover:scale-90">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
