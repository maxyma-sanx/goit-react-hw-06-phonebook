import { FaGithub, FaLinkedin, FaReact, FaRegHeart } from 'react-icons/fa';

import { SocialWrapper, SocialLink } from './Social.styled';

export const Social = () => {
  return (
    <SocialWrapper>
      <SocialLink
        href="https://github.com/maxyma-sanx"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size="24" color="#6e5494" />
      </SocialLink>

      <SocialLink
        href="https://www.linkedin.com/in/maxyma/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size="24" color="#0077b5" />
      </SocialLink>

      <SocialLink
        href="https://goit.global/ua/"
        target="_blank"
        rel="noreferrer"
      >
        <FaRegHeart size="24" color="#ff6b0a" />
      </SocialLink>

      <SocialLink
        href="https://uk.reactjs.org/"
        target="_blank"
        rel="noreferrer"
      >
        <FaReact size="24" color="#09d3ac" />
      </SocialLink>
    </SocialWrapper>
  );
};
