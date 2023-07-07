export interface Auth {
  isLoggedIn: boolean;
  issuer: string | null;
  email: string | null;
}
