
  <Image  src=https://raw.githubusercontent.com/murikao/seu-ip/main/public/img/ip.svg alt="ip client" width=125 height=150/>

# -------------
# -  SEU IP -
# -------------

This is a [Next.js](https://nextjs.org/) project serve side rendering, based on that is used in a course called [React Avançado](https://reactavancado.com.br/).

## Descrição
Basicamente este programa fornece o ip da requisição http e busca outras informações numa api


<h2>Seu IP 

<font color="orange">192.168.0.1</font></h2>
  
<h3 style={{ color: 'white' }}>
             Localização:<font color="orange">  Cidade, UF, Pais - (BR)</font>
             <br/>
             <br/>
             Operadora : <font color="orange"> Sua Operadora SA</font></h3>
  <br/>

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started
First, run the development server:
```bash
yarn [install]

yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.



## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
## EXTRA

Command to init a storybook : already included in boilerplaate 

```bash
npx sb init 
```
Comando para corrigir número máximo que o VSCode suporta de `watches`
```bash
 echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
Rodar o lint  já com correção
```bash
yarn lint --fix 
```
## Yarn version
This project run on [yarn](https://yarnpkg.com/cli/set/version) version 1.22.4 
```bash
 yarn set version 1.22.4 
```
## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details

<font color="red">***OBS:*** Deploy no vercel não está funconando, apenas informa o ip 127.0.0.1. e operadora a Amazon. Creio que  que tem redirect. No meu servidor funciona normal.
</font>
Para testar [http://ip.ddns.net](http://ip.ddns.net)