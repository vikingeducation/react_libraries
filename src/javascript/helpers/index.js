import PHOTO_DATA from "../photos";

export function dateParser(dateInUnixTime) {
  return new Date(dateInUnixTime * 1000).toLocaleString();
}

export function tagParser(tags) {
  if (tags.length === 0) {
    return "None";
  }

  return `#${tags.join(" #")}`;
}

export function parseCaption(caption) {
  if (caption.length > 100) {
    return caption.slice(0, 100) + "...";
  }
}

export function getFilters() {
  let filtersSet = new Set();
  PHOTO_DATA.forEach(photo => {
    filtersSet.add(photo.filter);
  });

  return Array.from(filtersSet);
}

export function parseByIgFilter(photos, igFilter) {
  let results = [];
  photos.forEach(photo => {
    if (photo.filter === igFilter) {
      results.push(photo);
    }
  });

  return results;
}

export function parseBySearchTerm(photos, searchTerm) {
  if (!searchTerm) {
    return photos;
  }
  let results = [];
  photos.forEach(photo => {
    let isSearchInUsername = photo.user.username.indexOf(searchTerm) >= 0;
    let isSearchInCaption =
      photo.caption &&
      photo.caption.text &&
      photo.caption.text.indexOf(searchTerm) >= 0;

    if (isSearchInCaption || isSearchInUsername) {
      results.push(photo);
    }
  });

  return results;
}

export function sortPhotosByDate(photos, direction) {
  if (photos.length === 0) {
    return [];
  }

  if (direction === "Ascending") {
    return photos.sort((a, b) => {
      return b.created_time - a.created_time;
    });
  } else if (direction === "Descending") {
    return photos.sort((a, b) => {
      return a.created_time - b.created_time;
    });
  }
}

export function sortPhotosByCategory(photos, category) {
  if (!category) {
    return photos;
  } else if (category === "Likes") {
    return photos.sort((a, b) => {
      return b.likes.count - a.likes.count;
    });
  } else if (category === "Comments") {
    return photos.sort((a, b) => {
      return b.comments.count - a.comments.count;
    });
  } else {
    return photos;
  }
}

export function paginatePhotos(photos, page, itemsPerPage) {
  if (page === 1) {
    return photos.slice(0, itemsPerPage);
  }

  let start = (page - 1) * itemsPerPage + 1;
  let end = page * itemsPerPage + 1;

  return photos.slice(start, end);
}