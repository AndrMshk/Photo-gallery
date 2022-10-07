import React, { useEffect, useState } from 'react';
import './select.scss';
import { useAppDispatch, useAppSelector } from '../../bll/store';
import { setPaginationParamsAction } from '../../bll/photosReducer';

export const Select = () => {

  const dispatch = useAppDispatch();

  const limit = useAppSelector(state => state.photos.paginationParams.limit);

  const items: number[] = [6, 10, 20, 40];

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(limit);
  const [hoveredItem, setHoveredItem] = useState<number>(0);

  const onPressKeyHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowDown':
        setHoveredItem(hoveredItem + 1);
        if (hoveredItem >= items.length - 1) {
          setHoveredItem(items.length - 1);
        }
        break;
      case 'ArrowUp':
        setHoveredItem(hoveredItem - 1);
        if (hoveredItem <= 1) {
          setHoveredItem(0);
        }
        break;
      case 'Enter':
        setActiveItem(items[hoveredItem]);
        dispatch(setPaginationParamsAction({ limit: items[hoveredItem] }));
        setCollapsed(!collapsed);
        break;
      case 'Escape':
        setCollapsed(false);
        break;
    }
  };

  useEffect(() => {setActiveItem(items[hoveredItem]);}, [hoveredItem]);

  return (
    <div
      className="select"
      tabIndex={0}
      onBlur={() => setCollapsed(false)}
      onKeyDown={(e) => onPressKeyHandler(e)}>
      <div
        className="items current"
        onClick={() => setCollapsed(!collapsed)}>
        <span>{activeItem}</span>
      </div>
      {collapsed &&
      <div className="items">
        {items.map((item, index) =>
          <div
            key={index}
            className={hoveredItem === index ? 'hover' : ''}
            onClick={() => {
              dispatch(setPaginationParamsAction({ limit: items[hoveredItem] }));
              setActiveItem(item);
              setCollapsed(false);
            }}
            onMouseEnter={() => setHoveredItem(index)}>
            {item}
          </div>)}
      </div>}
    </div>
  );
};
