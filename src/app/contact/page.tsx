import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12 ">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            I'm always open to discussing new projects, creative ideas or
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
      </div>
    </div>
  );
}
