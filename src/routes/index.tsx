import { createFileRoute } from "@tanstack/react-router";
import bottleAsset from "@/assets/bottle.png.asset.json";
import tubeAsset from "@/assets/tube.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Orion — Midnight Oud & Bergamot Eau de Parfum" },
      {
        name: "description",
        content:
          "Sarkar Orion is a midnight blue eau de parfum: bright bergamot, smoked oud and vanilla musk. 50ml, 10+ hour wear. Shop the launch price.",
      },
      { property: "og:title", content: "Sarkar Orion — Midnight Oud & Bergamot" },
      {
        property: "og:description",
        content: "A midnight blue eau de parfum built on bergamot, smoked oud and vanilla musk.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&display=swap",
      },
      { rel: "preload", as: "image", href: bottleAsset.url, fetchpriority: "high" },
    ],
  }),
  component: Orion,
});

const notes = [
  {
    stage: "Top",
    title: "Calabrian Bergamot & Pink Pepper",
    text: "A cold citrus spark in the first ten minutes — sharp, clean, unmistakably fresh.",
  },
  {
    stage: "Heart",
    title: "Smoked Oud & Iris",
    text: "The signature turn. Resinous oud softened by powdery iris for a modern, wearable depth.",
  },
  {
    stage: "Base",
    title: "Vanilla Musk & Cedar",
    text: "A warm night-air trail that stays on skin and fabric well past ten hours.",
  },
];

function Orion() {
  return (
    <div className="bg-night min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <span className="tracking-brand text-sm font-medium uppercase">Sarkar</span>
        <a
          href="#buy"
          className="rounded-full border border-primary/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Buy
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-6 md:grid-cols-2 md:gap-14 md:pt-12">
        <div className="min-w-0">
          <p className="tracking-brand text-xs uppercase text-muted-foreground">
            New from Sarkar
          </p>
          <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            <span className="text-gold">Orion</span>
            <span className="block text-foreground">Midnight Oud</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Bergamot at dusk, oud after midnight. A deep blue eau de parfum for the hours when the
            city goes quiet and you don't.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#buy"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Shop ₹1,499
            </a>
            <span className="text-sm text-muted-foreground line-through">₹2,199</span>
          </div>
          <dl className="mt-10 grid max-w-sm grid-cols-3 gap-4 border-t border-border pt-6 text-center">
            {[
              ["50 ml", "Eau de Parfum"],
              ["10+ hrs", "Longevity"],
              ["22%", "Oil concentration"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-display text-2xl text-primary">{v}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center">
          <img
            src={bottleAsset.url}
            alt="Sarkar Orion midnight blue chess-king perfume bottle"
            width={410}
            height={640}
            fetchPriority="high"
            decoding="async"
            className="w-[68%] max-w-[380px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.6)] md:w-full"
          />
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl sm:text-4xl">The composition</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {notes.map((n) => (
              <article
                key={n.stage}
                className="rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <p className="tracking-brand text-[11px] uppercase text-primary">{n.stage}</p>
                <h3 className="mt-4 text-2xl leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="buy" className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <img
            src={tubeAsset.url}
            alt="Sarkar Orion navy cylindrical gift packaging"
            width={390}
            height={592}
            loading="lazy"
            decoding="async"
            className="mx-auto w-[62%] max-w-[330px] rounded-xl md:w-full"
          />
          <div className="min-w-0">
            <h2 className="text-3xl sm:text-4xl">Arrives in the Sarkar tube</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The same matte navy cylinder and foil wordmark as every Sarkar release — gift-ready
              out of the box, no wrapping required.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
              {[
                "Free shipping across India",
                "Launch price for the first 200 bottles",
                "7-day no-questions returns",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary">—</span>
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="https://sarkar.store/"
              className="mt-9 inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Add to bag — ₹1,499
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="tracking-brand uppercase text-foreground">Sarkar Orion</span>
          <span>© 2026 Sarkar Perfume · sarkar.store</span>
        </div>
      </footer>
    </div>
  );
}
