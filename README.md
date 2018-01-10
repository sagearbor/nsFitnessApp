### SageNOTE
### Originally cloned from Giftler NS app - WORKING ON iPHONE (emulator not try ANDROID yet)
### Changed to my firebase.  Can create account, sign in, add image, add item, add descripton,
###     and remotely configure message.
###     I added a mapNow folder which now goes to new start screen coded in mapNow, no links for there work currently.  
###     Also got static 8 buttons in place (not connected to fxn), so select dropdown not right, need plugin
###   ABOVE IS DONE IN PREVIOUS VERSION 08
###   GIT pull down seemed broken, but my saved vesion 8 worked so Im started there, 
###         edited one button and saving as v11, saving to github.  
###   Version 9,10 will all be unfunctional
###   Added funcitonal click to moveALCreate in version12
###   In Version18 Group creation working to write - UID, group name, description, ~privacy, ~date.  Storing privacy 
###     but as any string and should be controlled dropdown or 0-1.  Date is a string and doesnt make sense so need to fix.  
###     Group component has 'id' which I can maybe drop.  Need to add a new page to add members to group, also view groups.
###   In Version21 - writing to User (cap U).  Also writing admin when creating a new group.  Also changed date to datInMilliseconds
###     and plan to have similar for user.  Hardcoded open into uesr group privacy, fix in spring. Add admin itoken as member, 
###     need to make array and include uesrId. TODO - for user I will have dobYYYY, dobMM, dobDD, and then concatenate them and use 
###     dateparse() maybe to also store dobInMilliseconds.  Currently hard sets admin
###     as current user, but should add (push?) current user to add to admins OR fail if group already exists probably.
###   In Version23 - added userId in 'users' to match Firebase login with SMAE uid, also got fields inputting in user - need to fix quotes. 
###   In Version24 - started to get datePicker working, dobYYY, dobMM, dobDD stored in FB, but not concat as date.
###     Username and password required to be 6 characters long and email needs @. 
### NEXT STEPS
###   3)GPS 
###   3.1) Start/Stop record users current GPS, write to FB (prob NOT geofire, use NS every 1min ... testAlphaMode=every5sec)  *** need ***
###   3.2) Start/Stop record ALL users in group GPS, write to FB every minute *** NEED ***
###   3.3) Record at end of event - 
###          3.3a)users - eventUID:[total (dist, time, avg heartrate, avgspeed), per lap (times, hearrate, maxSpeed, minSpeed), place finishing ???]
###                     - update historical average (month, lifetime) <--- better? to have DB process do this nightly *unless dashboard using immediately)
###                     - GPS per 5sec??? (user specific map - could be diff than event or they are only runner) 
###          3.3b)group - eventUID:[grpTotal (dist, time, avg heartrate, avgspeed), grpPerLap (time(ms), heartrate, maxSpeed, minSpeed), place finishing ???
###          3.3c)event - eventUID: groups, totDist, results:[1st:[userUID,username,fName,lName],2nd:userUID[userUID,username,fName,lName]
###                     - GPS: map every 5sec?
###   3.4) MAP   
###         3.4a) MAP - show where you are , nice start after login page ** WANT **  
###                   > ADD Start/Stop BUTTON TO RECORD MOVEMENT EVERY 5 SECONDS
###         3.4b) MAP - show where others in group are (side in grey if offline = attendance)  
###   5.1) Username login *** need ***
###   5.2) Username logini via BARCODE scan *** NEED ***
###   5.3  Username - make sure unique and only sring, numbers, underscores, or dashes
###   6.06) Groups --> Join (type in) ** WANT ** 
###          ... later view current groups, view local groups, table groups from starting string 
###   7) Attendance view for group (first list, then on map by color)
###   8.07) Add sidedrawer (now free) - Join, Create --> Group, Game, Goal 
###          https://www.nativescript.org/blog/using-cross-platform-native-sidedrawer-component-in-nativescript
###
###   50)
###   - ADD 3HASH IN TOP LEFT
###       maybe use "nativescript-angular-drawer-template" 
###         https://www.npmjs.com/package/nativescript-angular-drawer-template
###   50.1)     > GO
###   50.2)     > JOIN GROUP
###   50.3)     > CREATE - GROUP , GAME
###                * GAME THAT DELAYS START FROM HISTORICAL AVG TIME
###   50.4)     > DASHBOARDS
###               * PERSONAL HISTORY - MILES/TIME (LINE)
###               * A vs B (Bargraph over time, dropdown A ann B can be self or group you are a member of)
###   50.5)     > SETTINGS
###   50.6      > HELP
###   -
###   -
###   -
###   -



# Giftler - Make managing holiday wish lists super easy!

This codebase is a demo to show how to use Angular 2 with NativeScript and Firebase to create a mobile app for holiday wish-list management.

- Using the Firebase Authentication module, register, log in, and manage your password.
- Using the Firebase Realtime Database, manage data flow (create, edit, and delete).
- Using Firebase's Remote Config service, send messages to your app
- Using the Storage Bucket that comes with your Firebase account, save photos of your gifts!

Read the article, forthcoming on various blogs <TBD>

![Demo on Emulators](./screenshots/giftler-crossplat.gif)

