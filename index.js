#!/usr/bin/env node

const fs = require('fs')
const { info } = require('prettycli')
const { name , main } = require(__dirname + '/package.json')

const content = `
FROM bitnami/node:8.9.1-r0 as builder

RUN mkdir -p /app/${name}
WORKDIR /app/${name}

COPY package.json /app/${name}
RUN npm install --production --unsafe

COPY . /app/${name}

FROM bitnami/node:8.9.1-r0-prod
RUN mkdir -p /app/${name}
WORKDIR /app/${name}
COPY --from=builder /app/${name} .

CMD ["node", "${main}"]
`

const path = process.cwd() + '/Dockerfile'
fs.writeFileSync(path, content, 'utf8')

info('✔︎', 'Added Dockerfile in current directory')
