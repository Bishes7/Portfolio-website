"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      console.log("Error sending message", error);
    }
  };
  return (
    <div className="container max-w-7xl mx-auto py-12 ">
      <h1 className="text-4xl font-bold mb-18 text-center">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Email</h3>
                <Link
                  href="mailto:specialbishes9@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  specialbishes9@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Phone</h3>
                <Link
                  href="tel:0451280806"
                  className="text-secondary hover:text-primary"
                >
                  0451280806
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLocationArrow className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Location</h3>
                <p className="text-secondary hover:text-primary">
                  Sydney, Australia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none  placeholder:text-white/50  "
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none  placeholder:text-white/50  "
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none placeholder:text-white/50 "
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary cursor-pointer"
            >
              {status === "loading" ? "Sending" : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-center">
                Message sent successfully
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">
                Failed to send Message. Please try again
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
