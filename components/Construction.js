import styled from 'styled-components'

const TextWrap = styled.section `
    margin: 4em 0;
    font-size: 21px;
`

const Emoji = styled.p `
    font-size: 40px;
`

function Construction() {
return (
        <>
            <TextWrap>
                <p>Hi there!</p>
                <p>We are currenlty under construction. Come back Soon!</p>
                <Emoji>👨🏻‍💻 ☕️ 🎧</Emoji>
                <p>- Hector C.</p>
            </TextWrap>
        </>
    ) 
}

export default Construction