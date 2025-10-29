import React from 'react';
import { motion } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats?: Stat[];
  className?: string;
};

const defaultStats: Stat[] = [
  { value: '3+ Hours', label: 'Extra Athletic Training Daily' },
  { value: 'Pro Level', label: 'NBA • NFL • MLB Coaches' },
  { value: '2 Hours', label: 'Daily Academic Completion' },
  { value: 'Top 2%', label: 'National Test Scores' },
];

const StatsBar: React.FC<StatsBarProps> = ({ stats = defaultStats, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 lg:gap-16 max-w-6xl mx-auto ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#004aad] font-poppins">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-[#6b7280] font-poppins">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsBar;
