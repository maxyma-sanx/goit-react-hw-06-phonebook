import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const SocialLink = styled.a`
  transition: transform ${({ theme }) => theme.transitions.faster};

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
