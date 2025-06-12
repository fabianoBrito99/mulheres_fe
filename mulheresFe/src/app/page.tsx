import Link from 'next/link';
import Carousel from '../../componentes/Carousel';
import styles from '../../styles/Home.module.css';
import Button from '../../componentes/forms/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Projeto Mulheres & Fé</h1>
      <p>
        O projeto Mulheres & Fé é uma iniciativa voltada ao crescimento espiritual, emocional e social das mulheres por meio da fé cristã. 
        Acreditamos no poder da união e da transformação através da Palavra de Deus.
      </p>
      <video controls width="100%" style={{ marginTop: '1rem' }}>
        <source src="/video/mulheresfe.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <Carousel />
      <Link href="/inscricao">
        <Button>Realizar Inscrição</Button>
      </Link>
    </div>
  );
}