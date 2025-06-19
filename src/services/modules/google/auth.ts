import { env } from "@/settings/env";

export async function googleLogin() {
  window.open(`${env.SERVER_API}auth/google`, 'google-login', 'width=500,height=600');
}

