import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button
          type={this.props.type}
          name={this.props.name}
          color={this.props.color}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
