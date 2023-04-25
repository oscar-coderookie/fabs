import React from 'react';
import './NewsPage.scss';
import news1 from './../../assets/news/news-1.jpeg';

const NewsPage = () => {
  return (
    <div className='news__block'>
        <h2 className='news__title'>Noticias:</h2>
        <div className="news__feed">
<div className="news__stories">
    <h3 className="news__stories__title">Selección andaluza - sub21:</h3>
    <img className='news__stories__img' src={news1} alt="news-1" />
</div>
<div className="news__stories">
    <h3 className="news__stories__title">Benamejí acoge la primera concentración de entrenamiento de la preselección andaluza sub-21 de béisbol</h3>
    <img className='news__stories__img' src="https://cronicacentrodeandalucia.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-24-at-13.02.57-2-1536x1152.jpeg" alt="news-1" />
    <p>El Campo Municipal de Béisbol Antonio Espejo Arjona (Benamejí) acoge la primera concentración de entrenamiento de la selección andaluza sub-21. Un doble hito puesto que será la primera selección andaluza tras dieciséis temporadas sin participar en campeonatos de España de selecciones autonómicas, y la primera selección de béisbol sub-21 de Andalucía.</p>
    <p>Francisco Artacho, es el seleccionador andaluz, siendo acompañado en el cuerpo técnico por Pedro Sánchez, Alfonso José Villegas y Miguel Padrón. Contaron en la preselección con treinta jugadores procedente de los clubes Benamejí BC, Blue Yeis, CBS Almería, CD Costa del Sol – Tiburones de Málaga y CBS Boquerones de Málaga.</p>
    <p>Jerónimo Sánchez, presidente de la Federación Andaluza de Béisbol y Sóftbol acompañó a la expedición durante toda la jornada y se mostró muy satisfecho por el nivel mostrado por los jugadores preseleccionados para el combinado autonómico. En esta línea Sánchez destacó que “el béisbol andaluz debe convertirse en un fijo en este tipo de competiciones, que enriquece la formación deportiva de nuestros jugadores con una excelente experiencia” resaltó “el gran trabajo que se está realizando por los clubes para que nuestro deporte crezca día a día” para concluir agradeció el esfuerzo realizado por técnicos, directivos y familiares para que la cita preparatoria fuese posible.</p>
    <p>El campeonato se celebrará del 26 al 29 de octubre en el Puerto de la Cruz (Tenerife), por lo que está previsto celebrar más entrenamientos hasta confeccionar el conjunto definitivo. Para concluir, el presidente del béisbol y sóftbol andaluz agradeció al Ayuntamiento de Benamejí “la predisposición por cedernos sus magníficas instalaciones y colaborar en pro de la promoción del béisbol y sóftbol”.</p>
    <p>El cuerpo técnico tiene previsto organizar al menos una concentración al mes, hasta la disputa del campeonato, intensificándose el mes previo, con una concentración a la semana. Francisco Artacho destacó “el excelente nivel mostrado” para elegir los 17 jugadores que participaran en las siguientes convocatorias, hasta hacer la lista definitiva que estará compuesta por 15 jugadores.</p>

    <p className="news__date">Fecha: 24/04/2023</p>
</div>

        </div>
    </div>
  )
}

export default NewsPage