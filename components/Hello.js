import styled from 'styled-components';
import styles from '../styles/Home.module.css'

const Hector = styled.h1`

`;
const Definition = styled.p `
    margin: 1em 0;
    font-size: 21px;
    color: #6272a4;
`;

export default function Hello(){
    return (
        <div className={styles.container}>
            <h1>hector</h1>
            <Definition><strong><i>front-end web developer</i></strong> from southern california</Definition>
        </div>
    );
}