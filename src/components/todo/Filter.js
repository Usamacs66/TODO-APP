import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../store/action/setFilter";
import { FILTERS } from "../../constants";

const Filter = () => {
  const activeFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();
  return (
    <div className="controls">
      <div className="filters">
        {Object.keys(FILTERS).map(filterKey => {
          const currentFilter = FILTERS[filterKey];
          return (
            <span
              key={`visibility-filter-${currentFilter}`}
              className={currentFilter === activeFilter ? "slected-span":""}
              onClick={() => {
                dispatch(setFilter(currentFilter));
              }}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;