import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
`;

export const FilterLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;

  padding: 0 5px;

  opacity: 0.8;
  pointer-events: none;

  transition: all ${({ theme }) => theme.transitions.slower};
`;

export const FilterInput = styled.input`
  padding: 8px;

  background: ${({ theme }) => theme.colors.transparent};
  border: 2px solid ${({ theme }) => theme.colors.accentSecondary};
  border-radius: 5px;

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.accentPrimary};
  }

  :focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -8px;
    font-size: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
`;
