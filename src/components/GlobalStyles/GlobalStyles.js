import './globalstyles.scss';
import PropTypes from 'prop-types';

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

function GlobalStyle({ children }) {
  return children;
}
export default GlobalStyle;
