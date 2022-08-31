import PropTypes from 'prop-types';
import './globalstyles.scss';

function GlobalStyle({ children }) {
  return children;
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;
