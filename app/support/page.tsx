import { Header } from '@/components/header';
import { Footer } from '@/components/sections';
import { Container, Reveal, SectionTitle } from '@/components/ui';

export default function SupportPage() {
  return (
    <main>
      <Header />
      <section className="py-24 md:py-36">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionTitle eyebrow="Добровільна підтримка">Дякую, що даєте мрії більше часу.</SectionTitle>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/58">
              Будь-який внесок наближає наступне відео.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <Reveal>
              <a
                href="https://next.privat24.ua/send/4mkqt"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1.5rem] border border-black/[.07] p-8 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="eyebrow">Privat</p>
                <h2 className="mt-12 text-3xl font-medium tracking-[-.05em]">Конверт</h2>
                <p className="mt-4 text-sm leading-relaxed text-black/55">Відкрити конверт у Privat24.</p>
              </a>
            </Reveal>

            <Reveal>
              <a
                href="https://mriya.pay.whitepay.com/donation"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1.5rem] border border-black/[.07] p-8 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="eyebrow">Crypto</p>
                <h2 className="mt-12 text-3xl font-medium tracking-[-.05em]">Криптодонат</h2>
                <p className="mt-4 text-sm leading-relaxed text-black/55">
                  Відкрити сторінку криптопідтримки.
                </p>
              </a>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-12 rounded-[1.5rem] bg-mist p-8 md:p-10">
              <h2 className="text-2xl font-medium tracking-[-.045em]">Залиште свій слід.</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-black/58">
                Додайте у коментарі посилання на себе або кілька своїх слів. Після оновлення даних вони можуть
                з&apos;явитися на дошці «Перші люди проєкту».
              </p>
              <p className="mt-6 text-xs text-black/38">Дошка оновлюється один раз на добу.</p>
            </div>
          </Reveal>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
