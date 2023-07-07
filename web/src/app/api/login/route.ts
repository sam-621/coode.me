import { NextRequest, NextResponse } from 'next/server';

import { Magic } from '@magic-sdk/admin';

// Create an instance of magic admin using our secret key (not our publishable key)
const mAdmin = new Magic(process.env.MAGIC_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    // Grab the DID token from our headers and parse it
    const didToken = mAdmin.utils.parseAuthorizationHeader(req.headers.get('authorization') ?? '');
    // Validate the token and send back a successful response
    await mAdmin.token.validate(didToken);
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
