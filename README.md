# POC OpenID

To run it:

1. Run the Authorization Server

```bash
docker-compose up
```

2. Access the [Authorization Server](http://localhost:8080/auth) with admin/admin user and password;

3. Right below the Keycloak logo, move the mouse to text *Master* and click in *Add Realm*;

4. Fill the name with *openid-demo* and click in *Create*;

5. Click in *Clients > Create*, fill the Client ID field with *client* and click in *Save*

6. Run the React Application and [access it](http://localhost:3000)
