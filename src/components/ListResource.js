import React from "react";
import Pagination from "material-ui-pagination";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

const ListResource = ({
  resource,
  resourceName,
  numPages,
  page,
  onPageChange
}) => {
  return (
    <div>
      <div className="pagination">
        <Pagination
          total={numPages}
          current={Number(page)}
          display={numPages}
          onChange={number => onPageChange(number)}
        />
      </div>
      <Loading condition={resource.length} />
      <ul className="resourceList">
        {resource.map(r => (
          <Link
            to={`/${resourceName}/${r.url.match(
              /swapi.co\/api\/\w+\/(\d+)/
            )[1]}`}
          >
            <li>{resourceName === "films" ? r.title : r.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListResource;
