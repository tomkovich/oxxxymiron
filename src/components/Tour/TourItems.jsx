import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../Title/SectionTitle";
import Section from "../Section/Section";
import TourItem from "./TourItem";
import Loader from "../Loader/Loader";

import { sortByDate } from "../../utils/common";

import { useTourItems } from "../../hooks/useTourItems";

const TourItems = () => {
  const { items = [], isLoading } = useTourItems();

  const filtered = sortByDate(
    items
      .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
      .filter((_, i) => i < 5)
  );

  return (
    <Section className="tour">
      <div className="container">
        <SectionTitle text="Концерты" />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tour-list">
            {filtered.map((item, i) => (
              <TourItem {...item} i={i} key={item.sys.id} />
            ))}
          </ul>
        )}
        <Link to="/tour" className="button-more">
          Все концерты
        </Link>
      </div>
    </Section>
  );
};

export default TourItems;
