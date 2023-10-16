import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTourItems } from "../reducers/tourReducer";

export const useTourItems = () => {
  const dispatch = useDispatch();

  const { items = [], isLoading } = useSelector(({ tour }) => tour);

  useEffect(() => {
    !items.length && dispatch(getTourItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
