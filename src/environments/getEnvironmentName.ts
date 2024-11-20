import { ALL_ENVIRONMENTS } from "@/constants/environments";
import type { EnvironmentName } from "@/types/environments";

export default function getEnvironmentName(): EnvironmentName | undefined {
  if (!process?.env?.NEXT_PUBLIC_ENV_NAME) return undefined;

  const value = (
    process.env.NEXT_PUBLIC_ENV_NAME || ""
  ).trim() as EnvironmentName;

  if (!ALL_ENVIRONMENTS.includes(value)) return undefined;

  return value;
}