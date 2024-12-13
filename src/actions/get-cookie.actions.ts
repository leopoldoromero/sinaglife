'use server';

import { cookies } from 'next/headers';

export async function getServerCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function setServerCookie(name: string, value: string) {
    const cookieStore = await cookies();
    return cookieStore.set(name, value);
}

export async function hasAcceptedCookies(): Promise<boolean> {
    const cookieStore = await cookies();
    return cookieStore.get('cookies-consent')?.value === 'true';
}

export async function acceptOrDeclineCookies(accepted = false) {
    const cookieStore = await cookies();
    return cookieStore.set('cookies-consent', String(accepted));
}
