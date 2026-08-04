import { ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections';
import { Container, Reveal, SectionTitle } from '@/components/ui';
import { appPath } from '@/lib/site-path';

const offers = [
  { title: 'LinkedIn', text: 'Побачити себе та свій профіль ясніше.', href: 'https://firstchoice.qzz.io/services/linkedin-visibility-audit/' },
  { title: 'Маркетинг', text: 'Стратегія і напрямок для наступних кроків.', href: 'https://firstchoice.qzz.io/services/' },
  { title: 'Цифрові продукти', text: 'Готові матеріали, які допомагають рухатися.', href: 'https://firstchoice.qzz.io/free/#premium-products' },
  { title: 'Курс по LinkedIn', text: 'Готові інструменти + підтримка, щоб стати відомим.', href: 'https://firstchoice.qzz.io/frame/' },
  { title: 'Reels', text: 'Як робити контент на мільйони?', href: 'https://deepviews.qd.je/' },
  { title: 'Підтримати шлях', text: 'Добровільний внесок, який звільняє час для нового відео.', href: '/support', internal: true },
];

export default function OffersPage() { return <main><Header /><section className="py-24 md:py-36"><Container><Reveal><SectionTitle eyebrow="Мої послуги для вас">Способи бути поруч.</SectionTitle><p className="mt-6 max-w-xl text-lg leading-relaxed text-black/55">100% звідси прямують на мрію.</p></Reveal><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{offers.map((offer, i) => <Reveal key={offer.title}><a href={offer.internal ? appPath(offer.href) : offer.href} target={offer.internal ? undefined : '_blank'} rel={offer.internal ? undefined : 'noreferrer'} className="group flex min-h-64 flex-col rounded-[1.5rem] border border-black/[.07] p-7 transition hover:-translate-y-1 hover:shadow-soft"><span className="text-sm text-black/35">0{i + 1}</span><h2 className="mt-auto text-3xl font-medium tracking-[-.055em]">{offer.title}</h2><p className="mt-3 max-w-sm text-sm leading-relaxed text-black/55">{offer.text}</p><ArrowUpRight className="mt-7 text-black/45 transition group-hover:translate-x-1 group-hover:-translate-y-1" size={19} /></a></Reveal>)}</div></Container></section><Footer /></main> }
