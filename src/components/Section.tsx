"use client";
import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      <div className="relative z-10 max-w-3xl text-black">
        <h2 className="text-4xl md:text-5xl font-heading text-maroon mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-black/80 font-body">{content}</p>
      </div>
    </motion.section>
  );
}
