import React from "react";
import { Button } from "reactstrap";

export default class ButtonReact extends React.Component {
  render() {
    return (
      <div>
        <Button
          style={{ width: "120px", margin: "auto", display: "block" }}
          type={this.props.type}
          name={this.props.name}
          color={this.props.color}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </Button>
      </div>
    );
  }
}

// const Button = props => {
//   const { size, color, children, type, onClick, name } = props;
//   const sizeClass = size ? `btn-${size}` : '';

//   return (
//     <ButtonBootstrap name={name} type={type} onClick={onClick}>
//       {children}
//     </ButtonBootstrap>
//   );

// <button
//   name={name}
//   type={type}
//   onClick={onClick}
//   className={`btn btn-${color} ${sizeClass}`}
// >
//   {children}
// </button>
// };

// Button.defaultProps = {
//   type: 'button',
//   color: 'default',
//   children: 'Submit'
// };

// export default Button;
