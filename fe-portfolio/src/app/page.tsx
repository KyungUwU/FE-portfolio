"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-900 text-white p-8">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Hi, I'm Lê Thành Trung
            </h1>
            <p className="max-w-lg text-xl text-zinc-400">
              I craft exceptional digital experiences with code, creativity, and a passion for innovation.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" className="flex items-center gap-2">
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/xirothedev" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-white hover:text-purple-400" />
              </Link>
              <Link href="https://www.linkedin.com/in/xirothedev/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-white hover:text-purple-400" />
              </Link>
              <Link href="mailto:lethanhtrung.trungle@gmail.com">
                <Mail className="h-6 w-6 text-white hover:text-purple-400" />
              </Link>
              <Link href="https://discord.com/users/1216624112139632711" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6 text-white hover:text-purple-400" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-xl overflow-hidden border border-zinc-700">
              <Image
                src="/thumbnail.jpeg"
                alt="XiroTheDev"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-800 text-white">
        <div className="container space-y-8">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p>
            I'm a passionate software engineer specializing in frontend development with React and Next.js.
            Comfortable working with backend technologies like Node.js and NestJS.
          </p>
          <p>
            I enjoy creating intuitive, performant, and accessible digital experiences, contributing to open-source,
            and staying up-to-date with the latest tech.
          </p>

          <Link href="/lethanhtrung-webdeveloper-cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-zinc-900 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with your project cards */}
            <div className="rounded-lg border border-zinc-700 p-6 bg-zinc-800">
              <h3 className="font-bold text-xl mb-2">Project 1</h3>
              <p className="text-zinc-400">Description of project 1</p>
              <Link href="#" className="text-purple-400 mt-2 block">View Repo</Link>
            </div>
            <div className="rounded-lg border border-zinc-700 p-6 bg-zinc-800">
              <h3 className="font-bold text-xl mb-2">Project 2</h3>
              <p className="text-zinc-400">Description of project 2</p>
              <Link href="#" className="text-purple-400 mt-2 block">View Repo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-800 text-white">
        <div className="container space-y-8">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p>Email: lethanhtrung.trungle@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/xirothedev</p>
          <p>GitHub: github.com/xirothedev</p>
        </div>
      </section>
    </>
  );
}
