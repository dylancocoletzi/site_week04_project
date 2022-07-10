# Week 3 Assignment: Life Tracker

Submitted by: **Dylan Cocoletzi**

Deployed Application: [Lifetracker Deployed Site](life-tracker-02.surge.sh)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button. 
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [x] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [x] The detailed activity page should display a feed of all previous tracked activities.
- [x] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [x] The activity tracked should be given a unique id for easy lookup.
  `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. (🚫 Remove this paragraph after adding schema link)
  * [Table Schema](📝ADD LINK TO TABLE SCHEMA.sql HERE!) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video


![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/86747062/177384268-dc69740b-9445-4115-91b0-4ae5506c038a.gif)


![ezgif com-gif-maker-2](https://user-images.githubusercontent.com/86747062/177384882-5e4a8343-668a-4a4b-bb02-189cdcbbec2e.gif)


![ezgif com-gif-maker-3](https://user-images.githubusercontent.com/86747062/177385415-c0bd9a68-d658-4c59-8dc7-ab7318da3104.gif)

### Week 2

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/86747062/178084046-4ab7faa5-2122-4b9d-9d38-2ba57782f763.gif)


![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/86747062/178084119-5a51f7a0-f425-4028-bb01-f9953a048733.gif)


![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/86747062/178084264-819ae9a5-6294-4f14-9de5-4a1357232b61.gif)


![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/86747062/178084314-34126b00-c308-47ab-9ada-35f9721fe149.gif)


![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/86747062/178084384-1892aa70-3921-4cc5-9f6b-fef1bb2464cc.gif)


![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/86747062/178084471-22ba06aa-c8e7-4158-a0a3-b174d802d627.gif)



### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes the topics in the lab did prepare me because we had to implement similar features to our website.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would spend more time to get the backend to work and be able to connect it to my front end.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

What went well was I was able to display my 5 core features I completeted but I notice that one of my peers connected their project and I want to do that.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout to all my pairs.
