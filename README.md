# freeCodeCamp – Markdown Previewer

## Project Summary
This project is a markdown preview web app created as a learning project for freeCodeCamp's Front End Development Libraries course. 

This project uses the React, Bootstrap, Marked, and SASS libraries and frameworks. The project also utilized Node.js as the runtime environment.

[View the web app here](https://tech-gubbins.github.io/fCC-Markdown-Previewer).

## Project Requirements

**Note: React 18 has known incompatibilities with the tests for this project (see [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objective**: Build an app that is functionally similar to this: [https://markdown-previewer.freecodecamp.rocks/](https://markdown-previewer.freecodecamp.rocks/).

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1**: I can see a ```textarea``` element with a corresponding ```id="editor"```.

**User Story #2**: I can see an element with a corresponding ```id="preview"```.

**User Story #3**: When I enter text into the ```#editor``` element, the ```#preview``` element is updated as I type to display the content of the textarea.

**User Story #4**: When I enter GitHub flavored markdown into the ```#editor``` element, the text is rendered as HTML in the ```#preview``` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: [https://cdnjs.com/libraries/marked](https://cdnjs.com/libraries/marked)).

**User Story #5**: When my markdown previewer first loads, the default text in the ```#editor``` field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

**User Story #6**: When my markdown previewer first loads, the default markdown in the ```#editor``` field should be rendered as HTML in the ```#preview``` element.

**Optional Bonus (you do not need to make this test pass)**: My markdown previewer interprets carriage returns and renders them as ```br``` (line break) elements.

You can build your project by [using this CodePen template](https://codepen.io/pen?template=MJjpwO) and clicking ```Save``` to create your own pen. Or you can use this CDN link to run the tests in any environment you like: [https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js)

Once you're done, submit the URL to your working project with all its tests passing.

## Additional Notes
1. It would seem that this particular project's test suite works with React 18. I had no issues testing my code.
1. I did not impliment the optoinal bonus user story, interpreting carriage returns and rendering them as line break elements. 