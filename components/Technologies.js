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
    margin: 2em 0;
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      margin: 4em 1em;
    }

    svg {
      height: 25px;
       @media (min-width: 768px) {
         height: 40px;
       }
    }
`;

export default function Technologies() {
    return <Icons>
        <FontAwesomeIcon icon={['fab', 'html5']} />
        <FontAwesomeIcon icon={['fab', 'css3']} />
        <FontAwesomeIcon icon={['fab', 'js-square']} />
        <FontAwesomeIcon icon={['fab', 'react']} />
        <FontAwesomeIcon icon={['fab', 'php']} />
        <FontAwesomeIcon icon={['fab', 'wordpress-simple']} />
        <FontAwesomeIcon icon={['fab', 'shopify']} />
    </Icons>
}