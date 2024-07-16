## Build docker image kuraykaraaslan/openvpn
```bash 
docker build  --no-cache -t kuraykaraaslan/openvpn .
docker build -t kuraykaraaslan/openvpn .
```
## Run docker container
```bash
docker run -d -p 3000:3000 -p 1194:1194/udp --cap-add=NET_ADMIN kuraykaraaslan/openvpn
```

## Test the application
```bash
curl http://localhost:8080
```

## Push docker image to docker hub
```bash
docker push kuraykaraaslan/openvpn
```