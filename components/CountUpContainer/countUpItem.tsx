import React, { PropsWithChildren } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./countupContainer.module.css";

type Props = {
  value?: number;
  title: string;
  suffix?: string;
  prefix?: string;
};

export default function CountUpItem({
  title,
  value,
  prefix,
  suffix,
}: PropsWithChildren<Props>) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className={`${styles.item}`}>
      <CountUp
        start={focus ? 0 : undefined}
        end={value || 0}
        delay={0}
        duration={1.5}
        decimals={0}
        prefix={prefix  || ''}
        suffix={suffix || ""}
        separator=","
        redraw={true}
      >

        {({ countUpRef }) => (
          <VisibilitySensor onChange={(isVisible) => {
              if (isVisible) { setFocus(true); }
          }}>
              <span className={`${styles.itemNumber}` + '  romain-font'} ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
      <p className={`${styles.itemTitle} text-primary text-white text-uppercase`}>{title}</p>
    </div>
  );
}
