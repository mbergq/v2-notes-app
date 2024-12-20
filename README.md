# Goals

This is a webapp that enables you to add notes with an assigned category. It allows
you to also view and delete notes.

# Built with

- Vite
- React
- Drizzle ORM
- Tailwindcss
- Cypress

# Getting started

## Prerequisities

- Have Bun installed: https://bun.sh/
- Have Docker installed: https://www.docker.com/

## Installation

Initialize a database with Docker

1. docker run -p 127.0.0.1:yourchoiceofport:5432 --name yourdbname -e POSTGRES_PASSWORD=yourdbpassword -d postgres
   (reminder to pick any port but 8080 since Express will occupy 8080 in this project)

2. Go into backend folder and add an .env file with your database connection string like so:
3. DATABASE_URL=postgres://postgres:yourdbname@127.0.0.1:yourchoiceofport/postgres

## Install dependencies and add tables to database:

Navigate to root in the backend folder run:

- bun install
- bunx drizzle-kit generate
- bunx drizzle-kit migrate

## Insert data

Some of the functions in this app won't work unless some data has been added.
Run these queries in postgresql to make sure the app won't fail.

### To use the postgresql interface Drizzle ORM provides you can run:

- bunx drizzle-kit studio

Use the link to open the interface in the browser.

Run the insertions in the DB:

- INSERT INTO category (name) VALUES ('shopping');

- INSERT INTO category (name) VALUES ('to-do');

- INSERT INTO category (name) VALUES ('study');

## Run the backend

At root in backend folder run:

- bun server.ts

## Install and run frontend

Go to frontend folder and run these commands:

- bun install
- bun run dev

## Run Cypress tests

At root in frontend run these commands:

- npx cypress open
- Run the e2e tests in this order for them to work as intended:

1. add-note.cy.ts
2. navigation.cy.ts
3. DeleteNote.feature
4. exit-modal.cy.ts

### Changelog

Mon 2 Dec

Created foundation for the project with remix, this was made on a different repo:
https://github.com/mbergq/notes-app

Tue 3 Dec

Tried to implement my first component test but I could not get Cypress to work with
Remix and React Router v7. So i made a new repo, **this** repo.

Wed 4 Dec

Worked on implementing my first component through "TDD". Managed to get my
first test green.

Thu 5 Dec

I've added styling to set the foundation for further components and functions. Also
added colorthemes based on numbers via Tailwind. These ID's will enable me to set
correct color based on received data from the backend.

Fri 6 Dec

Edited table row of color to use an enum with 5 different colors, will use these
later for customization of notes. Added post functionality to the api and started
to implement the modal / form where notes will be added.

Mon 9 Dec

Added a lot of styling and App now imports the NoteModal so it can be used. Added
functionality so that the modal works well. Post requests are working as intended.
Added a new category table to be able to filter notes on specific
categories in the future. Soon ready to start implementing a lot of tests.

Tue 10 Dec

Today I've refactored some code in the api and essentially restructuring the data response.
Added dynamic routing to be able to filter out notes on different categories. Edited
my first component test to run via the new data structure. Had some real issues just starting
cypress in the first place, a reboot fixed it.. Also spent a lot of time trying to understand
why my test would crash on "uncaught exception, React10.useContext(..) is null." Turns out
that if I comment out <Link /> components in App it all runs fine..

Wed 11 Dec

Fixed the issue of notes not rendering upon "initial click". This was fixed with "TDD" method.
Have done a lot of refactoring both in backend and frontend to follow DRY as much as possible.
Added some e2e tests.

Thu 12 Dec

Added functionality to delete a note upon click. Started with a BDD test to use TDD.
Found out my last check of the test wasn't working as intended, will need to fix that.
Did some refactoring in the API. Added some styling.

Fri 13 Dec

Fixed last check of delete note test. Dynamic displaying of categories imple
mented. Did some refactoring in the API. Added diagram.

Tried to implement code coverage but ran into a lot of trouble so I had
to scratch it for now.

Mon 16 Dec

Added minor api changes regarding promises for fetching data. Spent half of the
day trying to implement code coverage but kept running into issues to it's put on hold for now. Have begun working on implementing ability to choose not category.

Tue 17 Dec

Added function in api to enable inserts of category relation. Tried to let the api function be as dry as possible. Edited some e2e tests. Added styling.

Wed 18 Dec

Added new e2e test. Added instructions for setting up project.
