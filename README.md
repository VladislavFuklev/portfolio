This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Tailwind CSS

This project is configured with Tailwind CSS v4.

- Entry point: `app/globals.css` contains `@import "tailwindcss"` and inline theme via `@theme`.
- PostCSS: `postcss.config.mjs` uses the `@tailwindcss/postcss` plugin.
- Config file: Not required in v4. You can customize tokens in CSS using `@theme` or add a `tailwind.config.ts` if you prefer a file-based setup.

Common usage examples in components:

```tsx
export default function Example() {
	return (
		<div className='p-6 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 rounded-xl'>
			<h2 className='text-2xl font-semibold'>Hello Tailwind v4</h2>
			<p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
				Edit app/page.tsx to get started.
			</p>
		</div>
	)
}
```

Development:

```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
