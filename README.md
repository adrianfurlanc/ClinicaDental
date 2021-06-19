<h1 align="center">
  <br>Data Base of a Dental CLinic (MongoDB)
</h1>

---

Challenge nº6 from the Fullstack Developer Bootcamp at <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a>, where our mission is to create a backend "no related" database for a dental clinic application.

In this project, we have created as mentionned before, a dental clinic database that allows clients/users to create appointments and register them. These users can also choose the dentist from the collection "dentist" and add it to the collection "appointment". 

# The project. 🔧

## Phase 1:

Starting date: June 1st 2021. <br>
Due date: June 8th 2021.

## Phase 2:

Starting date: June 8th 2021. <br>
Due Date: June 15th 2021.

We have used the Trello tool so we could share the tasks between the members of the project, in order to have a better organization.

<img src="img/Trello.png" width=1500>

## How to initialize the Project 

The first step is to clone the repository:

### `npm i`

Then, install the project dependencies in your local repository.

### `npm i express mongoose nodemon bcrypt jsonwebtoken cors`

Run the server.

### `npm start`

Once the server is up and running

## `Open Postman`

First, you will need to start Postman.

<a href="https://www.postman.com/"><img src="img/runpostman.png" width="150"></a>

<img src="img/DentalClinic-Postman.png" width="1500">

Finally, enter the endpoints petitions in Postman and send them.

## Endpoints in Postman

- Users
   - GET /user --> Find all users from the dental clinic.
   - POST /user/create --> Creates new User.
   - UPDATE /user/modify --> Modifies a User's Phone and Address values. 
   - DELETE /user/delete --> Deletes an User.
<br>

- Dentists
   - GET /dentist --> List all dentists from the dental clinic.
   - POST /dentist --> Hires a new dentist in the dental clinic.
   - GET /dentist/speciality --> List a dentist with a specific specialty.
   - DELETE /dentist/ --> Fires a dentist.
<br>

- User Login
   - POST /login --> Sign in as a user and a token will be created.
<br>

- Appointments
  - GET /appointment --> Returns all appointments in the db.
  - POST /appointment --> Creates an appointment in the db.
  - POST /appointment/pending --> Returns pending appointments in the db.
  - POST /appointment/past --> Returns past appointments in the db.
  - UPDATE /appointment/modify --> Modify appointment isActive status.
  - DELETE /appointment/delete --> Deletes an appointment from the db.
  <br>

# Dependencies used for the realisation of the project:

<img src="img/express.png" width=70 height=50>
<img src="img/mongoose.jpeg" width=70 height=50>
<img src="img/mongodb.png" width=70 height=50>
<img src="img/nodejs.png" width=70 height=50>



## Developers ✍️

-[Adrian Furlan](https://github.com/adrianfurlanc),
-[Guillermo Raez](https://github.com/GuillermoRaez).

---