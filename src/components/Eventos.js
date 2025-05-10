import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/Eventos.css'

import { Navigation, Pagination } from 'swiper/modules';

function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/eventos')
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => console.error('Erro ao carregar eventos:', err));
  }, []);

  return (
    <div className='eventos-container'>
      <h2>Próximos Eventos</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
      >
        {eventos.map((evento) => (
          <SwiperSlide key={evento.id}>
            <div className='evento-card'>
                {evento.imagem && (
                <img 
                    src={evento.imagem} 
                    alt={`Imagem de ${evento.nome}`} 
                    className='evento-img'
                />
                )}
                <div className="evento-info">
                <h3>{evento.nome}</h3>
                <p><strong>Data:</strong> {evento.data}</p>
                <p><strong>Descrição:</strong> {evento.descricao}</p>
                <p><strong>Local:</strong> {evento.localizacao}</p>
                </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}

export default Eventos;
