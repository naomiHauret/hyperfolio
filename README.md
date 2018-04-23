# Hyperfolio

## Pre-requisites

* Have`npm` installed on your machine
* `npm` version must be > 5.2

## Get started

Grab your favourite terminal and run the following commands :

```js
npm install
npm start
```

A new tab should be open in your browser. `localhost:3000` is alive ! Have fun.

## Config

To be able to test out the contact page:  
- copy the `.env.dist` file content 
- create a `.env` at the root of the project
- paste the content of the `.env.dist` in your `.env`
- Create yourself an account on [Enformed.io](http://enformed.io/) (it's free)
- In your `.env`
    - For `ENFORMED_KEY=your_enformedio_key`, replace `your_enformedio_key` by your key
    - `ENFORMED_SEND_MAIL_TO=mail_that_will_receive_stuff`, replace `mail_that_will_receive_stuff` by the email address that will receive emails sent from the website. Can be yours. Can be someone else's mail, it's up to you!


## Under the hood
- Hyperapp ecosystem: hyperapp, hyperapp-router and hyperapp-transitions
- Style: CSS-in-JS powered by CXS, some PostCSS
- Animations: PixiJS, Pixi-Filters, Lottie-Web
- Mail service: Enformed.io