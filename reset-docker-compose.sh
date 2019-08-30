#!/usr/bin/env bash

docker-compose down
docker-compose up -d psql
docker-compose exec psql psql -h localhost -U lisk -d postgres -c "DROP DATABASE lisk_dev" 2> /dev/null
docker-compose exec psql psql -h localhost -U lisk -d postgres -c "CREATE DATABASE lisk_dev OWNER lisk"
docker-compose up -d nodejs
