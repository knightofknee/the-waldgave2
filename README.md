waldgrave.com

Component Structure:

Feed and Profile are the two main pages. 'Create an Entry' is a third screen, it is just a form. And there is the login/sign up page as well.

# Feed

- \*search filter form
- \*Display results

# Profile

- \*Shows all past posts
- \*Shows lists of favorite things to recommend to others, like top tv shows, books and movies
- (not in mvp)Shows journal. to support ideation and knowledge retention, you can save info here. It is basically a minimal blog/wall, you can make a journal entry into a post later. It starts as a private note only you can see, it could become a post in feeds or you could make it visible to others on your wall. You are limited to people coming to your wall and choosing where to look themselves. (I'm not against some sort of RSS feed integration mixed with RSS education, but I also don't want people terminally performing or consuming)
- I want people's walls be one long scrollable thing they control (eventually), so there should be some cool indicator for how long you are into someone's wall. Like the longer it gets, the images change in unique ways, like a gradual color progression or evolutionary stages paired with something that changes in size.

# Create Entry

- \*Make a new post form.
- \*validate they are authorized and have capacity
- offer to save notes for the future

# Login

- \*OAuth with various providers
- \*email and password login
- \*? store info in session to be used by other components

so people use the main page to see and edit their own profile, but for others to see it, we need a separate page that is the same but with no editing and with some sort of permissions check ideally.

# Read-only Profile page

# Other Considerations:

(upgrading heroku stack)
