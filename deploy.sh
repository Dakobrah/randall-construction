#!/bin/bash
# Deployment script for Cloudflare Pages
# Deploy using wrangler pages
npx wrangler pages deploy .svelte-kit/output/client --project-name=randall-construction
