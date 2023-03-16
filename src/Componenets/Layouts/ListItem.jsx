import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ children, className, url }) => {
  return (
    <li className={!url && className}>
      {url ? (
        <Link to={url} className={className}>
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
};

export default ListItem;
