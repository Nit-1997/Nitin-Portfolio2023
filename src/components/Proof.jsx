import { brandStrip, stats } from '../constants';

const Proof = () => (
  <section id="proof" aria-label="Companies and impact" className="mx-auto max-w-[1040px] px-5 pt-9 sm:px-12">
    <ul
      id="proof-brands"
      aria-label="Companies"
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 border-b border-border px-2 pb-8 sm:justify-between sm:gap-6">
      {brandStrip.map((brand) => (
        <li id={`proof-brand-${brand.id}`} key={brand.id}>
          <img
            id={`proof-brand-img-${brand.id}`}
            src={brand.logo}
            alt={brand.name}
            loading="lazy"
            decoding="async"
            className={`${brand.height} w-auto opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`}
          />
        </li>
      ))}
    </ul>

    <dl id="proof-stats" className="grid grid-cols-2 gap-y-6 pt-8 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          id={`proof-stat-${stat.id}`}
          key={stat.id}
          className={`flex flex-col px-3.5 md:px-6${i % 2 === 1 ? 'border-l border-border' : 'pl-2'} ${i === 2 ? 'md:border-l md:border-border md:pl-6' : ''} ${
            i === 0 ? 'md:pl-2' : ''
          }`}>
          <dt id={`proof-stat-label-${stat.id}`} className="order-2 mt-1 text-[14px] leading-snug text-textSecondary">
            {stat.label}
          </dt>
          <dd id={`proof-stat-value-${stat.id}`} className="-order-1 font-grotesk text-[30px] font-semibold tracking-[-0.03em] md:text-[40px]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Proof;
