'use client';

import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Image from 'next/image';
import { Github, Linkedin, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-[#297373]" />

      {/* Floating orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="orb orb-slow -top-32 right-[-10%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 65%)' }}
        />
        <div
          className="orb -bottom-40 left-[-10%] h-[520px] w-[520px]"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%)' }}
        />
        <div
          className="orb orb-slow top-[10%] left-[20%] h-[280px] w-[280px]"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 68%)' }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-4 sm:px-8 pt-28 pb-20">
          <div className="max-w-5xl mx-auto">

            {/* Hero grid */}
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] mb-20">

              {/* Left: text + buttons + chips */}
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <motion.p variants={itemVariants} className="eyebrow">
                  Computer Science · Boston University
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                >
                  Labeeb Alam
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="max-w-xl text-lg text-white/70 md:text-xl"
                >
                  Full-stack developer with experience in mobile apps, distributed systems, and AI tooling.
                  I build scalable solutions that are fast, reliable, and human.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-3"
                >
                  <motion.a
                    href="/assets/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-btn animated-btn-primary"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FileText size={15} />
                    <span>Resume / CV</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/L-alam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-btn animated-btn-secondary"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/labeeb-alam-7baa3b277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-btn animated-btn-secondary"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/schedule" className="animated-btn animated-btn-secondary">
                      <Calendar size={15} />
                      <span>Schedule</span>
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                  <span className="chip">Full-Stack</span>
                  <span className="chip chip-accent">Mobile + AI</span>
                  <span className="chip chip-gold">Distributed Systems</span>
                </motion.div>
              </motion.div>

              {/* Right: profile photo card */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              >
                <div className="relative flex items-center justify-center">
                {/* circular image only */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile.png"
                    alt="Labeeb Alam"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    style={{ transform: "scale(1.3) translate(0, 20px)" }}
                  />
                </div>
              </div>
              </motion.div>
            </div>

            {/* About Me */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white/70 mb-4 inline-block border-b-2 border-white/30 pb-2">
                About Me
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl">
                Hey, I&apos;m Labeeb! I&apos;m a computer science student at Boston University with experience
                across full-stack development, mobile applications, and distributed systems. I&apos;ve had the
                opportunity to work at Hyundai Autoever America optimizing support systems for connected
                vehicles, and with Senator Ed Markey&apos;s office analyzing federal budget allocations.
                I&apos;m passionate about building scalable solutions for mobile games, distributed computing
                systems, solving complex problems and creating impactful solutions.
              </p>
            </motion.div>

            {/* 3-column cards */}
            <motion.div
              className="grid gap-5 md:grid-cols-3 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              {[
                {
                  title: 'Full-stack development',
                  text: 'End-to-end products spanning web, mobile, and backend — built for scale.',
                },
                {
                  title: 'Distributed systems',
                  text: 'From connected vehicles to cloud infrastructure, designed to scale.',
                },
                {
                  title: 'AI tooling',
                  text: 'Integrating AI meaningfully into products that solve real problems.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="surface-card-soft p-6"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Portfolio link */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/portfolio"
                className="text-white text-lg font-medium hover:text-white/70 transition-colors duration-300"
              >
                Portfolio &gt;
              </Link>
            </motion.div>

          </div>
        </main>
      </div>
    </div>
  );
}
