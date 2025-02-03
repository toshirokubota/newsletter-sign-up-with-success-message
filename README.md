# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot - desktop](./screenshotDesktop.png)
![Screenshot - desktop active state](./screenshotDesktopActive.png)
![Screenshot - desktop confirmation](./screenshotDesktopSuccess.png)
![Screenshot - mobile](./screenshotMobile.png)
![Screenshot - mobile confirmation](./screenshotMobileSuccess.png)

### Links

- Solution URL: [https://github.com/toshirokubota/newsletter-sign-up-with-success-message](https://github.com/toshirokubota/newsletter-sign-up-with-success-message)
- Live Site URL: [https://toshirokubota.github.io/newsletter-sign-up-with-success-message/](https://toshirokubota.github.io/newsletter-sign-up-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I had a problem with showing/hidding the error message. Previously, I had a similar design, but that time, the message was placed after an input box. I was able to show/hide the message with not(:placeholder-shown):invalid pseudo class. 
This time, the error message has to appear above the input box. Perhaps, I could move the message layout in css so that it appears above but located below in the DOM tree. When I think about it, this approach may make sense more. But what I ended up doing was to apply invalid:focus-within pseudo class on the form. So I learned a new pseudo class, focus-within!

### Continued development

I am in the middle of the Javascript Fundamentals learning path. So I will continue the path until the end.

I still struggle often with placement of elements (at center and near the bottom). 

I will keep practicing various layouts, work more efficiently and write clearner code.

### Useful resources

## Author

## Acknowledgments
