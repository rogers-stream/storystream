Feature: Validating the new Vue Content section
Scenario: Admin logs in
 Given The user is on the Storystream Admin Login Page
 When The user logs in with their "Admin" account
 And The user clicks on a story
 And The user navigates to the Content section
 And The user selects Feeds from the Content list of items
 Given The User navigates to the New Vue Content section
 And The user clicks on the Vue Add Feed Button
 And The User selects and enters an Instagram Hashtag Feed
 And The User navigates to the Vue Burger menu
 And Clicks on the Vue Logout button to end their session
  
  #Scenario: Admin creates an Instagram Hastag Feed
    #Given The User navigates to the New Vue Content section
    #And The user clicks on the Vue Add Feed Button