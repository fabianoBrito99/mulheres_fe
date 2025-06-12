import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const id = req.nextUrl.searchParams.get('data.id');
  const type = req.nextUrl.searchParams.get('type');

  const log = {
    receivedAt: new Date().toISOString(),
    type,
    id,
    body
  };

  const filePath = path.join(process.cwd(), 'src/data/payments.json');
  let payments = [];

  try {
    const existing = fs.readFileSync(filePath, 'utf8');
    payments = JSON.parse(existing);
  } catch {
    payments = [];
  }

  payments.push(log);

  fs.writeFileSync(filePath, JSON.stringify(payments, null, 2));

  return NextResponse.json({ received: true });
}