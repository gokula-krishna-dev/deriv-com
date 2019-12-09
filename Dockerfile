# Use an official nginx
FROM nginx:alpine

# Copy the build folder to html hosting path 
COPY ./public /usr/share/nginx/html
COPY ./dev.deriv.com.conf /etc/nginx/conf.d/default.conf
