import { Header } from '@/components/header';
import { Footer } from '@/components/sections';
import { Container, Reveal, SectionTitle } from '@/components/ui';

const notes = [
  {
    date: '01.08.26',
    text: 'Взагалі нові відео нічого не набирають. На попередній консультації експерт порадив скрити всі нерелевантні відео. Майже місяць нічого не набираємо.',
    money: {
      type: 'expense',
      amount: '1000₴',
      label: 'Консультація',
    },
  },
  {
    date: '04.08.26',
    text: 'Вчора придумав ідею. Сьогодні запускаю сайт.',
    metric: 'Кількість годин перегляду для партнерки: 3839/4000 (95%)',
  },
];

export default function DiaryPage() {
  return (
    <main>
      <Header />
      <section className="min-h-[70svh] py-24 md:py-36">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Щоденник">Нотатки, цифри і маленькі зсуви вперед.</SectionTitle>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/57">
              Тут я буду залишати короткі записи про шлях: що виходить, що болить, які відео з&apos;явилися,
              куди пішли гроші і що змінюється день за днем.
            </p>
          </Reveal>

          <div className="relative mt-20 max-w-4xl">
            <div className="absolute left-[11px] top-2 h-full w-px bg-gradient-to-b from-[#7ED957]/45 via-black/10 to-transparent" />
            <div className="space-y-14">
              {notes.map((note, index) => (
                <Reveal key={note.date} className="relative pl-11">
                  <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-[#7ED957]/40 bg-white shadow-[0_0_0_8px_rgba(126,217,87,0.08)]" />
                  <article className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[.22em] text-[#58ad3f]">{note.date}</p>
                    <p className="mt-5 text-xl leading-relaxed tracking-[-.025em] text-black/72 md:text-2xl">
                      {note.text}
                    </p>

                    {note.money && (
                      <div className="mt-7 grid max-w-xl grid-cols-[1fr_auto] items-center gap-5 rounded-[1.25rem] border border-[#f0c7c7] bg-[#fff6f5] px-5 py-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[.18em] text-[#b65b55]">Витрата</p>
                          <p className="mt-1 text-sm text-black/50">{note.money.label}</p>
                        </div>
                        <p className="text-2xl font-medium tracking-[-.05em] text-[#9e3f39]">{note.money.amount}</p>
                      </div>
                    )}

                    {note.metric && (
                      <div className="mt-7 max-w-xl rounded-[1.25rem] border border-[#cfeec3] bg-[#f5fff1] px-5 py-4">
                        <p className="text-[11px] uppercase tracking-[.18em] text-[#58ad3f]">Прогрес</p>
                        <p className="mt-2 text-sm font-medium text-black/65">{note.metric}</p>
                      </div>
                    )}

                    {index === notes.length - 1 && (
                      <p className="mt-9 text-xs text-black/35">Дані на головній оновлюються один раз на добу.</p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
