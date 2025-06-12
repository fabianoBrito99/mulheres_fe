'use client';

import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState('');

  const handleClick = async () => {
    const response = await fetch('/api/checkout', { method: 'POST' });
    const data = await response.json();

    if (data.init_point) {
      setStatus('Redirecionando para o pagamento...');
      window.location.href = data.init_point;
    } else {
      setStatus('Erro ao criar link de pagamento.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Inscrição - Checkout Pro</h1>
      <button onClick={handleClick}>Pagar R$110 via Mercado Pago</button>
      <p>{status}</p>
    </div>
  );
}