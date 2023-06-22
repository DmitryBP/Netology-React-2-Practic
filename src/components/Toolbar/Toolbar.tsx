import React from 'react';

export type filterType = 'All' | 'Websites' | 'Flayers' | 'Business Cards';
type toolbarType = {
  onCheingeFilter: (value: filterType) => void;
};

export default function Toolbar(props: toolbarType) {
  const onFilterAll = () => props.onCheingeFilter('All');
  const onFilterWebsites = () => props.onCheingeFilter('Websites');
  const onFilterFlayers = () => props.onCheingeFilter('Flayers');
  const onFilterBusinessCards = () => props.onCheingeFilter('Business Cards');
  return (
    <div className="toolbar">
      <button onClick={onFilterAll} className="FilterBtn">
        All
      </button>
      <button onClick={onFilterWebsites} className="FilterBtn">
        Websites
      </button>
      <button onClick={onFilterFlayers} className="FilterBtn">
        Flayers
      </button>
      <button onClick={onFilterBusinessCards} className="FilterBtn">
        Business Cards
      </button>
    </div>
  );
}
