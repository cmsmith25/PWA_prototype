For my prototype, I developed a page dedicated to comic book readers. My son loves to read comics on his tablet, and I thought having a PWA
dedicated to being able to read comics, even when offline, would be great to encourage kids to read more. Push notifications could be sent
to the reader to notify them of new comics that are available, or to give a reminder for them to read. I used materialize to style my page
and some CSS. My main page contains a navigation menu for my home page, a page for new comics, a page for the user's comic library, and a 
page for suggestions based on the user's reading habits. On the home page, each franchise contains a button underneath its example cover that
would take the user to page dedicated to that specific superhero. In the future I would add a search bar option and a custom logo to the header.
I had a little bit of trouble with getting the navigation menu to work on a smaller screen. I would style the page more in the future and add
more features. #   P W A _ p r o t o t y p e 
 
 

For the next part of my project, I coded a service worker for my comic book app to give my user the ability to use the app while offline. I coded all of my assets to be cached such as my images and pages, in order to keep the appearance of the app the same while it is used offline. The install event for the service worker will be triggered when the caching promise is complete. Then it will start caching the assets I chose. The activate event will activate my service worker. The fetch event will trigger when a user is requesting data while offline. It will check if the data is available. When I tested my application in the inspect screen, the console log shows that the service worker was registered. 

I also coded a manifest.json file for my application that includes the necessary data for my site. When I ran the inspect on my application, it showed the service worker registered as well as a manifest. 

For the next portion of the project, I have been following along with the class videos and making the necessary changes to my code to use IndexedDB and Firebase. I created a project in firebase and added the script into my code with my associated project. I am very confused on how to test whether this is working or not, as I have been using the View in Live Server on VSC to test all of my other project parts. 