import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';
import { Section } from '../components/Section';

const achievements = [
  {
    icon: Trophy,
    title: 'MathWorks Hackathon Winner',
    description: 'Recognized for solving technical challenges with strong execution and product intuition.',
  },
  {
    icon: Award,
    title: "Hackout'21 Top 10",
    description: 'Placed in the top 10 among competitive hackathon submissions.',
  },
];

export function EducationSection() {
  return (
    <Section
      id="education"
      kicker="Education"
      title="Strong fundamentals, applied with product urgency."
      copy="Academic performance matters when it compounds with execution. My training gave me strong engineering fundamentals, and my work has been about applying them in production."
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="panel flex flex-1 flex-col gap-5 px-6 py-6 md:px-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-indigo-300">
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">NIT Agartala</h3>
              <p className="text-sm text-zinc-400">CGPA: 9.04</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-300">
            Built a strong base in computer science and engineering while consistently performing at
            a high academic level.
          </p>
        </motion.article>

        <div className="flex flex-1 flex-col gap-5">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              className="panel flex flex-col gap-4 px-6 py-6 md:px-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-sky-300">
                  <item.icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm leading-7 text-zinc-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
