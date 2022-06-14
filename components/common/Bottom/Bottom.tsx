import {
  BottomContainer,
  FooterWrap,
  Copyright,
  BlogLinks,
  LinkButton,
} from "./Bottom.style";
import Image from "next/image";

export const Bottom = () => {
  return (
    <BottomContainer>
      <FooterWrap>
        <Copyright>© 2022 GeonLim.</Copyright>
        <BlogLinks>
          <LinkButton href="https://github.com/WoogLim/woogLim.dev">
            <Image
              src="/Images/Home/github.svg"
              alt="github"
              width={40}
              height={40}
              layout="intrinsic"
            />
          </LinkButton>
        </BlogLinks>
      </FooterWrap>
    </BottomContainer>
  );
};
