FROM node:12

ARG PROJECT_PATH=/web/service/api

COPY package.json ${PROJECT_PATH}/package.json
COPY package-lock.json ${PROJECT_PATH}/package-lock.json

WORKDIR ${PROJECT_PATH}

RUN npm install

COPY . ${PROJECT_PATH}

EXPOSE 3000

CMD ["npm", "start"]