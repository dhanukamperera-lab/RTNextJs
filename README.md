# RanasTech Interiors & Maintenance (Next.js)

Modern, static-exportable Next.js site for an interior design and maintenance company in Dubai. Inspired by https://ranastech.com.

## Development

```bash
npm install
npm run dev
```

## Build & Export (S3-ready)

This project is configured to export a static site (see `next.config.js` with `output: 'export'` and unoptimized images).

```bash
npm run s3:export
# Output in ./out
```

## Deploy to Amazon S3

1. Create an S3 bucket (enable public access for static website or use CloudFront).
2. Enable static website hosting on the bucket (or set up CloudFront for HTTPS).
3. Upload contents of `out/` to the bucket root.
4. If using S3 static hosting directly:
   - Index document: `index.html`
   - Error document: `404.html` (optional)

### aws-cli (optional)

```bash
aws s3 sync ./out s3://YOUR_BUCKET_NAME --delete
```

## Notes

- All images are unoptimized and local, suitable for static export.
- Routing: `/` (home) and `/contact`.
