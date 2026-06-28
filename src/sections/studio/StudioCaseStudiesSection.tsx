import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function StudioCaseStudiesSection() {
  return (
    <section className="bg-navy-light py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-[#7C4DFF] mb-4">
            PROOF OF WORK
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium text-white leading-[1.2]">
            Tools we built for ourselves — and we can build for you
          </h2>
        </SectionWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.slug}
              variants={cardVariants}
              className="bg-navy border border-[rgba(226,232,240,0.08)] rounded-2xl p-8"
            >
              <h3 className="text-xl font-medium text-white mb-4">{study.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-6">{study.description}</p>
              <Link
                to={`/case-studies/${study.slug}`}
                className="text-[#7C4DFF] hover:underline text-sm font-medium"
              >
                Read Case Study &rarr;
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[#7C4DFF] hover:underline text-sm font-medium"
          >
            View all case studies
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
