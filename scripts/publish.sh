#!/bin/bash

npm update
npm run build

VERSION=$(node scripts/increment-version)
echo "new version: $VERSION"

git add .
git commit -m "v$VERSION"
git tag v$VERSION -f
git push

npm publish
