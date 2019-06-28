import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

ConnectedList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
};

const List = connect(mapStateToProps)(ConnectedList);
export default List;
