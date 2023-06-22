import React from 'react';
import { fotoObjType } from '../Portfolio/Portfolio';

type propjectListPropsType = {
  fotos: Array<fotoObjType>;
};

export default function ProjectList(props: propjectListPropsType) {
  return (
    <div className="container">
      {props.fotos.map((foto: { img: string | undefined }, i: React.Key | null | undefined) => (
        <div key={i}>
          <img className="img" src={foto.img} alt="img" />
        </div>
      ))}
    </div>
  );
}
