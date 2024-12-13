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
