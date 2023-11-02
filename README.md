# TechTalkBlog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

## Description
A technology blog site, Tech Talk is built using Javascript.  This is a server based application which uses express.js for route handling and handlebars.js to manage views.  This application is built using the Model, View, Controller methodology where the models are managed by sequelize, controller using express.js and the view using handlebars.js.  The underlying database is MySql.  The application features a main page that shows the currently available blog posts showing the user and date posted.  A dashboard feature for users to create, edit and delete their posts and a comment feature where users can leave comments on their posts.  There is an authentication feature that only allows logged in users to access their own posts for create edit and delete, and users need to be logged in to leave comments.  If users try to access any feature that requires a user to be logged in, they will be taken to a login page where they can either sign up or log in.  

## Usage

Below is a screenshot of the completed site.
![Screenshot of the completed Tech Talk Blog site.](/public/images/Screenshot-TechTalkBlog.png)

Link to the deployed website is here:  https://damp-forest-69847-5456bf5ec411.herokuapp.com/

## Credits

I learned alot from this project.  It was great to be able to finally build something from database to html.  With that I would like to acknowledge a few places that helped me in the development of this application:

    1. I would like to acknowledge that I pull a lot of code from examples provided to me through the UNB Coding Bootcamp. Specifically Modules 12, 13, and 14. 
    2. Bootstrap documentation for css framework: https://getbootstrap.com/
    3. Deploy with Heroku and MySQL - Request-Response: The Full-Stack Blog: https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql
    4. Get First Part of String - CodePal: https://codepal.ai/code-generator/query/BQgjXfS9/javascript-function-get-first-part-of-string

## License
 
 MIT License

Copyright (c) 2023 Matthew Tingley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

