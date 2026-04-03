import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id?: string;
  kicker: string;
  title: string;
  copy?: string;
  className?: string;
}>;

export function Section({ id, kicker, title, copy, className, children }: SectionProps) {
  return (
    <section id={id} className={`section-shell section-padding ${className ?? ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex flex-col gap-4"
      >
        <span className="section-kicker">{kicker}</span>
        <h2 className="section-title">{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </motion.div>
      <div className="mt-10 flex flex-col gap-6">{children}</div>
    </section>
  );
}
