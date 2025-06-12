import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST() {
  try {
    const response = await axios.post('https://api.mercadopago.com/checkout/preferences', {
      items: [
        {
          title: 'Inscrição Mulheres Fé',
          quantity: 1,
          currency_id: 'BRL',
          unit_price: 10
        }
      ],
      back_urls: {
        success: 'https://www.google.com',
        failure: 'https://www.google.com',
        pending: 'https://www.google.com'
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_types: [
          { id: 'ticket' },
          { id: 'atm' },
          { id: 'bank_transfer' },
          { id: 'prepaid_card' },
          { id: 'digital_currency' }
        ]
      }
    }, {
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    return NextResponse.json({ init_point: response.data.sandbox_init_point || response.data.init_point });
  } catch (error: any) {
    console.error('Erro ao criar link Mercado Pago:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Erro ao criar link de pagamento' }, { status: 500 });
  }
}
