import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      kicker="Projects"
      title="Product-minded builds with clear technical leverage."
      copy="These projects show how I think about product problems, system design, and shipping features that create real user value instead of surface-level demos."
    >
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="panel group relative overflow-hidden px-6 py-6 md:px-8 md:py-8"
          >
            <div className="absolute inset-0 bg-card-glow opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex max-w-2xl flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
                      {project.period}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 text-sm leading-7 text-zinc-300">
                    <p>
                      <span className="font-semibold text-white">Problem:</span> {project.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Solution:</span> {project.solution}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Impact:</span> {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-3">
                  <Button href={project.github} target="_blank" rel="noreferrer" variant="secondary">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  {project.live ? (
                    <Button href={project.live} target="_blank" rel="noreferrer">
                      Live
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
