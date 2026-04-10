import { NextResponse } from 'next/server';

const startTime = Date.now();

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: 'ok',
    appName: process.env.APP_NAME ?? 'Flui Demo Next.js',
    version: process.env.APP_VERSION ?? '1.0.0',
    uptime: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString(),
  });
}
