import { Link, Image, Flex, Center, Button } from "@chakra-ui/react";
import AppLogo from "../assets/common/app-logo.png";
import { providers, ethers } from "ethers";


type Props = {
  account: {
    address: string,
    provider: providers.Web3Provider,
  },
  onConnectWallet: () => void,
}

function Header({ account, onConnectWallet }: Props) {
  return (
    <Flex
      justify="space-between"
      boxSize="72px"
      w="100%"
      p="1rem"
      boxSizing="border-box"
    >
      <Link
        href="https://futurefund-fe.pages.dev"
        isExternal
        minWidth="30px"
        display="block"
      >
        <Image src={AppLogo} alt="FutureFund" />
      </Link>

      {/* <Flex>
        <Center
          bgColor="rgb(25, 27, 31)"
          borderRadius="24px"
          fontWeight="bold"
          p="8px"
        >
          <span>{}</span>
        </Center>
        {account.address === "" ? (
          <Button
            onClick={onConnectWallet}
            borderRadius="24px"
            bgColor="#172941"
            color="#447BCA"
            _hover={{ borderColor: "#447BCA" }}
          >
            Connect Wallet
          </Button>
        ) : (
          <Center
            bgColor="rgb(25, 27, 31)"
            borderRadius="24px"
            fontWeight="bold"
            p="2px"
            pl="8px"
          >
            <span>{balance} ETH</span>
            <Button
              p="5px 20px"
              ml="4px"
              h="100%"
              borderRadius="24px"
              bgColor="var(--highlight-color)"
            >
              {account.address.substring(0, 6) +
                "..." +
                account.address.substring(38, 42)}
            </Button>
          </Center>
        )}
      </Flex> */}
    </Flex>
  );
}

export default Header;
