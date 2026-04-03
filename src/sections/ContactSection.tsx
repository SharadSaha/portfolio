import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { siteConfig } from '../data/portfolio';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.emailLabel,
    href: siteConfig.email,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phoneLabel,
    href: siteConfig.phone,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: siteConfig.linkedinLabel,
    href: siteConfig.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: siteConfig.githubLabel,
    href: siteConfig.github,
  },
];

export function ContactSection() {
  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Open to opportunities and collaborations."
      copy="If you’re hiring for engineering roles or building something ambitious, I’m interested in conversations where product quality and execution bar both matter."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="panel flex flex-col gap-8 overflow-hidden px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-8"
      >
        <div className="flex max-w-xl flex-col gap-4">
          <h3 className="text-2xl font-semibold text-white">Sharad Saha</h3>
          <p className="text-sm leading-7 text-zinc-400">
            Available for high-impact software engineering roles, startup opportunities, and
            product-focused collaborations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={siteConfig.email}>Start a Conversation</Button>
            <Button href={siteConfig.resume} variant="secondary">
              Resume
            </Button>
          </div>
        </div>

        <div className="flex w-full max-w-xl flex-col gap-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-indigo-300">
                  <item.icon size={18} />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/40">{item.label}</span>
                  <span className="text-sm text-zinc-200">{item.value}</span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-500" />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
