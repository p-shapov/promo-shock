import type { FC } from "react";

import { ListWithStickyTitles } from "@promo-shock/ui-kit";

import styles from "./about.module.scss";
import { TEAM_LIST } from "./constants";
import { TeamMember } from "./team-member";

export const About: FC = () => {
  return (
    <main className={styles.root}>
      <h1 className={styles.title}>About</h1>

      <section className={styles.article}>
        <h3 className={styles.h3}>
          Promo<span className={styles.titleAccent}>Shockers!</span>
        </h3>
        <span className={styles.h4}>
          The squad behind this masterpiece (lol)
        </span>
        <div className={styles.cardList}>
          {TEAM_LIST.map((options, i) => (
            <TeamMember key={i} className={styles.card} {...options} />
          ))}
        </div>
      </section>

      <section>
        <ListWithStickyTitles
          items={[
            {
              title: (
                <span className={styles.h4}>
                  Why the focus on streams, you ask?
                </span>
              ),
              content: (
                <div className={styles.text_section}>
                  <p>
                    Well, streams are like live, interactive gems less prone to
                    piracy. The real thrill lies in the live experience and
                    real-time interaction between streamers and viewers. Unlike
                    static content, leaked streams simply can&apos;t replicate
                    that same level of excitement. Plus, considering the
                    prevalence of streaming on major social networks like X and
                    Facebook, it&apos;s the perfect starting point.
                  </p>
                  <p>
                    Here&apos;s the scoop: streamers can now sell tickets to
                    their streams directly on our platform. Take, for instance,
                    a CryptoMonopoly board game stream catering to its top 100
                    fans. Brands can swoop in with tailored deals that resonate
                    with this audience&apos;s interests. Each ticket being an
                    NFT opens up avenues for targeted promotions, allowing
                    streamers to monetize through collaborations and ticket
                    sales, while viewers revel in special offers and engaging
                    chats with their favorite streamer.
                  </p>
                  <p>
                    But wait, there&apos;s more: even after the stream wraps up,
                    promos will continue popping up for viewers, ensuring brands
                    can continually engage the same audience with fresh deals.
                    How do viewers snag these discounts? It&apos;s simple:
                    stores can cross-reference wallet addresses to identify
                    eligible users, thanks to our custom indexer. Any store can
                    integrate this feature, attracting users and boosting
                    engagement.
                  </p>
                </div>
              ),
            },
            {
              title: (
                <span className={styles.h4}>
                  And how can users avail discounts on the products?
                </span>
              ),
              content: (
                <div className={styles.text_section}>
                  <p>
                    In essence, we believe that advertisers—those brands we
                    mentioned earlier—hold the key to catapulting this DeSoc
                    venture to greatness. Armed with innovative ideas and
                    familiar tools, brands can seamlessly transition into new
                    realms, whether blockchain-based or beyond.
                  </p>
                  <p>
                    Our platform is primed to integrate with any social network
                    offering streaming capabilities, be it centralized or
                    decentralized.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
};
