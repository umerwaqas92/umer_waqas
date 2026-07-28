#!/bin/bash
set -e

# Deploy React portfolio to Cloudflare Pages
# Usage: ./deploy.sh [--branch main]

BRANCH="${1:-main}"
PROJECT="umerwaqas"
DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🚀 Deploying React portfolio to Cloudflare Pages ($PROJECT)..."
npx wrangler pages deploy "$DIR/dist" --project-name="$PROJECT" --branch="$BRANCH"
echo "✅ Done: https://$PROJECT.pages.dev"
