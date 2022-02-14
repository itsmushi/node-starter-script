#! /bin/sh

read -p "Enter Project Name: " projectName

mkdir $projectName

cd $projectName

npm init -y

echo "" 
echo "Adding .gitignore from node..." 
#npx gitignore node
echo ".gitignore added successfully!"

echo ""

ls
cat package.json


echo "Installing basic npm packages for the project..."

npm i -s nodemon express morgan moment dotenv knex objection objection-find 

echo ""
echo "All packages added successfully! "
echo ""




echo ""


#now you are inside the project dir
#copying basic files... 


cp -a ./../lib/ ./
mv -v ./lib/* ./
rm -r ./lib

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