import { SkillLevelComponentProps } from "./types";

export const SkillLevel7 = ({ className }: SkillLevelComponentProps) => (
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
      d="M17.934 7.92a7.2 7.2 0 1 0-10.62 9.546L5.752 19.29A9.58 9.58 0 0 1 2.4 12a9.6 9.6 0 0 1 17.512-5.44l-1.978 1.36z"
      clipRule="evenodd"
    />
    <path
      fill="#FFC800"
      d="M12.546 9.906H9.9v-.958h4v.84L11.807 14.4h-1.36l2.1-4.494z"
    />
  </svg>
);
