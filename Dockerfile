FROM mhart/alpine-node:8

#Create the npm install layer independently
RUN mkdir /app
COPY app/package.json /app
COPY app/config /app/config
COPY /dist /app/public
RUN cd /app && npm install

# Add app source files
ADD app /app/

WORKDIR /app
ENV NODE_ENV production
EXPOSE 6001
CMD ["node", "main.js"]
