import React from 'react';

class OperButton extends React.Component {
  operate = () => {
    let num = this.props.children;
    this.props.onClick(num);
    //console.log(num);
  }
  render() {
    const extraClass = this.props.className || '';
    return (
      <button
        className={`calc-btn ${extraClass}`}
        onClick={this.operate}
      >
        {this.props.children}
      </button>
    );
  } 
}

// CalcButton.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };

// CalcButton.defaultProps = {
//   onClick: showNotImplemented,
// };

export default OperButton;
