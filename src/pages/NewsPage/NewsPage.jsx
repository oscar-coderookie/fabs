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

        </div>
    </div>
  )
}

export default NewsPage