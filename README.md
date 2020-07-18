# Sell In Auction

This project is a web application in which the users can upload the picture of the items they want to sell. Then, the buyers will make a bid on the item uploaded. When the bidding time finishes, the person who have made the highest bid will be the winner and the seller can contact to the winner via the phone number. 

The backend of the project is developed with django framework and uses React with Redux for frontend. A separate app has been created in django as frontend containing React code which handles the frontend part. To run the project, you should have following tools installed for backend.
1. Django==3.0.8
2. django_rest_knox==4.1.0
3. djangorestframework==3.11.0
4. knox==0.1.0

For the frontend, you have to install node.js. Then, the dependencies that need to be installed for frontend are given below.
1. babel/core==7.10.4
2. babel/preset-env==7.10.4
3. babel/preset-react==7.10.4
4. babel-loader==8.1.0
5. babel-plugin-transform-class-properties==6.24.1
6. webpack==4.43.0
7. webpack-cli==3.3.12
8. axios==0.19.2
9. moment==2.27.0
10. prop-types==15.7.2
11. react==16.13.1
12. react-alert==7.0.1
13. react-alert-template-basic==1.0.0
14. react-dom==16.13.1
15. react-redux==7.2.0
16. react-router-dom==5.2.0
17. react-transition-group==4.4.1
18. redux==4.0.5
19. redux-devtools-extension==2.13.8
20. redux-thunk==2.3.0

To run the application, you need to follow the given steps after cloning the repo. Navigate to the directory, and run the commands.
1. `npm run dev`
2. `cd sell_in_auction`
3. `python manage.py makemigrations`
4. `python manage.py migrate`
5. `python manage.py runserver`

Then, you can open the webpage in browser at http://127.0.0.1:8000/. 




