FROM node:12-alpine

RUN wget -q https://github.com/mikefarah/yq/releases/download/3.2.1/yq_linux_amd64
RUN mv yq_linux_amd64 /usr/bin/yq
RUN chmod +x /usr/bin/yq

RUN yq --version

COPY ./dist /app

ENTRYPOINT ["node","/app/index.js"] 