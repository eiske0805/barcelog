import * as React from "react"
import { Link } from "gatsby"
import { Box, Flex, Spacer, HStack, VStack } from "@chakra-ui/react"

const PageNavi = ({ previous, next }) => {
  return (
    <Flex
      as="nav"
      mt={20}
      px={4}
      pb={16}
      borderBottom="1px dashed"
      borderColor="grey"
    >
      <Box>
        {next && (
          <HStack
            as={Link}
            to={next.fields.slug}
            rel="next"
            fill="gray"
            transition=".3s"
            _hover={{
              color: "red",
              fill: "red",
            }}
            _focus={{ boxShadow: "none" }}
          >
            <Box
              as="svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 256 512"
            >
              <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
            </Box>
            <VStack>
              <Box fontSize="xs">（新しい記事へ）</Box>
              <Box>{next.frontmatter.title}</Box>
            </VStack>
          </HStack>
        )}
      </Box>
      <Spacer minW="20%" />
      <Box>
        {previous && (
          <HStack
            as={Link}
            to={previous.fields.slug}
            rel="prev"
            fill="gray"
            transition=".3s"
            _hover={{
              color: "red",
              fill: "red",
            }}
            _focus={{ boxShadow: "none" }}
          >
            <VStack>
              <Box fontSize="xs">（古い記事へ）</Box>
              <Box>{previous.frontmatter.title}</Box>
            </VStack>
            <Box
              as="svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 256 512"
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
            </Box>
          </HStack>
        )}
      </Box>
    </Flex>
  )
}

export default PageNavi
