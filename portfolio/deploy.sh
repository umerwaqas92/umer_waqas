#!/bin/bash
set -e

# Deploy portfolio to Cloudflare Pages
# Usage: ./deploy.sh [--branch main]

BRANCH="${1:-main}"
PROJECT="umerwaqas"
DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🚀 Deploying portfolio to Cloudflare Pages ($PROJECT)..."
npx wrangler pages deploy "$DIR" --project-name="$PROJECT" --branch="$BRANCH"
echo "✅ Done: https://$PROJECT.pages.dev"
