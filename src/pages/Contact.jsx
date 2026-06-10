import { useRef, useState, useContext } from 'react';
import { ThemeContext } from '../App';
import emailjs from '@emailjs/browser';
import { 
  FiMail, FiSend, FiGithub, FiLinkedin, FiFacebook, FiPaperclip, 
  FiCheckCircle, FiAlertCircle, FiMessageSquare
} from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const socials = [
    {
      id: 1,
      name: "GitHub",
      username: "@Mmyat",
      icon: <FiGithub />,
      link: "https://github.com/Mmyat",
      color: "hover:bg-slate-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-950",
    },
    {
      id: 2,
      name: "LinkedIn",
      username: "Myo Myat Zaw",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/myo-myatzaw-92a795182/",
      color: "hover:bg-[#0a66c2] hover:text-white",
    },
    {
      id: 3,
      name: "Telegram",
      username: "@myo_myat_zaw",
      icon: <FaTelegramPlane />,
      link: "https://t.me/myo_myat_zaw",
      color: "hover:bg-[#0088cc] hover:text-white",
    },
    {
      id: 4,
      name: "Facebook",
      username: "Myo Myat",
      icon: <FiFacebook />,
      link: "https://www.facebook.com/myo.myat.31542841/",
      color: "hover:bg-[#1877f2] hover:text-white",
    },
    {
      id: 5,
      name: "Email",
      username: "mmyathaha@gmail.com",
      icon: <FiMail />,
      link: "mailto:mmyathaha@gmail.com",
      color: "hover:bg-indigo-600 hover:text-white",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm('service_h00z8g8', 'template_jn2y1nk', form.current, '9WdP69qN8ZkGq1S5n')
      .then((result) => {
        console.log(result.text);
        setStatus("success");
        setTimeout(() => setStatus(""), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      });
      
    e.target.reset();
  };

  return (
    <section id="contact" className="w-full py-4 select-none">
      
      {/* Title */}
      <div className="flex flex-col gap-3 mb-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
          <FiMessageSquare className="text-indigo-600 dark:text-teal-400" />
          <span>Get In Touch</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 dark:bg-teal-400 rounded-full mx-auto md:mx-0"></div>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mt-2">
          Let's collaborate! Feel free to reach out for project opportunities, questions, or just a quick hello.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Social channels */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 text-center lg:text-left">
            Connect With Me
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {socials.map((social) => (
              <a
                href={social.link}
                key={social.id}
                target="_blank"
                rel="noreferrer"
                className={`glass-panel flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-0.5 ${social.color}`}
              >
                <div className="text-2xl p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/30 dark:border-slate-800/30">
                  {social.icon}
                </div>
                <div>
                  <span className="block font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-white">
                    {social.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {social.username}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/50">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
              Send Me A Message
            </h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:focus:ring-teal-400/40 focus:border-indigo-600 dark:focus:border-teal-400 transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:focus:ring-teal-400/40 focus:border-indigo-600 dark:focus:border-teal-400 transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:focus:ring-teal-400/40 focus:border-indigo-600 dark:focus:border-teal-400 transition-all duration-200 text-sm sm:text-base resize-none"
                ></textarea>
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-2xl text-sm font-semibold">
                  <FiCheckCircle className="text-lg" />
                  <span>Your message was sent successfully! I'll reply soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-3 rounded-2xl text-sm font-semibold">
                  <FiAlertCircle className="text-lg" />
                  <span>Failed to send. Please try emailing me directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-teal-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/5 hover:shadow-teal-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-55 disabled:hover:scale-100 disabled:pointer-events-none transition-all duration-300 text-sm sm:text-base`}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
