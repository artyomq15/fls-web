import { SkillLevelComponentProps } from "./types";

export const SkillLevelChallenger3 = ({
  transparent = false,
  className,
}: SkillLevelComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <circle
      cx={12}
      cy={12}
      r={12}
      fill="#121212"
      fillOpacity={transparent ? 0.7 : 1}
    />
    <path
      fill="#CDCDCD"
      fillOpacity={0.1}
      fillRule="evenodd"
      d="M16.686 17.467a7.2 7.2 0 1 0-9.371 0l-1.563 1.822A9.58 9.58 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4a9.6 9.6 0 0 1 9.6 9.6 9.58 9.58 0 0 1-3.352 7.29l-1.562-1.823z"
      clipRule="evenodd"
    />
    <path
      fill="#FE1F00"
      fillRule="evenodd"
      d="M16.686 17.467a7.2 7.2 0 1 0-9.371 0l-1.563 1.822A9.58 9.58 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4a9.6 9.6 0 0 1 9.6 9.6 9.58 9.58 0 0 1-3.352 7.29l-1.562-1.823z"
      clipRule="evenodd"
    />
    <path
      fill="#FE1F00"
      d="m9.233 10.233-1.487.824v-1.034l1.722-1.075h.991V14.4H9.233v-4.167zm4.595 4.251c-.246 0-.448-.009-.604-.025a3.295 3.295 0 0 1-.513-.101 1.237 1.237 0 0 1-.462-.235 1.202 1.202 0 0 1-.294-.454 1.7 1.7 0 0 1-.126-.689v-2.612c0-.258.04-.485.118-.68a1.23 1.23 0 0 1 .302-.463c.107-.095.252-.17.437-.226a2.45 2.45 0 0 1 .554-.118c.213-.011.41-.017.588-.017.252 0 .454.009.605.025a2.4 2.4 0 0 1 .504.101c.202.062.361.143.479.244.118.1.218.246.302.437.084.19.126.422.126.697v2.612c0 .258-.042.485-.126.68a1.15 1.15 0 0 1-.302.454 1.32 1.32 0 0 1-.462.235c-.19.062-.372.098-.546.11a5.58 5.58 0 0 1-.58.025zm.017-.79c.235 0 .403-.014.504-.042a.306.306 0 0 0 .202-.176c.033-.084.05-.221.05-.412v-2.78c0-.19-.017-.328-.05-.412a.282.282 0 0 0-.202-.168c-.1-.033-.269-.05-.504-.05-.24 0-.414.017-.52.05a.282.282 0 0 0-.202.168c-.034.084-.05.221-.05.412v2.78c0 .19.016.328.05.412.033.084.1.143.201.176.107.028.28.042.521.042z"
    />
  </svg>
);
