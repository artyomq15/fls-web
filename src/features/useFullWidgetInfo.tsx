import { faceitApiDataService } from "@/data-services";
import { eventService } from "@/services";
import { FaceitMatchStats, FaceitProfile } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useFullWidgetInfo(
  nickname: string,
  shouldRepeat: boolean = true
) {
  const [profile, setProfile] = useState<FaceitProfile | null | undefined>();
  const [profileLoading, setProfileLoading] = useState<boolean>(false);

  const [matches, setMatches] = useState<
    FaceitMatchStats[] | null | undefined
  >();
  const [kdr, setKdr] = useState<number | null | undefined>();
  const [regionRanking, setRegionRanking] = useState<
    number | null | undefined
  >();
  const [countryRanking, setCountryRanking] = useState<
    number | null | undefined
  >();

  const fetchProfile = useCallback(async () => {
    try {
      if (nickname) {
        setProfileLoading(true);
        const fetchedProfile = await faceitApiDataService.getProfile(nickname);

        setProfile(fetchedProfile);
      }
    } catch (err: any) {
      let msg = "";
      try {
        msg = JSON.stringify(await err?.json());
      } catch (msgErr: any) {
        msg = msgErr;
      }

      eventService.track("useFullWidgetInfo_error", {
        method: "fetchProfile",
        status: err?.status,
        msg: msg,
      });

      setProfile(null);
    } finally {
      setProfileLoading(false);
    }
  }, [nickname]);

  const fetchMatches = useCallback(async (id: string) => {
    try {
      const fetchedMatches = await faceitApiDataService.getStatsForMatches(id);

      setMatches(fetchedMatches);
    } catch (err: any) {
      let msg = "";
      try {
        msg = JSON.stringify(await err?.json());
      } catch (msgErr: any) {
        msg = msgErr;
      }

      eventService.track("useFullWidgetInfo_error", {
        method: "fetchMatches",
        status: err?.status,
        msg,
      });
      setMatches(null);
    }
  }, []);

  const fetchLifetimeStats = useCallback(async (id: string) => {
    try {
      const fetchedLifetimeStats =
        await faceitApiDataService.getLifetimeStats(id);

      setKdr(fetchedLifetimeStats);
    } catch (err: any) {
      let msg = "";
      try {
        msg = JSON.stringify(await err?.json());
      } catch (msgErr: any) {
        msg = msgErr;
      }

      eventService.track("useFullWidgetInfo_error", {
        method: "fetchLifetimeStats",
        status: err?.status,
        msg,
      });

      setKdr(null);
    }
  }, []);

  const fetchRegionRanking = useCallback(async (id: string, region: string) => {
    try {
      const fetchedFaceitRanking = await faceitApiDataService.getRanking(
        id,
        region
      );

      setRegionRanking(fetchedFaceitRanking);
    } catch (err: any) {
      let msg = "";
      try {
        msg = JSON.stringify(await err?.json());
      } catch (msgErr: any) {
        msg = msgErr;
      }

      eventService.track("useFullWidgetInfo_error", {
        method: "fetchRegionRanking",
        status: err?.status,
        msg,
      });
      setRegionRanking(null);
    }
  }, []);

  const fetchCountryRanking = useCallback(
    async (id: string, region: string, country: string) => {
      try {
        const fetchedFaceitRanking = await faceitApiDataService.getRanking(
          id,
          region,
          country
        );

        setCountryRanking(fetchedFaceitRanking);
      } catch (err: any) {
        let msg = "";
        try {
          msg = JSON.stringify(await err?.json());
        } catch (msgErr: any) {
          msg = msgErr;
        }

        eventService.track("useFullWidgetInfo_error", {
          method: "fetchCountryRanking",
          status: err?.status,
          msg,
        });
        setCountryRanking(null);
      }
    },
    []
  );

  useEffect(() => {
    fetchProfile();

    let timeout: NodeJS.Timeout;
    if (shouldRepeat) {
      timeout = setInterval(() => {
        fetchProfile();
      }, 30000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [fetchProfile, shouldRepeat]);

  useEffect(() => {
    if (profile?.games?.cs2?.faceit_elo) {
      fetchMatches(profile.player_id);
      fetchLifetimeStats(profile.player_id);
      fetchRegionRanking(profile.player_id, profile.games.cs2.region);
      fetchCountryRanking(
        profile.player_id,
        profile.games.cs2.region,
        profile.country
      );
    }
  }, [
    fetchMatches,
    fetchLifetimeStats,
    fetchRegionRanking,
    fetchCountryRanking,
    profile?.player_id,
    profile?.games?.cs2?.faceit_elo,
    profile?.games?.cs2?.region,
    profile?.country,
  ]);

  return {
    profile,
    profileLoading,
    matches,
    kdr,
    countryRanking,
    regionRanking,
  };
}
