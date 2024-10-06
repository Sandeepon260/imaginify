import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongoose';

export async function GET() {
  try {
    await connectToDatabase();
    return new Response(JSON.stringify({ connected: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response(JSON.stringify({ connected: false, error: 'Failed to connect to the database' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
