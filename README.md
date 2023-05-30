===== CAPSTONE PROJECT README =====

Hello there,

My name is Adam Sagar and I am excited to introduce my capstone project for the Institute of Data's Software Engineering program: DISC DETECTIVE.

This website is the result of everything I have learned during the intensive three-month bootcamp. The front-end is built using React, while the back-end utilises a Node.js-powered Express server that connects to a MySQL database.

I came up with the idea for this website from my personal hobby, disc golf. For those who are not familiar, disc golf is similar to regular golf, but instead of a ball, a disc (frisbee) is used and the hole is replaced with a basket.

Losing a disc (or even several) during a round is a common occurrence, whether it be over a fence, in thick bushes, or even in a nearby pond or lake. This can be incredibly frustrating and may result in lost time and money spent replacing the lost disc.

While some people include their name and contact information on their discs, many others do not, making it nearly impossible to return the disc to its owner. This website aims to address this problem by providing a platform for disc golfers to both create and browse posts of lost discs.

To get started with DISC DETECTIVE, simply create an account and begin browsing the database of lost and found discs. If you don't see your lost disc or the disc you found listed, you can create a post for it by filling out a simple form. From there, other users can comment on the post to help retrieve the disc. It's that easy!

At present, DISC DETECTIVE is only available in my hometown of Christchurch, New Zealand. However, there are plans to expand the website nationwide and potentially beyond in the future.

To try it out you will need Visual Studio Code, Node.js and MySQL.


----- DEPLOYMENT -----

APPLICATION SETUP:


        1   Clone the repo in VS Code

        2   Open up a terminal and type

                cd CAPSTONE
                cd front-end
                npm install

                This will install all the dependencies for the front-end

        3   Open up another terminal and type

                cd CAPSTONE
                cd back-end
                npm install

                This will install all the dependencies for the back-end


DATABASE SETUP:

        1   Create a .env file in CAPSTONE/back-end and add the following:

                DB_NAME=capstonedb
                DB_USER= *your MySQL user goes here*
                DB_PASSWORD= *your MySQL password goes here*
                DB_HOST=localhost
                DB_PORT=3307

                PORT=8001

        2   Open MySQL Workbench and create a new schema called capstonedb. You can change the name but make sure to update your .env file.


RUNNING THE APP:

        1   Go back to your terminals in VS Code

        2   Type npm start in CAPSTONE/back-end

        3   Type npm run dev in CAPSTONE/front-end

        4   Hold ctrl and click   ➜  Local:   http://localhost:5173/ to launch the app


-----PROJECT PRESENTATION VIDEO-----

You can find a comprehensive presentation of this project in the repository. In the video, I discuss its features, functionalities, and the thought process behind its development. It provides valuable insights into the project's goals and highlights its key aspects.


Thank you for using DISC DETECTIVE! Keep an eye out for me — I'll be the one wading around in ponds or up trees.

Adam