'use client';

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast"; // ✅ for notification

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Divyaravi@22",         // ✅ Replace with your actual service ID
        "template_divya",       // ✅ Replace with your template ID
        form.current!,
        "nT2HpUziVUE-5alrC"      // ✅ Replace with your public key
      )
      .then(
        () => {
          setSent(true);
          toast.success("✅ Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("divyait2004@gmail.com");
    toast.success("📋 Email copied to clipboard!");
  };

  return (
    <section className="section">
      <h1 className="text-4xl font-bold mb-8 text-center">📞 Contact Me</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="card space-y-4 max-w-xl mx-auto"
      >
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message..."
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          />
        </div>
        <button type="submit" className="button-primary w-full">
          Send Message
        </button>

        {sent && (
          <p className="text-green-500 font-medium mt-2 text-center">
            ✅ Your message was sent successfully!
          </p>
        )}
      </form>

      <div className="mt-12 flex justify-center gap-6 text-2xl">
        {/* Email Icon (Copy) */}
        <div
          onClick={copyEmail}
          className="cursor-pointer text-blue-600 dark:text-blue-400 hover:scale-110 transition"
          title="Click to copy email"
        >
          <FaEnvelope />
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/Divya22022004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:scale-110 transition"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/divyar2004/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-200 hover:scale-110 transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
