import type { LoginState } from "./loginState";

export interface LoginCommand {
  Username: string;
  Password: string;
  RememberMe?: boolean;
  State?: LoginState;
}
