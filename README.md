# DEPT Assessment

## PERSONAL NOTES

If I had to design multiple pages I would have definitely chosen Next.js but given the fact that I just wanted to code the design and add animations without adding the filtering and form validation features. Then things escalated and all things considered, Next would have been a better choice eventually.

## FEATURES

- Added a gradient black-transparent layer to the cases cards to increase readibility. The white text on top of some backgrounds may not have enough contrast to be readable

- The country selectors (inside the menu) can be clicked and the data is saved in the local storage so that the information will persist even after the page is reloaded

- The menu button has focus when navigated via keyboard but not when clicked

- The scroll-up-button and the menu at the bottom of the page can be accessed via tabbing and responds to the enter keyboard

- Cases section:

  - If the filters are both set to "All" the items are shown in a grid
  - Upon selecting a filter the results are displayed as a list (to prevent the grid from having "holes" in its display)
  - Warning message if no criteria are matched (try Website + Art)
  - The filter bar has a sticky position so the user is able to change filters as he browse the items without scrolling up. Its background color is white on mobile as well to have contrast on the cases background.
  - Upon changing filters the page is scrolled at the beginning of the list

- Form section:

  - Implemented custom validation on all the fields
  - The validation is done upon submitting the form and displays either error messages or valid UI hints
  - If the field has an error, its status is reset upon changing the input value
  - If all the inputs validation are true, an alert is displayed with all the information provided (to kinda simulate an API call) and all fields are reset

- I moved the quoted client text at the end of the clients list.

## KNOWN BUGS

- Bug on safari: menu items triangles are shown on all the menu items. I didn't have a macbook to inspect the issue
