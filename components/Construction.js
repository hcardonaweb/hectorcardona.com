import Image from 'next/image'
import Programmer from '../src/img/undraw_programming_dark.svg'
import styled from 'styled-components'

const ImageWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

const ComingSoon = styled.div `
    text-align:center;
`

function Construction() {
    return (
        <>
            <ImageWrap>
            <Image 
                src={Programmer}
                alt="Under Construction Vector"
                width={800}
                height={800}
            />
            </ImageWrap>
            <ComingSoon>
                <p>Currently under construction. Come back soon!</p>
            </ComingSoon>
        </>
    ) 
}

export default Construction