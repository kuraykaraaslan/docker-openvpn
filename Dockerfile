## Minimal Dockerfile for OpenVPN server and Django controller
FROM ubuntu:22.04

# Systemd is required for OpenVPN
RUN apt-get update && \
    apt-get install -y wget && \
    wget -O /usr/bin/systemctl https://raw.githubusercontent.com/gdraheim/docker-systemctl-replacement/master/files/docker/systemctl.py && \
    chmod +x /usr/bin/systemctl && \
    apt-get install -y nginx && \
    apt-get clean

# Install dependencies for OpenVPN
RUN apt-get update && apt-get install -y openvpn easy-rsa

# Update the package list and install prerequisites
RUN apt-get update && \
    apt-get install -y curl gnupg2 && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js and npm from the NodeSource repository
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest && \
    rm -rf /var/lib/apt/lists/*

# Verify the installation
RUN node -v && npm -v

# Copy expressjs files
COPY ./express /root/express

# Install expressjs dependencies
RUN cd /root/express && npm install

EXPOSE 1194/udp 3000

# Start Node.js app
CMD ["sh", "-c", "cd /root/express && npm run start"]

# if INTERFACE_DISABLED env variable is set to true, then don't start expressjs instead run cmd tail
#CMD ["sh", "-c", "if [ \"$INTERFACE_DISABLED\" = \"true\" ]; then tail -f /dev/null; else cd /root/express && npm run start; fi"]   # Start expressjs

#KEEP CONTAINER RUNNING
#CMD ["sh", "-c", "tail -f /dev/null"]   