# AGENTS.md

## Clerk Integration Conventions

This project uses Clerk for authentication with the Next.js App Router. Follow these conventions to ensure proper integration:

### Middleware
- Use `clerkMiddleware()` from `@clerk/nextjs/server` in `proxy.ts`.
- Example:

```typescript
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

### Layout
- Add `<ClerkProvider>` inside `<body>` in `app/layout.tsx`.
- Example:

```typescript
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header>
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
```

### Rules
- **Always**:
  - Use `clerkMiddleware()` in `proxy.ts`.
  - Add `<ClerkProvider>` inside `<body>` in `app/layout.tsx`.
  - Import from `@clerk/nextjs` or `@clerk/nextjs/server`.
  - Use `<Show>` for conditional rendering.
- **Never**:
  - Reference `_app.tsx` or pages router.
  - Use deprecated APIs like `<SignedIn>` or `<SignedOut>`.

### Verify Before Responding
1. Is `clerkMiddleware()` used in `proxy.ts`?
2. Is `<ClerkProvider>` inside `<body>` in `app/layout.tsx`?
3. Are imports only from `@clerk/nextjs` or `@clerk/nextjs/server`?
4. Is it using App Router, not `_app.tsx` or `pages/`?
5. Is it using `<Show>` instead of `<SignedIn>`/`<SignedOut>`?

### Additional Resources
- [Clerk Documentation](https://clerk.com/docs/nextjs/getting-started/quickstart)
- [Organizations Guide](https://clerk.com/docs/guides/organizations/overview)
- [Clerk Components](https://clerk.com/docs/reference/components/overview)
- [Clerk Dashboard](https://dashboard.clerk.com/)