Steps to create backend server
1. Open root directory in terminal
2. create index.js file
2.5 npm init -y
3. install inital packages which is required to create server(2 package file and 1 node modules folder is formed as a result)
4. Make two files
   a> .env file=> it stores sensitive information which is not supposed to be hosted live, but are used in code. 
        e.g. Mongodb creds, Configuration keys, admin id password, jwt key
        This .env file is not pushed while pushing to github or any other deployment platform
    b> .gitignore file. This file stores name of those files which are not pushed
5. We start creating server on index.js



Requests coming from frontend

1. sending otp
2.  otp verify
3. Details submission of user
4. Request for getting all users


Database is compass when we were working on local and atlas while hosting
Local => compass
Live=> Atlas\

Atlas Configuration
1. Open Atlas official site
2. Sign in with google
3. Click New Project on top left
4. Click on build Database
5. Enter username and password and save password
5. Go to Network access and select "Allow access from anywhere"
6. Come on Database and click on connect
7. Connect your application
8. You will get one URL, copy and save it.
9. Thats it, Now paste the copied url in your db connection code of server 
    by replacing password with actual password