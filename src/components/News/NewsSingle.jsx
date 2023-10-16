import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getNewsItem } from "../../reducers/newsReducer";

import Loader from "../Loader/Loader";

import { getLocaleDateString, jsonToText } from "../../utils/common";

const NewsSingle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { item, isLoading } = useSelector(({ news }) => news);

  useEffect(() => {
    dispatch(getNewsItem(id));
  }, [dispatch, id]);

  return (
    <section className="page news-single">
      <div className="container">
        {isLoading || !item ? (
          <Loader />
        ) : (
          <div className="news-single__item">
            <h1 className="news-single__item-title">{item.title}</h1>
            <p className="news-single__item-date">
              {getLocaleDateString(item.date, { month: "short" })}
            </p>
            <div className="news-single__item-content">
              {jsonToText(item.description.json)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSingle;
