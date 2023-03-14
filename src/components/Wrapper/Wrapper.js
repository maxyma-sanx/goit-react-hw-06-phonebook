import PropTypes from 'prop-types';

import { MainWrapper } from './Wrapper.styled';

export const Wrapper = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
