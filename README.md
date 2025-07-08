# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./image.png)


### Links

- Solution URL: [Solution here](https://github.com/MariaCMontO/loopstudios-cmo)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- JavaScript

### What I learned

With this project, I learned how use sass and BEM on my project. I learned how to use mixins and how to use different files of .scss to divide the work. 

```scss
@mixin hover-underline(){
    position: relative;

  &::after{
    content:'';
    position: absolute;
    top:3rem;
    left: 0;
    width: 100%;
    height:0.25rem;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after{
    transform: scaleX(1);
  }
}
```

### Continued development

I definitely want to keep developing interfaces with Sass to make the work easier and more organized.

### Useful resources

## Author

- Frontend Mentor - [@MariaCMontO](https://github.com/MariaCMontO)


## Acknowledgments
