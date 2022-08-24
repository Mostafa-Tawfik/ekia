
# EKIA

A Furniture E-Commerce Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

You can visit the live Demo on https://ekia-9249e.web.app/.


## Tech Stack

**Client:** Angular, TailwindCSS

**Server:** Firebase


## Developers & Designers

- [@Mostafa-Tawfik](https://www.github.com/Mostafa-Tawfik)

## Color Palette

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Golden Brown | ![#966F33](https://via.placeholder.com/10/966F33?text=+) #966F33 |
| Bdazzled Blue | ![#335B96](https://via.placeholder.com/10/335B96?text=+) #335B96 |
| Field Darb | ![#665029](https://via.placeholder.com/10/665029?text=+) #665029 |
| Earth Yellow | ![#CFA364](https://via.placeholder.com/10/CFA364?text=+) #CFA364 |
| Blanched Almond | ![#FFECCB](https://via.placeholder.com/10/FFECCB?text=+) #FFECCB |


## Demo

https://ekia-9249e.web.app/

![Alt Text](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661276587/Projects/EKIA/EKIA-OG_Custom_r7efyj.png?raw=true 'Project Preview')


## Features

- Authentication
- Landing Page
- Products list Page
- Product details page
- Shopping cart
- Wishlist
- Checkout form
- Order confirmation page
- About us page
- Fully responsive on all devices
- Bottom nav bar for mobile screens
- Open Graph meta data for social media
- Lazy loading for bigger size modules


## Roadmap

- Add dark/light themes
- Add user account page
- Add search query mechanism
- Use Angular resolvers
- Use Angular reactive forms


## Optimizations

- Use lazy loading to reduce the initial bundle needed to run the app
- Use the main app font which is Inter as a local font in dependencies to load instantly with the app
- All images are outsourced by Cloudinary and they are optimized for smaller screens
## Run Locally

Clone the project

```bash
  git clone https://github.com/Mostafa-Tawfik/ekia.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ng serve
```

open your browser

```bash
  go to http://localhost:4200/
```


## Lessons Learned

#### What did you learn while building this project?

This is my first Angular project, I applied all my knowledge in this project:

- I learnd how to use Angular CLI for generating, adding dependencies, deploying
- How to create and use components, modules, services, models
- Data binding using input/output and services
- Angular basic routing, dynamic routing, routing guards, and lazy loading
- HTTP client with obserables
- Angular forms, ngModel, ngModelChange, and form vaildations
- Dynamic components for reusability
- File structure for easier maintenance and scalability

#### What challenges did you face and how did you overcome them?

- The biggest challenge I faced was how to keep listening for changes on a service variable that is updated from another component.

- I overcome this challenge by spending some time looking for answers, I tried a lot of methods until I found the perfect one which was using the RxJS Subject which is a special type of Observable that allows values to be multicasted to many Observers.
![Logo](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661308763/Projects/EKIA/logo_xdvra6.png)


## Support

For support, www.mostafatawfik.com/.