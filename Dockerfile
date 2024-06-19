## Ubuntu 22.04
FROM ubuntu:22.04

# Install dependencies for OpenVPN
RUN apt-get update && apt-get install -y openvpn iptables easy-rsa


# Keep container running
ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]