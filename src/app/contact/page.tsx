"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const text: string = "Merhaba...";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);

    if (form.current) {
      const userEmail = form.current["user_email"].value;

      if (!userEmail) {
        toast.error("Lütfen geçerli bir mail adresi girin!");
        return;
      }

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          (result: EmailJSResponseStatus) => {
            setSuccess(true);
            form.current!.reset();
            toast.success("Mailiniz başarıyla gönderildi!");
          },
          (error) => {
            setError(true);
            toast.error("Bir şeyler ters gitti!");
          }
        );
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TextContainer */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div style={{ display: "flex", marginTop: "200px" }}>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* FormContainer */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 mt-3"
        >
          <span>Sevgili BoluWay Ailesi,</span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-sm"
            name="user_message"
            placeholder="Deneyim,Öneri,Şikayet... "
          />
          <span>Mail Adresi:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Saygılarımla...</span>
          <button className="bg-green-400 rounded font-semibold text-gray-600 p-4">
            Gönder
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Mesajınız başarıyla gönderildi!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Bir şeyler ters gitti!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
