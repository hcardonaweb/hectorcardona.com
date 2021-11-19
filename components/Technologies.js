import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faPhp,
  faWordpressSimple,
  faShopify,
  faReact
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faHtml5,
  faCss3,
  faJsSquare,
  faPhp,
  faWordpressSimple,
  faShopify, 
  faReact
);


const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 450px;
`;

export default function Technologies() {
    return <Icons>
        <FontAwesomeIcon icon={['fab', 'html5']} />
        <FontAwesomeIcon icon={['fab', 'css3']} />
        <FontAwesomeIcon icon={['fab', 'js-square']} />
        <FontAwesomeIcon icon={['fab', 'php']} />
        <FontAwesomeIcon icon={['fab', 'wordpress-simple']} />
        <FontAwesomeIcon icon={['fab', 'shopify']} />
        <FontAwesomeIcon icon={['fab', 'react']} />
    </Icons>
}