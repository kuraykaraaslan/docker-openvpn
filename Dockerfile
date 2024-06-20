## Minimal Dockerfile for OpenVPN server and Django controller
FROM alpine:latest

# Install dependencies for OpenVPN
RUN apk add --no-cache openvpn easy-rsa

# Copy OpenVPN configuration files
COPY ./server /etc/openvpn

# Install Dependencies for expressjs
RUN apk add --no-cache nodejs npm

# Copy expressjs files
COPY ./controller /root/controller

# Install dependencies for expressjs
RUN cd /root/controller && npm install

# Start expressjs
CMD ["sh", "-c", "cd /root/controller && npm run start"]




