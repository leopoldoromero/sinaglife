import { Block } from '..';
import { ColorKeys, MarginProps, PaddingProps } from '../../theme';
import { Text } from '..';

interface Props extends MarginProps, PaddingProps {
  children: React.ReactNode;
  pageTitle?: string;
  titleColor?: ColorKeys;
  as?: string;
}

const PageWrapper: React.FC<Props> = ({ pageTitle, titleColor, children, as, ...rest }) => (
  <Block display="flex" direction="column" pt="xl" pb="xl" {...rest}>
    {pageTitle && (
      <Text
        textAlign="center"
        mt="s"
        mb="s"
        as={as ?? 'h1'}
        color={!titleColor ? 'earth' : titleColor}
        fontSize="small"
        fontFamily="title"
        weight="medium"
        isUppercase
      >
        {pageTitle}
      </Text>
    )}
    {children}
  </Block>
);

export default PageWrapper;
