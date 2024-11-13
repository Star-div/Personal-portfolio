import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/git-hub.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import { GridLoader } from "react-spinners";
import Swal from "sweetalert2";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);

      formData.append("access_key", "06873100-cd8e-4355-bc5b-48c77e608fa9");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully",
          icon: "success",
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.log({ error: "Error sending message" });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="{`mb-16 max-w-7xl mx-auto ${loading ? 'blur-sm pointer-events-none' : ''}`}">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/19NBpNHj4L/"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>

              <a
                href="https://www.instagram.com/itzmaliksaqib/profilecard/?igsh=Ymd2NHM0YWJpdHN5"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/malik-saqib-15ba591a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Star-div"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={github} alt="" className="h-6 w-6" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                name="Name"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="Email"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                name="Message"
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button className=" bg-red-500 hover:bg-red-700 transition duration-150 ease-in-out text-white px-3 py-2 rounded-lg active:duration-300 active:scale-90">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Loader overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
          <GridLoader
            color="#F44336"
            cssOverride={{}}
            loading
            margin={2}
            size={9}
            width={200}
          />
        
        </div>
      )}
    </section>
  );
};

export default Contact;
