import { env } from "@/settings/env";

export async function googleLogin() {
  window.location.href = `${env.SERVER_API}auth/google`;
}

