"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Carousel.module.css';

const images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      <Image src={images[index]} alt="Foto Mulheres Fé" width={600} height={400} />
    </div>
  );
}