export const AI_GENERATED_FIELD_VALUE = "___AI_GENERATE___";

export const EMAIL_ACCOUNT_HEADER = "X-Email-Account-ID";

export const NO_REFRESH_TOKEN_ERROR_CODE = "NO_REFRESH_TOKEN";

export const userCount = "10,000+";

export const ConditionType = {
  AI: "AI",
  STATIC: "STATIC",
  GROUP: "GROUP",
  CATEGORY: "CATEGORY",
  PRESET: "PRESET",
} as const;

export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];
export type CoreConditionType = Exclude<ConditionType, "GROUP" | "PRESET">;
