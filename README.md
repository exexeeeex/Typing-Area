# Typing-Area
## A simple application to check the printing speed

To launch: 
```
cd /src/deployment/composes/
docker-compose -f ./compose.[configuration].yml --verbose up --build
```
Or
```
cd /src/
yarn dev
```

<p>If configuration = dev then app port - 3000, else app port - 80</p>

Don't forget to add ssl certificates to the /deployment/composes/.ssl folder if you are going to use prod
