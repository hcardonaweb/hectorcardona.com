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


const Wrapper = styled.section`
    margin: 1rem 0;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    max-width: 425px;    
`;

const Col = styled.div`
    display: flex;
    align-tems: center; 
`;

export default function Technologies() {
    const tech = [
        {
            id: 0,
            name: 'HTML',
            brandClass: <FontAwesomeIcon icon={['fab', 'html5']} />
        }, {
            id : 1,
            name : 'CSS',
            brandClass : <FontAwesomeIcon icon={['fab', 'css3']} />
        }, {
            id: 2,
            name: 'JS',
            brandClass: <FontAwesomeIcon icon={['fab', 'js-square']} />
        }, {
            id: 3,
            name: 'PHP',
            brandClass: <FontAwesomeIcon icon={['fab', 'php']} />
        }, {
            id: 4,
            name: 'Wordpress',
            brandClass: <FontAwesomeIcon icon={['fab', 'wordpress-simple']} />
        }, {
            id: 5,
            name: 'Shopify',
            brandClass: <FontAwesomeIcon icon={['fab', 'shopify']} />
        }, {
            id: 6,
            name: 'React',
            brandClass: <FontAwesomeIcon icon={['fab', 'react']} />
        },
    ]

    return <Wrapper>
        {tech.map((brand, index) => {
        return <Col key={index} className="col">
            {brand.brandClass}
        </Col>
    })}
    </Wrapper>
}