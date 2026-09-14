import useScript from "@/lib/useScript";
import styles from "./TwitchPlayer.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Trans, useTranslation } from "react-i18next";
import { eventService } from "@/services";

const TWITCH_PLAYER_SCRIPT = "https://player.twitch.tv/js/embed/v1.js";
const ID = "twitch_player";
const TWITCH_ID = "nymf71";

interface TwitchWindow extends Window {
  Twitch?: {
    Player?: any;
  };
}

export function TwitchPlayer({
  onVisibleChange,
}: {
  onVisibleChange: (visible: boolean) => void;
}) {
  useTranslation();

  const { loading, error } = useScript(TWITCH_PLAYER_SCRIPT);

  const [ready, setReady] = useState(false);
  const [online, setOnline] = useState(false);

  const player = useRef<any>();

  const createPlayer = useCallback((Player: any) => {
    const el = document.getElementById(ID);
    if (el) {
      el.innerHTML = "";
    }

    const player = new Player(ID, {
      channel: TWITCH_ID,
      autoplay: true,
      muted: true,
      height: "100%",
      width: "100%",
    });

    player.addEventListener(Player!.READY, () => {
      setReady(true);
    });

    player.addEventListener(Player!.ONLINE, () => {
      setOnline(true);
    });

    player.addEventListener(Player!.OFFLINE, () => {
      setOnline(false);
    });

    return player;
  }, []);

  useEffect(() => {
    if (!loading && !error && !player.current) {
      player.current = createPlayer((window as TwitchWindow).Twitch!.Player!);
    }
  }, [loading, error, createPlayer]);

  useEffect(() => {
    onVisibleChange(ready && online);
  }, [ready, online, onVisibleChange]);

  if (loading) {
    return null;
  }

  if (!loading && error) {
    return null;
  }

  return (
    <div
      className={clsx(
        styles.container,
        ready && online && styles.containerVisible
      )}
    >
      <div className={styles.title}>
        <span className={styles.live}></span>{" "}
        <Trans
          i18nKey="twitch-player.title"
          components={[
            <a
              href={"https://www.twitch.tv/nymf71/about"}
              target="_blank"
              className={clsx(styles.link)}
              onClick={() => {
                eventService.track("twitch_click", {
                  source: "twitch-player",
                  value: "nymf71",
                });
              }}
            />,
          ]}
        />
      </div>
      <div id={ID} className={styles.player}></div>
    </div>
  );
}
