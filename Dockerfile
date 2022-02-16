FROM node:14
ENV NODE_ENV=production
WORKDIR /usr/src/app
ADD ./ ./
RUN npm install
EXPOSE 3000
CMD ["node","server.js"]