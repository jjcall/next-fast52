/**
 * -------------------------------------------------------------
 * middleware.ts
 *
 * This file runs on every matched request **before** rendering pages or APIs.
 * It is useful for:
 * - Protecting routes (Auth Guard)
 * - Redirecting users
 * - Handling localization
 * - Enabling feature flags
 * - Rate limiting or bot detection
 *
 * ⚠️ Runs on Edge Runtime (no Node.js APIs)
 *
 * -------------------------------------------------------------
 * Example: Uncomment the code below to protect the `/dashboard` route.
 */

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//
