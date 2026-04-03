import { motion } from "framer-motion";
import { Section } from "../components/Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      kicker="About"
      title="Engineering products that hold up under real usage."
      copy="I work at Rdash, a YC W22 startup, where I build systems that need to be fast for users, maintainable for teams, and dependable in production."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="panel flex flex-col gap-6 px-6 py-6 md:flex-row md:items-start md:justify-between md:px-8 md:py-8"
      >
        <p className="max-w-2xl text-sm leading-8 text-zinc-300">
          My work spans frontend architecture, backend systems, and product
          execution. I focus on building high-performance interfaces, scalable
          workflows, and reliable delivery pipelines that directly support
          growth. The common thread is simple: remove friction, improve clarity,
          and ship software that performs well under pressure.
        </p>
        <div className="flex max-w-sm flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Current Focus
          </span>
          <p className="text-sm leading-7 text-zinc-400">
            Performance-sensitive product surfaces, operational tooling, strong
            type safety, and user experiences that stay intuitive even as
            product complexity increases.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
