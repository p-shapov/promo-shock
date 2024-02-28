"use client";
import type { FC, ReactElement } from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";

import styles from "./list-with-sticky-titles.module.scss";

type Props = {
  items: { title: ReactElement; content: ReactElement }[];
};

const ListWithStickyTitles: FC<Props> = ({ items }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const createHandleViewChange = (idx: number) => (inView: boolean) => {
    if (inView) {
      setCurrentIdx(idx);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.sticky}>{items[currentIdx]?.title}</div>
      <div className={styles.list}>
        {items.map((item, index) => (
          <InView as="div" key={index} onChange={createHandleViewChange(index)}>
            {item.content}
          </InView>
        ))}
      </div>
    </div>
  );
};

export { ListWithStickyTitles };
