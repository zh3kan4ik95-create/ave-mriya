'use client';

import { Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { appPath } from '@/lib/site-path';
import { AnimatedCounter, Button, Container, ProgressBar, Reveal, SectionTitle } from './ui';

type Supporter = {
  name: string;
  amount: number;
  source?: string;
  color: string;
};

type Data = {
  goal: number;
  raised: number;
  story: { title: string; paragraphs: string[]; image: string };
  services: string[];
  products: string;
  supporters: Supporter[];
  timeline: { title: string; date?: string; current?: boolean }[];
  video: { url: string; title: string };
};

export function StorySection({ story }: Pick<Data, 'story'>) {
  return (
    <section id="story" className="py-28 md:py-44">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionTitle eyebrow="Історія">{story.title}</SectionTitle>
            <div className="mt-10 max-w-xl space-y-5 text-[17px] leading-relaxed text-black/62">
              {story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-9">
              <Button secondary href="/story">Читати повністю</Button>
            </div>
          </Reveal>

          <Reveal className="relative h-[470px] overflow-hidden rounded-[2rem] bg-mist shadow-[0_30px_90px_rgba(35,54,29,0.12)] md:h-[610px]">
            <img
              src={appPath(story.image)}
              className="absolute inset-0 h-full w-full object-cover object-center"
              alt="Фото автора проєкту Ave Mriya"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f170d]/24 via-transparent to-white/10" />
            <div className="absolute inset-0 bg-[#7ED957]/10 mix-blend-soft-light" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function GoalSection({ goal, raised }: Pick<Data, 'goal' | 'raised'>) {
  const items = ['Зняти 4 нових відео', 'Оплатити монтаж', 'Виділити 10 днів для роботи над каналом'];
  const progress = goal ? (raised / goal) * 100 : 0;

  return (
    <section className="bg-[#f8faf7] py-28 md:py-40">
      <Container>
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="eyebrow mb-7">Ціль на цей місяць</p>
              <div className="display text-7xl font-medium md:text-9xl">
                <AnimatedCounter value={goal} /> <span className="text-3xl tracking-[-.06em] md:text-5xl">грн</span>
              </div>
              <div className="mt-10">
                <ProgressBar value={progress} />
                <div className="mt-4 flex justify-between text-sm text-black/50">
                  <span><AnimatedCounter value={raised} /> грн</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-7 text-lg font-medium">Завдяки цьому вдасться</p>
              <ul className="space-y-5">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-black/65">
                    <Check size={19} className="mt-0.5 shrink-0 text-[#54ae38]" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function SupportCards({ services, products }: Pick<Data, 'services' | 'products'>) {
  const cards = [
    { number: '1', title: 'Замовити роботу', text: services.join(' · '), button: 'Детальніше' },
    { number: '2', title: 'Купити цифровий продукт', text: products, button: 'Переглянути' },
    {
      number: '3',
      title: 'Стати частиною проєкту та потрапити на дошку',
      text: 'Будь-який внесок наближає наступну історію.',
      button: 'Підтримати',
    },
  ];

  return (
    <section id="support" className="py-28 md:py-44">
      <Container>
        <Reveal>
          <a href={appPath('/offers')} className="block w-fit">
            <SectionTitle eyebrow="Обрати свій спосіб">Бути поруч - це теж дія.</SectionTitle>
          </a>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {cards.map(card => (
            <motion.a
              whileHover={{ y: -6 }}
              href={appPath(card.number === '3' ? '/support' : '/offers')}
              key={card.number}
              className="flex min-h-[310px] flex-col rounded-[1.5rem] border border-black/[.07] p-7 transition-shadow hover:shadow-soft"
            >
              <span className="text-sm text-black/35">0{card.number}</span>
              <h3 className="mt-12 max-w-[260px] text-2xl font-medium tracking-[-.05em]">{card.title}</h3>
              <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-black/55">{card.text}</p>
              <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold">
                {card.button}
                <ArrowUpRight size={16} />
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FloatingNotifications({ supporters }: { supporters: Supporter[] }) {
  const [supporter, setSupporter] = useState<Supporter | null>(null);

  useEffect(() => {
    if (!supporters.length) return;

    const show = () => {
      const nextSupporter = supporters[Math.floor(Math.random() * supporters.length)];
      setSupporter(nextSupporter);
      setTimeout(() => setSupporter(null), 4500);
    };

    const starter = setTimeout(show, 5000);
    const loop = setInterval(show, 28000);

    return () => {
      clearTimeout(starter);
      clearInterval(loop);
    };
  }, [supporters]);

  return (
    <AnimatePresence>
      {supporter && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: .97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-2xl border border-black/[.07] bg-white px-5 py-4 shadow-soft"
        >
          <span
            style={{ backgroundColor: supporter.color }}
            className="grid h-8 w-8 place-items-center rounded-full text-xs font-semibold text-[#3f7f31]"
          >
            {supporter.name}
          </span>
          <div className="text-sm">
            <p>+{supporter.amount} грн {supporter.source ?? 'на підтримку'}</p>
            <p className="mt-0.5 text-xs text-[#59af42]">Новий учасник проєкту</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SupportersBoard({ supporters }: Pick<Data, 'supporters'>) {
  return (
    <section className="bg-[#fbfcfa] py-28 md:py-40">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="Дошка пошани">Перші люди проєкту</SectionTitle>
          <p className="mt-5 text-black/55">Ті, хто обрав бути біля початку.</p>
        </Reveal>

        {supporters.length ? (
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {supporters.map(s => (
              <Reveal key={s.name}>
                <article className="min-h-[170px] rounded-2xl border border-black/[.06] bg-white p-4 shadow-[0_18px_50px_rgba(35,54,29,0.04)]">
                  <div
                    style={{ backgroundColor: s.color }}
                    className="grid h-12 w-12 place-items-center rounded-full text-sm font-semibold text-[#3f7f31]"
                  >
                    {s.name}
                  </div>
                  <p className="mt-6 text-sm font-medium">+{s.amount} грн</p>
                  {s.source && <p className="mt-1 text-xs text-black/45">{s.source}</p>}
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-14 text-sm text-black/35">Тут з&apos;являться імена тих, хто підтримає шлях.</p>
        )}

        <p className="mt-8 text-xs text-black/35">Дані оновлюються один раз на добу.</p>
      </Container>
      <FloatingNotifications supporters={supporters} />
    </section>
  );
}

export function Timeline({ timeline }: Pick<Data, 'timeline'>) {
  return (
    <section className="overflow-hidden py-28 md:py-44">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="Шлях">Рухаємося далі.</SectionTitle>
        </Reveal>

        <div className="mt-16 flex min-w-max gap-0">
          {timeline.map(item => (
            <Reveal key={item.title} className="w-52 md:w-64">
              <div className="flex items-center">
                <span className={`h-3 w-3 rounded-full ${item.current ? 'bg-leaf ring-8 ring-mist' : 'bg-black/15'}`} />
                <span className="h-px flex-1 bg-black/10" />
              </div>
              <p className={`mt-6 max-w-40 text-sm leading-snug ${item.current ? 'font-semibold' : 'text-black/52'}`}>
                {item.title}
              </p>
              {item.date && <p className="mt-2 text-xs text-[#58ad3f]">{item.date}</p>}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LatestVideo({ video }: Pick<Data, 'video'>) {
  return (
    <section className="pb-28 md:pb-44">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="Щоденник">Останнє відео</SectionTitle>
        </Reveal>
        <Reveal className="mt-14 overflow-hidden rounded-[1.5rem] bg-[#141714] shadow-soft">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/[.07] py-12">
      <Container className="flex flex-col justify-between gap-9 md:flex-row md:items-end">
        <div>
          <a href={appPath('/')} className="flex items-center gap-2 text-lg font-bold tracking-[-.06em]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-mist text-sm">🗽</span>
            Ave Mriya
          </a>
          <p className="mt-1 text-[10px] uppercase tracking-[.16em] text-black/40">Road to the Dream</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-black/50">
          <a href={appPath('/story')}>Історія</a>
          <a href={appPath('/diary')}>Щоденник</a>
          <a href={appPath('/offers')}>Послуги</a>
          <a href={appPath('/support')}>Підтримати</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@grebinenko/"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="text-black/45 transition hover:text-[#e52d27]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
          </a>
          <p className="text-xs text-black/35">© 2026 Ave Mriya</p>
        </div>
      </Container>
    </footer>
  );
}
