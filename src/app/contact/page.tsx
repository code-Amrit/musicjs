'use client'

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";


function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submitted',{email, message})
    }

  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950  flex flex-col items-center justify-center antialiased">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
    <div className="max-w-2xl mx-auto p-4 relative z-10">
    <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">

        <input 
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            
        />
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            
          ></textarea>

         <div className="flex gap-10">
         <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
          <Link href={"/contact/phone"}
        className="px-2 py-1 rounded-2xl border flex items-center border-neutral-950 text-neutral-700 bg-white hover:bg-gray-300 hover:opacity-50 transition duration-200"
        >Phone →</Link>
         </div>
      </form>
    </div>
    
  </div>
  )
}

export default Contact
