import styled from 'styled-components';

const Hector = styled.h1`
    margin: 0;
    font-size: 45px;
`;
const Definition = styled.p `
    margin-top: .5em;
    font-size: 21px;
`;

export default function Hello(){
    return (
        <div>
            <Hector>hector</Hector>
            <Definition><strong><i>front-end web developer</i></strong> from southern california.</Definition>
        </div>
    );
}  