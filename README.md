
# EKIA

A Furniture E-Commerce Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

You can visit the live Demo on https://ekia-9249e.web.app/.


## Tech Stack

**Client:**

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Server:**

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)


## Developers & Designers

- [@Mostafa-Tawfik](https://www.github.com/Mostafa-Tawfik)

## Color Palette

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Golden Brown | ![#966F33](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661311837/Projects/EKIA/Color%20Palette/Golden_Brown_hwcm54.png) #966F33 |
| Bdazzled Blue | ![#335B96](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661311941/Projects/EKIA/Color%20Palette/Bdazzled_Blue_jc8rtu.png) #335B96 |
| Field Darb | ![#665029](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661311941/Projects/EKIA/Color%20Palette/Field_Darb_iy3kdw.png) #665029 |
| Earth Yellow | ![#CFA364](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661311941/Projects/EKIA/Color%20Palette/Earth_Yellow_novpsy.png) #CFA364 |
| Blanched Almond | ![#FFECCB](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661311940/Projects/EKIA/Color%20Palette/Blanched_Almond_alusuu.png) #FFECCB |


## Demo

https://ekia-9249e.web.app/

![Alt Text](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661310308/Projects/EKIA/EKIA-OG_Custom_fraoha.png?raw=true 'Project Preview')


## Roadmap

- [x] Authentication
- [x] Landing Page
- [x] Products list Page
- [x] Product details page
- [x] Shopping cart
- [x] Wishlist
- [x] Checkout form
- [x] Order confirmation page
- [x] About us page
- [x] Fully responsive on all devices
- [x] Bottom nav bar for mobile screens
- [x] Open Graph meta data for social media
- [x] Lazy loading for bigger size modules
- [x] A splash screen to show when the app starts
- [ ] Add dark/light themes
- [ ] Add user account page
- [ ] Add search query mechanism
- [ ] Use Angular resolvers
- [ ] Use Angular reactive forms
- [ ] Multi-language Support
    - [ ] Arabic


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

- I have overcome this challenge by spending some time looking for answers, I tried a lot of methods until I found the perfect one which was using the RxJS Subject which is a special type of Observable that allows values to be multicasted to many Observers.

![Logo](https://res.cloudinary.com/do1rqqi7v/image/upload/v1661308763/Projects/EKIA/logo_xdvra6.png)


## Support

For support, www.mostafatawfik.com/.