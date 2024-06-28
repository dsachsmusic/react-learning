Note: application is running on the helloec2rdsipaddress server (https://github.com/dsachsmusic/aws-learning/blob/main/development-notes.md)....with the react frontend created in https://github.com/dsachsmusic/react-learning

pip install flask_cors
pip install SQLAlchemy		

On local/dev machine
Edit files in C:\Users\david\working\react-learning\hello-world-app\src\
Copy files from C:\Users\david\working\react-learning\hello-world-app\src\ to dev/build environment (\\wsl$\Ubuntu\home\dsachs\workinglinux\hello-world-app-linuxdir)
Run npm run start from dev/build environment
Copy files from "build folder" (\\wsl$\Ubuntu\home\dsachs\workinglinux\hello-world-app-linuxdir\build) to Flask app repo C:\Users\david\working\flasklearning\flask-application\react-frontend
cd to flasklearning repo 
git add . 
git commit
cd to react-learning repo
git add . 
git commit

On prod server
cd /home/ec2-user/git/flasklearning/
git pull
cp /home/ec2-user/git/flasklearning/flask-application/app.py /home/flaskapp/helloec2rdsipaddress/ 
cp /home/ec2-user/git/flasklearning/flask-application/react-frontend/ /home/flaskapp/helloec2rdsipaddress/ -r
python /home/ec2-user/git/flasklearning/flask-application/app.py