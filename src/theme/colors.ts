export enum Colors {
  black = '#000000',
  white = '#ffffff',
  darkPurple = '#3d0e66',
  wine = '#861111',
  red = '#ff0000',
  earth = '#a78742',
  lightEarth = '#dbc666',
  mediumEarth = '#cda34a',
  darkEarth = '#8d7032',
  xLightSilver = '#efecdf',
  lightSilver = '#c7c7c7',
  mediumSilver = '#a1a1a1',
  darkSilver = '#6d6d6d',
  drawer = '#b3a690',
  transparent = 'transparent',
  facebook = '#3b5998',
  whatsapp = '#25d366',
  twitter = '#09aeec',
  green = '#5ebd23',
  greenMid = '#048204'
}

export const colors = Object.keys(Colors).reduce((acc, key) => {
  const colorKey = key as keyof typeof Colors;
  return {
    ...acc,
    [colorKey]: Colors[colorKey],
  };
}, {} as { [key in keyof typeof Colors]: string });

export type ColorKeys = keyof typeof Colors;
