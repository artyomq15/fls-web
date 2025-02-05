import { useCallback, useEffect, useState } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { CompactWidget as CompactWidgetComponent } from "@/components/CompactWidget";

import { FaceitProfile } from "@/types";
import { faceitApiDataService } from "@/data-services";
import { eventService } from "@/services";

const routeApi = getRouteApi("/widget-compact");

export function CompactWidget() {
  const { nickname, hideRank, hideChallenger, rounded, transparent, isGiant } =
    routeApi.useSearch();

  const [faceitProfile, setFaceitProfile] = useState<
    FaceitProfile | null | undefined
  >();
  const [regionRanking, setRegionRanking] = useState<
    number | null | undefined
  >();

  const fetchFaceitProfile = useCallback(async () => {
    try {
      if (nickname) {
        const fetchedFaceitProfile =
          await faceitApiDataService.getProfile(nickname);

        setFaceitProfile(fetchedFaceitProfile);
      } else {
        setFaceitProfile(null);
      }
    } catch (err) {
      setFaceitProfile(null);
    }
  }, [nickname]);

  const fetchRegionRanking = useCallback(async () => {
    try {
      if (faceitProfile?.player_id && faceitProfile?.games?.cs2?.region) {
        const fetchedRegionRanking = await faceitApiDataService.getRanking(
          faceitProfile.player_id,
          faceitProfile.games.cs2.region
        );

        setRegionRanking(fetchedRegionRanking);
      } else {
        setRegionRanking(null);
      }
    } catch (err) {
      setRegionRanking(null);
    }
  }, [faceitProfile?.player_id, faceitProfile?.games?.cs2?.region]);

  useEffect(() => {
    fetchFaceitProfile();

    const timeout = setInterval(() => {
      fetchFaceitProfile();
    }, 30000);

    return () => {
      clearInterval(timeout);
    };
  }, [fetchFaceitProfile]);

  useEffect(() => {
    if (faceitProfile?.games?.cs2?.faceit_elo) {
      fetchRegionRanking();
    }
  }, [faceitProfile?.games?.cs2?.faceit_elo, fetchRegionRanking]);

  useEffect(() => {
    eventService.track("view_widget_page", { type: "compact" });
  }, []);

  useEffect(() => {
    if (faceitProfile?.games?.cs2?.faceit_elo) {
      eventService.track(
        "widget_update_data",
        {
          type: "compact",
          nickname: nickname,
          elo: faceitProfile.games.cs2.faceit_elo,
        },
        { user_id: nickname }
      );
    }
  }, [nickname, faceitProfile?.games?.cs2?.faceit_elo]);

  if (!nickname) {
    return <div>Error: No nickname found in URL.</div>;
  }

  if (faceitProfile === null) {
    return (
      <div>
        Error: Can't find FACEIT profile with nickname: <b>{nickname}</b>.
      </div>
    );
  }

  if (nickname && faceitProfile && !faceitProfile.games?.cs2) {
    return (
      <div>
        Error: Profile with nickname <b>'{nickname}'</b> does not have cs2 game
        enabled.
      </div>
    );
  }

  if (faceitProfile === undefined || regionRanking === undefined) {
    return <></>;
  }

  const elo = faceitProfile.games.cs2.faceit_elo;
  const level = faceitProfile.games.cs2.skill_level;

  return (
    <>
      <CompactWidgetComponent
        elo={elo}
        level={level}
        rank={regionRanking || 2000}
        hideRank={regionRanking === null || hideRank}
        hideChallenger={regionRanking === null || hideChallenger}
        rounded={rounded}
        transparent={transparent}
        isGiant={isGiant}
      />
    </>
  );
}
