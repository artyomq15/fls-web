import { SkillLevelComponentProps } from "./types";

export const SkillLevel1 = ({ className }: SkillLevelComponentProps) => (
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
      d="M16.685 17.467a7.2 7.2 0 1 0-9.371 0l-1.563 1.822A9.58 9.58 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4a9.6 9.6 0 0 1 9.6 9.6 9.58 9.58 0 0 1-3.352 7.29l-1.563-1.823z"
      clipRule="evenodd"
    />
    <path
      fill="#EEE"
      fillRule="evenodd"
      d="M5.894 15.816 3.858 17.09a9.656 9.656 0 0 0 1.894 2.2l1.562-1.822a7.206 7.206 0 0 1-1.42-1.65z"
      clipRule="evenodd"
    />
    <path
      fill="#EEE"
      d="m11.765 10.233-1.487.824v-1.034L12 8.948h.991V14.4h-1.226v-4.167z"
    />
  </svg>
);
