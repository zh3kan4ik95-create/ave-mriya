'use client';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { appPath } from '@/lib/site-path';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <div className={`mx-auto w-full max-w-[1240px] px-6 md:px-10 ${className}`}>{children}</div>; }
export function Button({ children, secondary = false, href = '#' }: { children: React.ReactNode; secondary?: boolean; href?: string }) { return <a href={appPath(href)} className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 ${secondary ? 'border border-black/10 bg-white hover:border-black/25' : 'bg-ink text-white hover:-translate-y-0.5 hover:bg-[#30352e]'}`}>{children}</a>; }
export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: .7, ease: [0.22, 1, .36, 1] }} className={className}>{children}</motion.div>; }
export function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) { return <div>{eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}<h2 className="balance max-w-3xl text-4xl font-medium tracking-[-.055em] md:text-6xl">{children}</h2></div>; }
export function AnimatedCounter({ value }: { value: number }) { const ref = useRef(null); const isInView = useInView(ref, { once: true }); const motionValue = useMotionValue(0); const spring = useSpring(motionValue, { stiffness: 45, damping: 18 }); const display = useTransform(spring, v => Math.round(v).toLocaleString('uk-UA')); useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, motionValue, value]); return <motion.span ref={ref}>{display}</motion.span>; }
export function ProgressBar({ value }: { value: number }) {
  const isEmpty = value === 0;
  return <div className="relative h-3 overflow-hidden rounded-full bg-[#e9eee7]">
    {isEmpty && <motion.div aria-hidden initial={{ x: '-120%', opacity: 0 }} whileInView={{ x: ['-120%', '320%'], opacity: [0, .7, 0] }} viewport={{ once: true }} transition={{ duration: 2.4, delay: .45, ease: 'easeInOut' }} className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-[#7ED957]/60 to-transparent blur-sm" />}
    <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} className="relative h-full rounded-full bg-leaf" />
  </div>;
}
