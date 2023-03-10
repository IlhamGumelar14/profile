import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from 'react-reveal/Fade';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!captcha) {
      toast.warn('Please verify that you are not a robot.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const form = e.target;
    try {
      const response = await emailjs.sendForm(
        'service_2qc93pn',
        'template_8klonnk',
        form,
        'g6Za6QDbwJ9ufQFAt'
      );
      toast.success('Email Sent, Thank you for contacting me!', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(response);
      setSuccess(true);
      // clear form
      form.reset();
    } catch (error) {
      toast.error(error.text, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSuccess(false);
    }
  };
  const onChange = (value) => {
    if (value) {
      console.log(success);
      setCaptcha(value);
    }
  };
  const contacts = [
    {
      id: 1,
      name: 'Email',
      value: 'IlhamGumelar897@gmail.com',
      icon: 'mail-outline',
    },
    {
      id: 2,
      name: 'WhatsApp',
      value: '+62 (821) 8170-1792',
      icon: 'logo-whatsapp',
    },
    {
      id: 3,
      name: 'Phone',
      value: '+62 (821) 8170-1792',
      icon: 'call-outline',
    },
    {
      id: 4,
      name: 'Address',
      value: 'Cibinong, Bogor',
      icon: 'location-outline',
    },
  ];

  return (
    <div className="w-full container mx-auto lg:w-8/12">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <h3 className="uppercase tracking-[0.5em] font-medium">
            Get in touch
          </h3>
          <h1 className="py-4 text-3xl font-bold text-white mb-6">
            Let's build something together.
          </h1>
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row">
          <div className="w-full lg:w-1/2 lg:px-2">
            <div className="w-full">
              <h2 className="font-semibold">Contact Info</h2>
            </div>
            <table className="table-auto w-full mt-7">
              <tbody className="text-gray-200">
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <Fade left>
                      <td className="flex gap-2">
                        <span className="flex items-center text-white">
                          <ion-icon name={contact.icon} />
                        </span>
                        {contact.name}
                      </td>
                    </Fade>
                    <Fade right>
                      <td>{contact.value}</td>
                    </Fade>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full lg:w-1/2 lg:px-2 mt-6 lg:mt-0">
            <div className="w-full">
              <h2 className="font-semibold">Contact Form</h2>
            </div>
            <form onSubmit={onSubmit} className="w-full max-w-lg my-6">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    required
                    className="outline-none w-full py-2 border-b border-gray-400 focus:outline-none focus:border-gray-50 bg-transparent smooth"
                    id="grid-first-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    className="outline-none w-full py-2 border-b border-gray-400 focus:outline-none focus:border-gray-50 bg-transparent smooth"
                    id="grid-first-name"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full mt-4 md:px-0">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="messages"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    className="outline-none w-full py-2 border-b border-gray-400 focus:outline-none focus:border-gray-50 bg-transparent smooth"
                    id="messages"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <div className="w-full mt-4 md:px-0 flex flex-col-reverse md:flex-row gap-2 items-center justify-between">
                  <button
                    type="submit"
                    className="px-5 w-1/4 max-h-12 py-2 border rounded focus:bg-white focus:text-gray-800 transition-all duration-300"
                  >
                    Submit
                  </button>
                  <div className="max-full">
                    <ToastContainer />
                    <ReCAPTCHA
                      className="w-full"
                      sitekey="6Lc4FuskAAAAAFanmdMOdMF4lfkO7xqkKBRtttdU"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
