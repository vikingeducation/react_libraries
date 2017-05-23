import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronFluid = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.heading}</h1>
          <p className="lead">{props.lead}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronFluid;
