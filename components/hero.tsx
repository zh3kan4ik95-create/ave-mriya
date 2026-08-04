'use client';
import { motion } from 'framer-motion';
import { Container, Button } from './ui';
export function Hero({ goal, raised }: { goal: number; raised: number }) {
  const percent = Math.round((raised / goal) * 100);
  return <section id="top" className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden py-24 text-center">
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-[#fcfdfb]">
      <motion.div animate={{ x: ['-7%', '6%', '-7%'], y: ['-3%', '5%', '-3%'], scale: [1, 1.09, 1] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-[20%] top-[5%] h-[52vw] w-[52vw] rounded-full bg-[#dff7d8]/35 blur-[105px]" />
      <motion.div animate={{ x: ['8%', '-6%', '8%'], y: ['6%', '-3%', '6%'], scale: [1.06, 1, 1.06] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-[18%] bottom-[-22%] h-[58vw] w-[58vw] rounded-full bg-[#ecf7df]/45 blur-[120px]" />
      <div className="absolute inset-0 bg-white/55" />
    </div>
    <Container className="relative z-10">
      <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .7 }} className="relative z-10 -mt-8 mb-12 text-[10px] font-bold uppercase tracking-[.2em] text-[#63b946] md:mt-0 md:mb-10">Публічний шлях до мрії</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, .36, 1] }}>
        <div className="relative mx-auto grid w-fit place-items-center">
          <motion.div aria-hidden animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute h-[clamp(15rem,37vw,31rem)] w-[clamp(15rem,37vw,31rem)] rounded-full border border-[#7ED957]/20" />
          <div className="display relative z-10 text-[clamp(9rem,27vw,20rem)] font-medium">{percent}%</div>
        </div>
        <p className="mt-8 text-sm text-black/48">зібрано цього місяця</p>
        <p className="mt-2 text-lg tracking-[-.03em]"><b>{raised.toLocaleString('uk-UA')} грн</b> із {goal.toLocaleString('uk-UA')} грн</p>
        <p className="balance mx-auto mt-12 max-w-[530px] text-lg leading-relaxed text-black/65">Кожен внесок - ще один день, який я можу присвятити своїй мрії:<br /><motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: .8 }} className="font-medium text-[#438d31]">створювати відео на YouTube.</motion.span></p>
        <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7"><Button href="#support">Стати частиною проєкту</Button><a href="#story" className="group inline-flex items-center gap-1 text-sm font-medium text-black/65 transition hover:text-black"><span className="border-b border-transparent transition group-hover:border-black/45">Дізнатися історію</span><motion.span className="inline-block" whileHover={{ x: 3 }}>→</motion.span></a></div>
      </motion.div>
    </Container>
    <motion.a href="#story" animate={{ y: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] uppercase tracking-[.16em] text-black/50"><span className="text-base leading-none">↓</span><span>Прокрути вниз</span></motion.a>
  </section>
}
