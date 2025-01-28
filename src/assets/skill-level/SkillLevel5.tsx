import { SkillLevelComponentProps } from "./types";

export const SkillLevel5 = ({ className }: SkillLevelComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <circle cx={12} cy={12} r={12} fill="#121212" />
    <path
      fill="#CDCDCD"
      fillOpacity={0.1}
      fillRule="evenodd"
      d="M16.686 17.467a7.2 7.2 0 1 0-9.371 0l-1.563 1.822A9.58 9.58 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4a9.6 9.6 0 0 1 9.6 9.6 9.58 9.58 0 0 1-3.352 7.29l-1.562-1.823z"
      clipRule="evenodd"
    />
    <path
      fill="#FFC800"
      fillRule="evenodd"
      d="M12 2.4A9.6 9.6 0 0 0 2.4 12a9.58 9.58 0 0 0 3.352 7.29l1.562-1.823A7.2 7.2 0 0 1 12 4.8V2.4z"
      clipRule="evenodd"
    />
    <path
      fill="#FFC800"
      d="M11.815 14.484c-.386 0-.966-.031-1.739-.093v-1.016c.695.129 1.218.193 1.571.193.308 0 .532-.033.672-.1a.357.357 0 0 0 .21-.337v-.814c0-.152-.05-.258-.151-.32-.101-.067-.266-.1-.496-.1h-1.68V8.948h3.444v.941H11.43v1.109h.856c.325 0 .642.061.95.185a.909.909 0 0 1 .554.865v1.142c0 .219-.042.415-.126.588-.084.168-.19.297-.32.387a1.315 1.315 0 0 1-.453.201c-.185.05-.364.084-.537.101a10.05 10.05 0 0 1-.538.017z"
    />
  </svg>
);
