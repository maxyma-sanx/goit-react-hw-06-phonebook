import styled from 'styled-components';

export const PhonebookSection = styled.section`
  display: flex;
  justify-content: center;

  :first-child {
    margin-bottom: 35px;
  }
`;

export const PhonebookContainer = styled.div`
  min-width: 500px;

  padding-top: 20px;

  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accentPrimary},
    8px 8px 0 0 ${({ theme }) => theme.colors.accentPrimary};
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  padding: 0 20px 20px;

  border-bottom: 3px solid ${({ theme }) => theme.colors.accentPrimary};
`;

export const Title = styled.h2``;
