import { useState } from 'react';
import { data } from '../../data/data';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar, { filterType } from '../Toolbar/Toolbar';

export type fotoObjType = {
  img: string;
  category: string;
};

export default function Portfolio() {
  const [filter, setFilter] = useState<filterType>('All');
  const filtredFotos =
    filter === 'Business Cards'
      ? data.filter((f) => f.category === 'Business Cards')
      : filter === 'Flayers'
      ? data.filter((f) => f.category === 'Flayers')
      : filter === 'Websites'
      ? data.filter((f) => f.category === 'Websites')
      : data;
  const onCheingeFilter = (filter: filterType) => {
    setFilter(filter);
  };
  return (
    <div className="appWrp">
      <Toolbar onCheingeFilter={onCheingeFilter} />
      <ProjectList fotos={filtredFotos} />
    </div>
  );
}
