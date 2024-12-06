import { routes } from "@shared/infrastructure/routes";
import { DepartmentCard, DepartmentsCardWrapper, DepartmentsPageWrapper } from "../components/StoreDepartments.styles";
import { StringHelper } from "@shared/helpers";
import { Block, CustomLink, Text } from "@components/index";
import woman from '../../../../../public/assets/images/store/woman.webp';
import man from '../../../../../public/assets/images/store/man.webp';
import take_care from '../../../../../public/assets/images/store/take-care.webp';
import sales from '../../../../../public/assets/images/store/sales.webp';
import spirituality from '../../../../../public/assets/images/store/spirituality.webp';
import bracelets from '../../../../../public/assets/images/store/bracelets.webp';
import pendants from '../../../../../public/assets/images/store/pendants.webp';
import earrings from '../../../../../public/assets/images/store/earrings.webp';
import rings from '../../../../../public/assets/images/store/rings.webp';
import leaves from '../../../../../public/assets/images/store/leaves.webp';
import { ReactNode } from "react";

interface StoreDepartmentItem {
    name: string;
    image: string;
  }
  
  interface StoreMainDepartmentItem extends StoreDepartmentItem {
    subDepartments?: Array<StoreDepartmentItem>;
}
const mainDepartments: Array<StoreMainDepartmentItem> = [
    {
      name: 'mujer',
      image: woman.src,
      subDepartments: [
        {
          name: 'pulseras',
          image: bracelets.src,
        },
        {
          name: 'anillos',
          image: rings.src,
        },
        {
          name: 'colgantes',
          image: pendants.src,
        },
        {
          name: 'pendientes',
          image: earrings.src,
        },
      ],
    },
    {
      name: 'hombre',
      image: man.src,
    },
    {
      name: 'cuidado de tu ser',
      image: take_care.src,
    },
    {
      name: 'REBAJAS',
      image: sales.src,
    },
    {
      name: 'espiritualidad',
      image: spirituality.src,
    },
];

interface StoreCardLink {
    children: ReactNode;
    item: StoreMainDepartmentItem
}
const StyledLinkCard: React.FC<StoreCardLink> = ({children, item}) => {
    if (item.subDepartments && item.subDepartments.length > 0) {
        return (
          <DepartmentCard href={`${routes.STORE_DEPARTMENTS}/${StringHelper.formateEmptySpacesToUrl(item.name)}`}  $url={item.image}>
            {children}
          </DepartmentCard>
        )
      } 
      return (
        <DepartmentCard href={`${routes.STORE_PRODUCTS}/${StringHelper.formateEmptySpacesToUrl(item.name)}`}  $url={item.image}>
        {children}
      </DepartmentCard>
      )
}

interface Props {
  departmentName?: string;
}
const DepartmentsWrapper: React.FC<Props> = ({ departmentName }) => {
  function renderCards() {
    const data = [];
    if (departmentName) {
      const subDepartmentsToRender = mainDepartments.find((item) => item.name === departmentName)?.subDepartments ?? [];
      if (subDepartmentsToRender?.length) {
        data.push(...subDepartmentsToRender)
      }
    } else {
      data.push(...mainDepartments)
    }
    return  data.map((item, index) =>(
      <StyledLinkCard key={index} item={item}>
        <Block width="100%">
            <Text color="white" weight="bold" as="h2" fontSize="small" isUppercase textAlign="center">{item.name}</Text>
        </Block>
      </StyledLinkCard>
  ))
  }
    return (
        <DepartmentsPageWrapper $url={leaves.src}>
            <DepartmentsCardWrapper>
                {renderCards()}
            </DepartmentsCardWrapper>
            <Block display="flex" direction="column" align="center" justify="center" pt="l" pb="l">
                <Text as="h3" fontSize="small" fontFamily="title">
                    ¿Conóces tú talla?
                </Text>
                <CustomLink to={routes.SIZE_GUIDES} fontSize="medium" color="black" hoverColor="lightSilver">
                    Guía de tallas
                </CustomLink>
            </Block>
        </DepartmentsPageWrapper>
    );
}

export default DepartmentsWrapper;