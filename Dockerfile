FROM node:16
COPY . .
RUN npm install -g @nestjs/cli
RUN cd ./packages/api; npm i; npm run build
RUN yarn install; yarn build;
CMD cd ./packages/api; yarn start:prod
