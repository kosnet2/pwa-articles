# Build
FROM node:alpine AS build

WORKDIR /opt/ng
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm install @angular/cli@9.1.9 -g
RUN ng build --prod

# Run
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /opt/ng/dist/pwa/ /usr/share/nginx/html
COPY --from=build /opt/ng/entrypoint.sh /usr/share/nginx

RUN chmod +x /usr/share/nginx/entrypoint.sh
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
