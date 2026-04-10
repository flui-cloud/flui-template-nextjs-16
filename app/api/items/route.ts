import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { itemStore } from '@/lib/store';

const createItemSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
});

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ items: itemStore.list() });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = createItemSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const item = itemStore.create(parsed.data.name, parsed.data.description);
  return NextResponse.json(item, { status: 201 });
}
