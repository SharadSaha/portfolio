import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';
import { Section } from '../components/Section';
import { skillGroups } from '../data/portfolio';

export function SkillsSection() {
  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Full-stack depth with a frontend edge."
      copy="I’m strongest where product polish, engineering rigor, and speed of execution need to coexist."
    >
      <div className="flex flex-col gap-5">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
            className="panel flex flex-col gap-5 px-6 py-6 md:flex-row md:items-start md:justify-between md:px-8"
          >
            <div className="md:w-56">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-1 flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
