import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTracksItems } from "../reducers/tracksReducer";

export const useTrackItems = () => {
  const dispatch = useDispatch();

  const { items = [], isLoading } = useSelector(({ tracks }) => tracks);

  useEffect(() => {
    !items.length && dispatch(getTracksItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
