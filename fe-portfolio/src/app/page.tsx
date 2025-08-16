// src/app/page.tsx
"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Portfolio() {
  const projects = [
    { title: "Project One", description: "A cool project", link: "#" },
    { title: "Project Two", description: "Another project", link: "#" },
    { title: "Project Three", description: "Something awesome", link: "#" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col items-center p-8 sm:p-20">
          {/* Header */}
          <header className="flex flex-col items-center gap-4 mb-16">
            <Image
              src="/next.svg"
              alt="Portfolio Logo"
              width={180}
              height={38}
              className="dark:invert"
            />
            <h1 className="text-3xl font-bold">Ho Ngoc An Portfolio</h1>
            <p className="text-center text-muted-foreground max-w-xl">
              Fullstack Developer | Next.js + React + Tailwind | Building modern web apps
            </p>
          </header>

          {/* Projects Section */}
          <main className="w-full max-w-4xl grid gap-8">
            {projects.map((p, idx) => (
              <a
                key={idx}
                href={p.link}
                className="group border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold group-hover:text-foreground">
                  {p.title}
                </h2>
                <p className="text-muted-foreground mt-2">{p.description}</p>
              </a>
            ))}
          </main>

          {/* Footer */}
          <footer className="mt-auto flex flex-col items-center gap-4 pt-16">
            <p className="text-sm text-muted-foreground">&copy; 2025 Ho Ngoc An</p>
            <div className="flex gap-4">
              <a href="https://github.com/KyungUwU" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ho-ngoc-an" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:hngocan.forwork@gmail.com">Email</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
