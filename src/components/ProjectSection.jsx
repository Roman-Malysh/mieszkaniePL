import '../style/ProjectSection.scss';
import {FaArrowRight} from 'react-icons/fa';

export const ProjectSection = () => {
  return (
    <div className='project'>
      <h2 className='project__h2'>
        Projektowanie i wykonanie zabudowy kuchennej
      </h2>
      <div className='project__body'>
        Nasze realizacje podbiły serce niejednego Klienta. Pracujemy w teamie
        architektów i wykonawców mebli. Zapewniamy indywidualny projekt mebla,
        instalacji elektrycznej w zabudowie meblowej, a także kompleksowe
        wsparcie w zakresie doboru materiałów oraz montażu. Projektujemy
        kuchnie, garderoby, szafy wnękowe oraz meble łazienkowe.
      </div>
      <button className='project__button'>
        Zobazc
        <FaArrowRight className='project__button-arrow'/>
      </button>
    </div>
  );
};
