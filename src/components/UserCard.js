import React from "react";
import ButtonReact from "./elements/Button";
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

// Custom card component for each user's data
const UserCard = ({ user, onDeleteUser, onShowEdit }) => {
  const { first_name, last_name, avatar, id } = user;

  return (
    <div>
      <Card style={{ width: "240px" }}>
        <CardImg top width="100%" src={avatar} alt="user avatar" />
        <CardBlock>
          <CardTitle className="text-center">
            {first_name} {last_name}
          </CardTitle>
          <div style={{ margin: "auto" }}>
            <ButtonReact
              type="submit"
              color="primary"
              name={id}
              onClick={onShowEdit}
            >
              Edit
            </ButtonReact>
            <ButtonReact
              type="submit"
              color="danger"
              name={id}
              onClick={onDeleteUser}
            >
              Delete
            </ButtonReact>
          </div>
        </CardBlock>
      </Card>
    </div>
  );
};

export default UserCard;
