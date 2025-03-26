import logo from './logo.svg';
import './App.css';

/*
App.js is basically the webpage that we see when we run the react app.
It is the main root component of the react app and it serves as the entry point for the React application.
The App is a functional component. It is a JavaScript function that returns a React element.
The function name is App, and it returns a div element containing the header.
The header contains an image, a paragraph, and a link.
The image is the React logo, and the link points to the React documentation.
The paragraph contains the text "Edit src/App.js and save to reload."
The App component is exported as the default export.
This allows the component to be imported and used in other files.
The App component is imported and rendered in the index.js file.
The rendered App component is then mounted to the root element in the HTML document.
When the application is run, the App component is displayed on the screen.
The App component can be further customized and extended to build more complex applications.
The App component is a functional component, but it can also be written as a class component.
Functional components are simpler and easier to read, but class components have additional features and capabilities.
The App component can be styled using CSS or styled-components to customize its appearance.
It can also be divided into smaller components to improve modularity and reusability.
It can interact with other components and manage the application state using React hooks or Redux.
It can fetch data from APIs, handle user input, and perform other tasks to create interactive and dynamic applications.
It can be tested using tools like Jest and React Testing Library to ensure its functionality and behavior.
It can be deployed to hosting services like Vercel, Netlify, or GitHub Pages to make the application accessible on the web.
It can be integrated with other libraries and frameworks to enhance its capabilities and build more advanced applications.
It is the foundation of the React application and plays a crucial role in defining the structure and behavior of the application.
It can be updated and improved over time to add new features, fix bugs, and enhance the user experience.  
Earlier we use class based functions but now we use functional components and App is also a functional component.
Functional components are more efficient and performant.
Functional components are easier to test and debug , read, write, reuse ,maintain,integrate with other libraries and frameworks.
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Raman
        </a>
      </header>

    </div>
  );
}
      // Whatever is written in App.js , will be displayed on the screen when we will run : npm start
      // npm start will run the react app in the browser on localhost:3000
      // npm start is a script that is defined in package.json file
      
      //We are simply creating a function App and returning a div element which is JSX
      // The code between curly braces {} is JavaScript code.

      /*Everything between div is JSX. 
      JSX is a syntax extension for JavaScript. It was written to be used with React and looks like HTML. 
      It allows us to write HTML elements in JavaScript and place them in the DOM(Document Object Model - a programming interface for web documents.) 
      without any createElement() and/or appendChild() methods. 
      JSX converts HTML tags into react elements.
      JSX is 95% like HTML with main differences of syntax like:
      class is written as className,
      for is replaced by: htmlFor , 
      tabindex is replaced by: tabIndex.
      JSX is not a necessity in React. You can write React code without using JSX.
      JSX makes the code more readable and easier to write.
      JSX is faster than writing plain JavaScript code.
      JSX is a syntax extension for JavaScript and comes with the full power of JavaScript.
      JSX is closer to JavaScript than HTML.
      In JSX we are just returning one element which is div. 
      But we can return multiple elements as well within the div element but not in return statement.
      We can return multiple elements by wrapping them in a div element. 
      If we don't want to wrap them in a div element then we can use React.Fragment.
      React.Fragment is a built-in component in React that allows us to return multiple elements without adding extra nodes to the DOM.
      React.Fragment is a lightweight and efficient way to group multiple elements without introducing additional div elements. 
      It is written as <React.Fragment> or <> and </> tags.
      */
export default App;
