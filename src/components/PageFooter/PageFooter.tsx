import { Trans, useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { LogoNew } from "@/assets/LogoNew";
import { DonateLinks } from "../DonateLinks/DonateLinks";
import { eventService } from "@/services";

export function PageFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-3 py-8 border-t border-white/[0.08] text-sm text-[var(--site-text-secondary)]">
      <div className="flex flex-col gap-8 mb-8 md:flex-row md:justify-between md:gap-12">
        <div className="flex flex-col gap-3 max-w-[280px]">
          <Link to="/" className="w-fit">
            <LogoNew />
          </Link>
          <p className="text-[13px]">{t("footer.description")}</p>
        </div>

        <div className="flex flex-col gap-3 max-w-[400px]">
          <h3 className="text-[13px] font-bold text-[var(--site-text)]">
            {t("footer.support.title")}
          </h3>

          <p className="text-[13px]">
            <Trans
              i18nKey="footer.support.description"
              components={[
                <a
                  href="https://www.twitch.tv/podokoniktw/about"
                  target="_blank"
                  className="text-[#b98dfb] font-semibold underline underline-offset-2"
                  onClick={() =>
                    eventService.track("twitch_click", {
                      source: "footer",
                      value: "podokoniktw",
                    })
                  }
                />,
                <a
                  href="https://www.twitch.tv/nymf71/about"
                  target="_blank"
                  className="text-[#b98dfb] font-semibold underline underline-offset-2"
                  onClick={() =>
                    eventService.track("twitch_click", {
                      source: "footer",
                      value: "nymf71",
                    })
                  }
                />,
              ]}
            />
          </p>

          <DonateLinks />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-xs opacity-60 md:flex-row md:justify-between md:items-center">
        <span>© {year} FACEIT Live Stats</span>

        <span>{t("footer.disclaimer")}</span>
      </div>
    </footer>
  );
}
