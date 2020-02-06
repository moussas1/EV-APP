# E & V app
##Description
The project enables the creation of clients, editing their data, deletion and reading.
Providing the CRUD functionalities.

##Running Locally
In the project's root directory, run:
```
docker-compose up -d
docker-compose logs -f
```
This will start 2 containers, one for mongo db and the other for the app

To tear down the container, run:
```
docker-compose down
docker-compose rm
```

##API Spec
### Create client
```$xslt
URL: localhost:3000/api/users
Method: Post
Content-type: application-json
Payload Example: 
{
    "email": "",
    "firstName" : "",
    "lastName" : "",
    "phone" : "",
    "address" : ""
}
Expected Response: This will return a json with the created user
``` 
###To get client by email
```$xslt
URL: localhost:3000/api/users/user/<user-email>
Method: Get
Expected Response: This will return a json with the user
``` 
###To update client data
```$xslt
URL: localhost:3000/api/users/update/
Method: Put
Content-type: json
Payload:
{
    "query": {
        "email": "<user-email>"
    },
    "data": {
        "firstName": "updatename"
    },
    "options": {
        "new": true
   }
}
Expected Response: This will return updated json
```
###To delete a client
```$xslt
URL: localhost:3000/api/users/
Method: Delete
Content-type: json
Payload:
{
    "query": {
        "email": "<user-email>"
    },
}
```
