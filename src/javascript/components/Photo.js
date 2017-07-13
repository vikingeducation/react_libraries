import React from "react";
import PhotoDetail from "./PhotoDetail";
import SortableDetail from "./SortableDetail";
import { dateParser, tagParser, parseCaption } from "../helpers";
import Paper from 'react-md/lib/Papers';

const Photo = props => {
  const {
    src,
    user,
    date,
    likes,
    comments,
    photoUrl,
    userUrl,
    filter,
    tags,
    caption,
    onSortableClick
  } = props;

  const parsedDate = dateParser(date);
  const parsedTags = tagParser(tags);
  const parsedCaption = parseCaption(caption);
  return (
    <div className="md-cell--4">
        <Paper>
          <a href={photoUrl}>
            <img className="img-responsive" src={src} alt="" />
          </a>
          <PhotoDetail label="Posted By" data={<a href={userUrl}>{user}</a>} />
          <PhotoDetail label="Date" data={parsedDate} />
          <SortableDetail label="Likes" data={likes} onClick={onSortableClick} />
          <SortableDetail
            label="Comments"
            data={comments}
            onClick={onSortableClick}
          />
          <PhotoDetail label="Filter" data={filter} />
          <PhotoDetail label="Tags" data={parsedTags} />
          <PhotoDetail label="Caption" data={parsedCaption} />
        </Paper>
    </div>
  );
};

export default Photo;
