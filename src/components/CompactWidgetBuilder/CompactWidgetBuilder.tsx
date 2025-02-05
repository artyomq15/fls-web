import { useState } from "react";

import { CompactWidget } from "../CompactWidget";

import styles from "./CompactWidgetBuilder.module.scss";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { CopyLinkDialog } from "../CopyLinkDialog";
import { ChallengerSettingsInfoCard } from "../ChallengerSettingsInfoCard";
import { useTranslation } from "react-i18next";
import { eventService } from "@/services";

export function CompactWidgetBuilder({
  elo,
  level,
  rank,
  nickname,
}: {
  elo: number;
  level: number;
  rank: number;
  nickname: string;
}) {
  const { t } = useTranslation();

  const [transparent, setTransparent] = useState(false);
  const [rounded, setRounded] = useState(false);
  const [showChallenger, setShowChallenger] = useState(true);
  const [showRank, setShowRank] = useState(true);

  const isGiant = true;

  const buildUrl = () => {
    eventService.track(
      "build_widget_link_click",
      {
        type: "compact",
        nickname: nickname,
        elo: elo,
        transparent: transparent,
        rounded: rounded,
        hideChallenger: !showChallenger,
        hideRank: !showRank,
      },
      { user_id: nickname }
    );

    return `https://faceitlivestats.win/widget-compact?hideRank=${!showRank}&hideChallenger=${!showChallenger}&rounded=${rounded}&transparent=${transparent}&isGiant=${isGiant}&nickname=${nickname}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>
        <CompactWidget
          elo={elo}
          level={level}
          rank={rank}
          transparent={transparent}
          rounded={rounded}
          hideChallenger={!showChallenger}
          hideRank={!showRank}
          isGiant={false}
        />
      </div>

      <div className={styles.controls}>
        <div className={styles.controlsGroup}>
          <span>{t("builder.controls.style.label")}</span>
          <div className={styles.control}>
            <Label htmlFor="transparent">
              {t("builder.controls.style.transparent")}
            </Label>
            <Switch
              id="transparent"
              checked={transparent}
              onCheckedChange={(event) => {
                setTransparent(event);
              }}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="rounded">
              {t("builder.controls.style.rounded")}
            </Label>
            <Switch
              id="rounded"
              checked={rounded}
              onCheckedChange={(event) => {
                setRounded(event);
              }}
            />
          </div>
        </div>
        <div className={styles.controlsGroup}>
          <div className="flex items-center justify-center gap-[8px]">
            <span>{t("builder.controls.challenger.label")}</span>
            <ChallengerSettingsInfoCard
              text={t("builder.controls.challenger.info")}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="show-challenger">
              {t("builder.controls.challenger.icon")}
            </Label>
            <Switch
              id="show-challenger"
              checked={showChallenger}
              onCheckedChange={(event) => {
                setShowChallenger(event);
              }}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="show-rank">
              {t("builder.controls.challenger.rank")}
            </Label>
            <Switch
              id="show-rank"
              disabled={!showChallenger}
              checked={showRank}
              onCheckedChange={(event) => {
                setShowRank(event);
              }}
            />
          </div>
        </div>

        <CopyLinkDialog buildUrl={buildUrl} />
      </div>
    </div>
  );
}
