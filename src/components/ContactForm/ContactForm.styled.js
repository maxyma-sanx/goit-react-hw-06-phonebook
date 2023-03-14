import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 20px 0;
`;

export const LabelContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;

  padding: 0 5px;

  opacity: 0.8;
  pointer-events: none;

  transition: all ${({ theme }) => theme.transitions.slower};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  margin-bottom: 20px;
`;

export const Input = styled.input`
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

export const Button = styled.button.attrs({ type: 'submit' })`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 30px;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  cursor: pointer;

  transition: background-color ${({ theme }) => theme.transitions.slower};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
