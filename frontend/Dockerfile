FROM node:12.14.1-alpine
LABEL app 4ses
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./package.json
COPY package-lock.json ./packpackage-lock.json
RUN npm install
COPY . .
CMD ["ng","serve","--host", "0.0.0.0","--port", "4200","--disableHostCheck"]