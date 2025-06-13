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

  const filePath = path.join(process.cwd(), 'src/data/payment_logs.json');
  let logs = [];

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    logs = JSON.parse(content);
  } catch {
    logs = [];
  }

  logs.push(log);
  fs.writeFileSync(filePath, JSON.stringify(logs, null, 2));

  return NextResponse.json({ received: true });
}