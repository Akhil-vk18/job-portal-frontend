### Deployment Notes
- Added `vercel.json` with rewrite rules so that refreshing routes like `/jobs` doesn’t cause 404 errors.
 This rewrite rule ensures that all routes (like /jobs, /profile, etc.) are redirected to index.html so React Router can handle them.
 Without this, refreshing a non-root route causes a 404 on Vercel.