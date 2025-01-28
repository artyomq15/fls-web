import { SkillLevelComponentProps } from "./types";

export const SkillLevel2 = ({ className }: SkillLevelComponentProps) => (
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
      fill="#1CE400"
      fillRule="evenodd"
      d="m5.257 14.53-2.249.842a9.613 9.613 0 0 0 2.743 3.917l1.563-1.822a7.206 7.206 0 0 1-2.057-2.938z"
      clipRule="evenodd"
    />
    <path
      fill="#1CE400"
      d="M10.05 13.157c0-.303.084-.566.252-.79a1.6 1.6 0 0 1 .655-.512 8.17 8.17 0 0 1 .748-.286 2.78 2.78 0 0 0 .663-.302c.157-.107.235-.233.235-.378v-.698c0-.173-.07-.288-.21-.344-.15-.062-.386-.092-.705-.092-.387 0-.896.07-1.529.21V9.04a8.523 8.523 0 0 1 1.756-.177c.66 0 1.15.101 1.47.303.324.201.487.537.487 1.008v.756c0 .285-.087.534-.26.747a1.567 1.567 0 0 1-.656.47c-.252.107-.51.202-.773.286a2.65 2.65 0 0 0-.68.336c-.162.123-.244.27-.244.437v.277h2.621v.916h-3.83v-1.243z"
    />
  </svg>
);
