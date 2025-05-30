import clsx from "clsx";
import styles from "./CompactWidget.module.scss";
import { SkillLevelAppearance } from "../SkillLevelAppearance/SkillLevelAppearance";
import { EloSection } from "../EloSection";

export function CompactWidget({
  elo,
  level,
  rank,
  hideChallenger = false,
  hideRank = false,
  transparent = false,
  rounded = false,
  isGiant = false,
}: {
  elo: number;
  level: number;
  rank: number;
  hideChallenger?: boolean;
  hideRank?: boolean;
  transparent?: boolean;
  rounded?: boolean;
  isGiant?: boolean;
}) {
  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(
          styles.container,
          transparent && styles.container_transparent,
          rounded && styles.container_rounded,
          isGiant && styles.containerGiant
        )}
      >
        <SkillLevelAppearance
          level={level}
          rank={rank}
          hideChallenger={hideChallenger}
          hideRank={hideRank}
          isGiant={isGiant}
        />
        <EloSection elo={elo} isGiant={isGiant} />
      </div>
    </div>
  );
}
