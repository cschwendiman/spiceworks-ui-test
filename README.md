# Spiceworks Celebrity New Hires #

Modify the included project to match the mockups. Feel free to use the included 3rd party libraries if they are useful to you but please don't add any others.

Task: Create this page: mockups/initial.png

**Details:**

- Only needs to work in the latest version of Chrome.
- Things should line up and look symmetrical but please don't bother measuring. Just estimate heights, widths, padding etc.
- After adding a new celebrity, page should look like this: mockups/after_addition.png
    - Don't worry about persistence or AJAX or anything like that.
    - Cards should occur in the order of addition with newest being at the top-left.
    - Don't worry about form validation, the photo is optional.
- The hover state for a card should look like this (top-left card): mockups/hover_state.png
- After clicking the X as shown on hover, the card should be removed from the page, and the other cards should fall into place.
- Photo URL can be to any image on the internet.
    - Don't worry about proportionate scaling, just force it to a square.
    - If no photo is provided, the default image (included) should be shown

-------------------

### Additionally, please answer following: ###

- Q: What would need to be done to make this an actually useful app?
- A: First, it needs to persist the data in some way. It isn't realistic to keep the window open without refreshing at all times. Next, it would be a good idea to refactor this to support other browsers besides the latest version of Chrome. I used some CSS that still isn't supported in older browsers. I would probably then add some validation to the form to prevent broken images. It could also probably use a delay between submits since rapidly adding cards does weird things to the animation. Lastly, I think making the page responsive would make it more useful since right now you can only use the app on desktop.


#### Would you mind taking a this brief survey after completing this? There's only one question, and it won't affect your chances of future employment with Spiceworks. ####

- Q: What did you think of this test?
- A: I thought it was kind of fun! Much better than the redundant algorithm questions that you usually get in interviews. It was also fun to experiment without regards for browser support - it isn't often I have projects that are only required to work in the latest version of Chrome.
