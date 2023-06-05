#!/usr/bin/env bash
# Run unit tests

echo '🔵 - Running unit tests'
echo ''

DIR="$(cd "$(dirname "$0")" && pwd)"

source $DIR/utils/load-env.sh

if [ "$#" -eq  "0" ]
  then
    yarn test -c ./vitest.config.unit.ts
else
    yarn test -c ./vitest.config.unit.ts --run
fi
