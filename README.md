## Build docker image kuraykaraaslan/openvpn
```bash 
docker build -t kuraykaraaslan/openvpn .
```
## Run docker container
```bash
docker run -d -p 8080:8080 kuraykaraaslan/openvpn
```

## Test the application
```bash
curl http://localhost:8080
```

## Push docker image to docker hub
```bash
docker push kuraykaraaslan/openvpn
```