#! /bin/bash

read -p "Enter Project Name: " projectName

echo "Enter the following database credentials which will be written into your .env file."

read -p "Enter database name for the project: "  databaseName

read -p "Enter database username: " databaseUsername

echo -n "Enter database password: "

read -s "Enter database password: " databasePassword

mkdir $projectName

cd $projectName

npm init -y

echo "" 
echo "Adding .gitignore from node..." 
npx gitignore node
echo ".gitignore added successfully!"

echo "Installing basic npm packages for the project..."

npm i -s nodemon mysql2 express morgan moment dotenv knex objection objection-find joi

echo ""
echo "All packages added successfully! "
echo ""
echo ""


#now you are inside the project dir
#copying basic files... 


cp -a ./../lib/. ./

# it appends details to .env file
echo "DB_DATABASE=$databaseName" >> .env
echo "DB_USERNAME=$databaseUsername" >> .env
echo "DB_PASSWORD=localpassword" >> .env



sed -i "s/databaseUsername/$databaseUsername/" database.php
sed -i "s/databasePassword/$databasePassword/" database.php
sed -i "s/databaseName/$databaseName/" database.php


# execute database query to create a database
php database.php

rm database.php

knex migrate:up

nodemon

echo "You are good to go..."
echo "itsmushi@2022"


##tasks
##create files
##create folder
##install packages

##create sample fully controller which user can mimic it for other controller,router, service

##Adding contents to files
##add contents of utils