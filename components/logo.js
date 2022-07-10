import Link from 'next/link'
import { Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;

  &:hover img {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src='/images/abylai.jpg' alt='Abylai Khan' w={10} borderRadius={100} mr={2} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
          >
            Abylai Khan
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
