##  Flex-Shop (The e-commerce website catering to all your needs related to buying and selling)
This website is divided into two sections. One of the section is used to cater to the needs of the buyer and the 
other section is to cater to the needs of a person wanting to sell his product.                      
### Getting Started
---
The first step is to clone this `flex-shop` repository by opening your git bash and typing:
```
git clone https://github.com/coder284/flex-shop.git
```
This will create a copy of all the files in this repository on your computer.
To install the dependencies you will have to type:
```
npm install
```
### Languages Used
---
1.  <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>

2.  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>

3.  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

### Tech stack and database used
---
1.  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>

2.  <img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>

### Working on frontend
---
Firstly the user will have to `sign-up` to the website.
The `sign-up` page looks like this:

![SignUpPage](assets/Screenshot%20(231).png)
---


After signing up the user will be directed to the home page of the website:

![HomePage](assets/Screenshot%20(223).png)
---

Now the user may choose to click on the `buy now` button or the `sell now` button depending on his needs:

If the user clicks on `buy now` button then he is directed to the buyer homepage:

![buyerHomePage](assets/Screenshot%20(222).png)
---

On choosing the category of products which the user wants to buy, the user will be directed to the page of that category:

![productPage](assets/Screenshot%20(230).png)
---

On choosing the products he wants to buy, the user is directed to the cart page:

![cartPage](assets/Screenshot%20(228).png)
---


If the user clicks `Sell now` button then he is directed to the seller homepage:

![SellerHomePage](assets/Screenshot%20(224).png)
---

After this, the user is directed to the details page in which he has to enter all the details of the product which he is selling:

![detailsPage](assets/Screenshot%20(225).png)
---

After this the user will be directed to the address page:

![addressPage](assets/Screenshot%20(226).png)
---

After this the user will be directed to the payment page:

![paymentPage](assets/Screenshot%20(227).png)
---

There is also an about us page:

![aboutPage](assets/Screenshot%20(233).png)
---

And also a contact us page:

![contactUs](assets/Screenshot%20(232).png)
---


and many more pages...

### Backend - 
---

The website has an authentication mechanism wherein new users have to create an account and existing users have to login. On performing this the user will be given a token to access further pages.

For doing this, we require some npm modules like:<br><br>
-> express<br>
-> cors Cross-Origin Resource Sharing<br>
-> Jwt (Jsonwebtoken)<br>
-> bcrypt<br> 
-> postgresql <br>
