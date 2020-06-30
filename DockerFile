# Get the node:12.16.3 docker image from dockerhub.com
FROM node:12.16.3
# create the /code directory
WORKDIR /code
# define an environmental variable PORT=1000
ENV PORT=1000
# copy package.json from our project to the docker image
COPY package.json /code/package.json
# copy package-lock.json from our project to the docker image
COPY package-lock.json /code/package-lock.json
# run npm install in the docker image, adding our node module to the docker image
RUN npm install
# copy everything else from our project into the docker image, not including the files in the docker ignore
COPY . /code
# run node server.js
CMD ["node", "server.js"]