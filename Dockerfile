FROM cypress/base:latest

WORKDIR /home/cypress/

COPY . /home/cypress/

RUN npm install

CMD ["npm", "run", "cy:run"]
