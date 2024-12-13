@startuml
!theme minty
hide footbox

start

:User visits the webpage;

:App fetches notes from the API;

:App displays the list of notes;

split

:User clicks "Shopping" category;
:App refreshes the note list based on "Shopping" category;

end;
split again

:User clicks "new" button;
:App displays an add note form;
:User fills out title, color and content and clicks "Add note";
:App adds the note in the API;

split again

:User clicks "Delete" button;
:App deletes the note in the API;

end split

:App refreshes the note list;

stop
@enduml
