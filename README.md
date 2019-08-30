# Lisk Docker Compose

A simple straight forward Docker Compose setup for developing a Lisk Blockchain.

### Get started

We use [nvm](https://github.com/nvm-sh/nvm#install--update-script) and [Docker Compose](https://docs.docker.com/compose/install/). If you don't have them installed yet, it is time.

Select the correct version of NodeJS

```bash
nvm use # Will use the NodeJS version defined in .nvmrc
npm i
sh reset-docker-compose.sh # This will destroy the database and restart the blockchain, we can use it get started too
```

When you want to reboot your blockchain to take into account your modification, you can run

```bash
sh reboot-blockchain.sh
```

### Notes

The ports of Posgres are exposed to allow connection from a development tool. It is not required to run the blockchain, and of course it is strongly recommended to disable it if you expose you server to the outside.
