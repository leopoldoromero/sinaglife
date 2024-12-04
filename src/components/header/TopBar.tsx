import { Block, Text } from '..';

const TopBar = () => (
  <Block display="flex" justify="center" pt="s" pb="s" bgColor="xLightSilver">
    <Text
      fontFamily="base2"
      as="h4"
      fontSize="m"
      weight="medium"
      color="black"
      customStyles={{ 'letter-spacing': '0.2rem' }}
    >
      20% de dto en tu primera compra!!!
    </Text>
  </Block>
);

export default TopBar;
