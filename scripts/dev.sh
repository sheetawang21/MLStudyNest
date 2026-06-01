#!/usr/bin/env bash
set -euo pipefail

echo "Start MySQL + Rust backend + Nuxt frontend with Docker Compose"
docker compose up --build
