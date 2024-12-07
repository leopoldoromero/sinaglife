/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShareIcons } from "./ShareWith";

const links: { [key in ShareIcons]: (...params: any[]) => string } = {
  twitter: (link = '', message = '') =>
    `https://twitter.com/intent/tweet/?text=${encodeURIComponent(message)}&url=${encodeURIComponent(link)}`,
  facebook: (link = '') => `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
  google: (link = '') => `https://plus.google.com/share?url=${encodeURIComponent(link)}`,
  whatsapp: (link = '', message = '') =>
    `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%20${encodeURIComponent(link)}`,
  // telegram: (link = '', message = '') =>
  //   `https://telegram.me/share/url?text=${encodeURIComponent(
  //     message
  //   )}&url=${encodeURIComponent(link)}`,
  mail: (link = '', subject: string, body: any) =>
    `mailto:?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(
      (body && `${body}\n\n${link}`) || link,
    )}`,
};

export default links;
