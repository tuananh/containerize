# containerize [![npm](https://img.shields.io/npm/v/containerize.svg?style=flat-square)](https://npm.im/containerize)

## Usage

```
npx containerize
```

this creates a `Dockerfile` in your working directory

```
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
```

## License

MIT © [Tuan Anh Tran](https://github.com/tuananh)
