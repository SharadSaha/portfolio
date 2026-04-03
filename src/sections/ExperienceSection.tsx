import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Section } from '../components/Section';
import { experiences } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      kicker="Experience"
      title="Built in startup pace, grounded in engineering discipline."
      copy="I have worked across full-stack product teams where execution speed matters, but reliability and user experience still define quality."
    >
      <div className="flex flex-col gap-5">
        {experiences.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="panel flex flex-col gap-6 px-6 py-6 transition duration-300 hover:border-white/15 hover:bg-white/[0.05] md:px-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-indigo-300">
                    <TrendingUp size={18} />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                    <p className="text-sm text-zinc-400">{item.role}</p>
                  </div>
                </div>
              </div>
              <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300">
                {item.duration}
              </span>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-zinc-400">{item.summary}</p>

            <div className="flex flex-col gap-3">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400" />
                  <p className="text-sm leading-7 text-zinc-300">{bullet}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
