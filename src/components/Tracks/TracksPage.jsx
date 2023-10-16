import React, { useEffect, useState } from "react";

import { useTrackItems } from "../../hooks/useTrackItems";

import PageTitle from "../Title/PageTitle";
import Loader from "../Loader/Loader";
import Icon from "../Icon/Icon";

import { getLocaleDateString } from "../../utils/common";

const TracksPage = () => {
  const { items = [], isLoading } = useTrackItems();

  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleTrackClick = (track) => {
    setPlaying((prev) => {
      const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true;

      audio.src = track.link.url;
      !isPlaying ? audio.pause() : audio.play();

      return isPlaying;
    });

    setCurrentTrack(track);
  };

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <section className="tracks-page page">
      <div className="container">
        <PageTitle text="Все релизы" />

        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tracks-list">
            {items.map((track) => {
              const {
                sys: { id },
                title,
                cover,
                date,
                description,
              } = track;

              const iconName =
                playing && id === currentTrack?.sys?.id ? "pause" : "play";

              return (
                <li key={id} className="tracks-list__item">
                  <div className="tracks-list__item-image">
                    <img src={cover.url} alt={title} />
                  </div>

                  <div className="tracks-list__item-info">
                    <p className="tracks-list__item-date">
                      {getLocaleDateString(date, { month: "short" })}
                    </p>
                    <h2 className="tracks-list__item-title">{title}</h2>
                    <p className="tracks-list__item-description">
                      {description}
                    </p>
                  </div>

                  <button
                    className="tracks-list__item-button"
                    onClick={() => handleTrackClick(track)}
                  >
                    <span>слушать</span>
                    <Icon name={iconName} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default TracksPage;
