# TableBookingSystem

Testing procedure:
--------------------
1. Clone this repository
2. npm install
3. nodemon server.js,  Application is up and running.


use following day_id's to test
-------------------------------
monday: 5ef4d2d28a7b8862c99cfa48</br>
tuesday: 5ef51d51f02bf5bd9ecbddaa</br>
wednesday: 5ef58bb442779bbe5984fe4a</br>
thursday: 5ef58c6b42779bbe5984fe5d</br>
friday: 5ef58cad42779bbe5984fe6e</br>
saturday: 5ef58cd442779bbe5984fe7f</br>
sunday: 5ef58d0242779bbe5984fe80


To see available slot for each individual day:
----------------------------------------------
http://127.0.0.1:1234/book/day_id (GET request)

Example: http://127.0.0.1:1234/book/5ef51d51f02bf5bd9ecbddaa

This returns all available slot with their "slot_id". use this "slot_id" to book table.

**Note: I have created 4 slots for each day as follows:</br>
        1. 10 am - 11 am</br>
        2. 11 am - 12 pm</br>
        3. 12 pm - 1 pm</br>
        4. 1 pm - 2 pm
        
To booking a slot:
--------------------------
http://127.0.0.1:1234/book/day_id/slot_id (POST request)

Example: http://127.0.0.1:1234/book/5ef51d51f02bf5bd9ecbddaa/5ef4eeb2db60a1f9d8e91c0b


Cancel booked slot:
-----------------------
http://127.0.0.1:1234/book/cancel/day_id/slot_id (POST request)

Example: http://127.0.0.1:1234/book/cancel/5ef51d51f02bf5bd9ecbddaa/5ef4eeb2db60a1f9d8e91c0b


