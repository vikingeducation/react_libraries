import React, { Component } from "react";
import Photo from "./Photo";
import {
  parseByIgFilter,
  sortPhotosByDate,
  parseBySearchTerm,
  paginatePhotos,
  sortPhotosByCategory
} from "../helpers";
const ITEMS_PER_PAGE = 6;

class Gallery extends Component {
  render() {
    const {
      igFilter,
      dateSortDirection,
      searchTerm,
      page,
      onSortableClick,
      category
    } = this.props;
    let { photos } = this.props;
    photos = parseByIgFilter(photos, igFilter);
    photos = parseBySearchTerm(photos, searchTerm);
    photos = sortPhotosByDate(photos, dateSortDirection);
    photos = sortPhotosByCategory(photos, category);
    photos = paginatePhotos(photos, page, ITEMS_PER_PAGE);
    let resultsCount = photos.length;

    const photoElements = photos.map(photo => {
      let caption;
      if (photo.caption && photo.caption.text) {
        caption = photo.caption.text;
      } else {
        caption = "";
      }
      return (
        <Photo
          key={photo.id}
          src={photo.images.standard_resolution.url}
          user={photo.user.username}
          date={photo.created_time}
          likes={photo.likes.count}
          comments={photo.comments.count}
          photoUrl={photo.link}
          filter={photo.filter}
          tags={photo.tags}
          caption={caption}
          userUrl={`https://instagram.com/${photo.user.username}`}
          onSortableClick={onSortableClick}
        />
      );
    });
    return (
      <div className="row">
        <h4>Results: {resultsCount}</h4>
        {photoElements}
      </div>
    );
  }
}

export default Gallery;
