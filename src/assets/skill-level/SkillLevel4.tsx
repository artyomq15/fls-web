import { SkillLevelComponentProps } from "./types";

export const SkillLevel4 = ({ className }: SkillLevelComponentProps) => (
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
      d="M6.91 6.91 5.211 5.211A9.57 9.57 0 0 0 2.4 12a9.58 9.58 0 0 0 3.352 7.289l1.562-1.822A7.184 7.184 0 0 1 4.801 12c0-1.988.805-3.788 2.108-5.09z"
      clipRule="evenodd"
    />
    <path
      fill="#FFC800"
      d="M12.303 13.3h-2.52v-.967l2.243-3.385h1.386v3.47H14v.881h-.588v1.1h-1.109v-1.1zm0-.883v-2.31l-1.47 2.31h1.47z"
    />
  </svg>
);
