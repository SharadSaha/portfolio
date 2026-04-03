import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { siteConfig, stats } from '../data/portfolio';
import { Button } from '../components/Button';

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative overflow-hidden pt-16 md:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-hero-radial" />

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex max-w-2xl flex-1 flex-col gap-7"
        >
          <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300">
            SDE at Rdash, YC W22 startup
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Sharad Saha
            </h1>
            <p className="text-lg font-medium text-white/80 md:text-xl">
              Software Engineer | Full Stack Developer
            </p>
            <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Building scalable, high-performance applications with React, TypeScript, and
              Node.js.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href={siteConfig.resume} variant="secondary">
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#contact" variant="ghost" className="justify-start px-0 sm:px-5">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
            {stats.map((stat) => (
              <div key={stat.label} className="panel flex min-w-[180px] flex-1 flex-col gap-1 px-5 py-4">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-zinc-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-sky-500/20 blur-3xl md:h-96 md:w-96" />
          <div className="panel relative flex w-full max-w-[420px] flex-col items-center gap-6 overflow-hidden px-6 py-8">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/30 blur-2xl" />
              <img
                src={siteConfig.profileImage}
                alt="Portrait placeholder for Sharad Saha"
                loading="eager"
                className="relative h-60 w-60 rounded-full border border-white/10 object-cover shadow-soft md:h-72 md:w-72"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                React, TypeScript, Node.js
              </span>
              <p className="max-w-sm text-sm leading-7 text-zinc-400">
                Shipping performant product experiences that convert quickly, scale cleanly, and
                stay reliable in production.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
