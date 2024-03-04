
# Sequra Widgets

This project is a solution for the Frontend Challenge proposed by Sequra, in which it is required to implement a widget to integrate into a demo website that could be published by an e-commerce shop.


### Install and run
> Important: For the proper operation of the component, it is necessary to have the Node.js server `seQura Mocked API` running at `http://localhost:8080`. If the server is started at a different path, you just need to update the `API_BASE_URL` constant in [Config.ts](src/domain/Config.ts)

To download and install dependencies in your local machine you have to do:
```
$ git clone https://github.com/raulmeradev/sequra-widgets.git
$ cd sequra-widgets
$ npm i
```

In the project directory, you can run the app in **development** mode doing:
```
npm run dev
```
> The app will be running on http://localhost:5173/. Open this URL in a browser window.

Also you can build the app in **production** mode typing:
```
npm run build
```
> The production mode will **not** export the entire React app, just the widget will be exported as a Web Component, with the aim of making it easier to import and use by an e-commerce. The code will be minified and deployed in a new folder inside the root folder named `dist`.


### Testing
To run the code testing, please do:
```
npm run test
```

If you want to check the testing coverage, you have to type:
```
npm run coverage
```

### Technical choices

The project has been developed with the following technology:
- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Web Components](https://www.webcomponents.org/)

The reason for implementing this solution with a React project using Typescript is primarily because it is the technology I currently feel most comfortable with for agile and efficient development. To set up and bundle the project, I have relied on the "Vite" framework. NextJS could also have been a good choice, but I believe it includes too many features (SSR, API Routes, middlewares, etc.) that were not necessary for this small project. Hence, I opted for a more concise and lightweight framework.

I prefer incorporating Typescript in my code because it not only facilitates early detection of potential errors but also improves code readability, making it more understandable and ensuring the quality, maintenance, and scalability of the code.

In addition, as evident after take a look the code, I have used hexagonal architecture and DDD in the application development to provide clean code, isolating each responsibility in its corresponding layer to avoid code couplings. This approach ensures that the logic and modeling of the application remain highly scalable and flexible, remaining unaffected by any changes in infrastructure, such as a frontend framework switch.

Considering the concept of a Web Widget, I understand that the ideal scenario is something highly compatible and easy to integrate for a third-party website, which may not be developed in React. Therefore, I found it a good idea to publish it as a Web Component.

This way, as requested in point 3 of the "Problem Statement" section, the distribution of this prototype could be as simple as:

1. Run the command `npm run build`.
2. Publish the `index.umd.js` file on a CDN (or as an NPM package).
3. Briefly document a usage guide (perhaps in a README file) with an example based on the type of project where the widget is intended to be included.

The project includes in the `/public` folder the same web page as in the frontend challenge, adding in the page the developed widget to show how it is running. I just needed to add this fragment in `product-page.html`:
```html
<div id="widget-root"></div>  
<sequra-installments credit="399.99" root="widget-root"></sequra-installments>
<script src="../dist/index.umd.js"></script>
```

And in `main.js` file also added the following JS function to refresh the `credit` property with the correct value whenever it changes:
```javascript
const refreshInstallments = () => {
  const priceText = $('.product-capacity.ring').find('span').attr('data-price')
  const price = parseFloat(priceText.replace('.', '').replace(',', '.'))
  const quantity = parseInt($('.quantity > div > input').val())

  if ($.isNumeric(price) && $.isNumeric(price)) {
    const credit = price * quantity
    $('sequra-installments-selector').attr('credit', credit)
  }
}
```

To check how the Widget would work on the original static web, follow these steps:
- Run `npm run build` to generate the component in the `/dist` folder.
- Run `npm run dev` to start the web server.
- Ensure the Node.js server `seQura Mocked API` is running.
- Access `http://localhost:5173/product-page.html`.

### Advantages and Drawbacks

As mentioned earlier, the significant advantage of publishing this project as a Web Component is having an isolated and lightweight piece of code that adheres to web standards and can be incorporated into various types of websites.

However, by implementing the component in React and subsequently encapsulating it within a Web Component, I have encountered some technical drawbacks:

- Since I used TailwindCSS for styling, the generated Web Component does not load the CSS styles. As far as I could verify, this specific library does not integrate well with Web Components. The current solution involves always including TailwindCSS in the web or project that wants to use it. It's also possible that users may want to apply a more customized style using the conventional approach, using a CSS sheet with appropriate selectors. This issue could also be easily resolved with a css-in-js library like Styled Components.

- It's important to note that the widget is not entirely isolated from the web it is included in. The value of its `credit` property will depend on events generated in other components on the page, meaning our component must react to these changes. React is inherently a reactive library, and automatically refreshes the component after each change in its properties. However, I observed that in a potential real-world environment (by using the original static HTML), when changing the `credit` property of the Web Component with JavaScript, the component was not refreshig his state. This is because the property of the React component itself does not change; rather, it is the property of the encapsulating Web Component that changes. Therefore, I had to force rendering inside the Web Component node when one of its attributes changes.

Despite these minor drawbacks, it can be confirmed that the Widget behaves as expected, and its integration with the backend API and the web page functions smoothly without any weird effects.


