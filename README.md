## Installation

1. Yarn

Install Yarn globally with NPM: `npm install --global yarn`

2. Dependencies

Install dependencies: `yarn install --frozen-lockfile`
Run development server: `yarn dev`

## Technologies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/v4/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [SCSS](https://sass-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MUI](https://mui.com/)
- [Faker.js](https://fakerjs.dev/)
- [Chart.js](https://www.chartjs.org/)
- [i18n](https://www.i18next.com/)
- [Moment.js](https://momentjs.com/)
- [react-hook-form](https://react-hook-form.com/)
- [MSW](https://mswjs.io/)

## Project Structure

```plain
- mocks/
  - handlers/
    - <module>.ts  # API MOCKS PER MODULE

- src/  # ALIASED AS "@"
  - assets/
    - <type>/  # ASSETS BY TYPE

  - components/  # COMMON COMPONENTS
    - <CommonComponent>/  # MAIN AND SUB-COMPONENTS
      - <CommonSubComponent>.tsx
      - <CommonComponent>.tsx

  - hooks/
    - <module>-hooks.ts  # CUSTOM HOOKS PER MODULE

  - i18n/languages/
    - <language abbreviation>.json  # TRANSLATIONS AS MODULE.PAGE.KEY

  - lib/
    - forms/
      - <module>-forms.ts  # FORMS TYPES AND SCHEMAS
    - guards/
      - <Role>Guard.tsx  # GUARDS BY ROLE
    - ...

  - pages/
    - <module>/
      - <PageSubComponent>.tsx
      - <Page>.tsx/

  - routes/
    - <module>.tsx  # ROUTES BY MODULE

  - services/
    - apis/
      - <apiName>.ts  # CUSTOM AXIOS CONFIG PER API
    - <Module>Service.ts  # API CALLS PER MODULE

  - store/  # REDUX STORE FILES
    - actions/
      - actions-creators.ts
      - action-types.ts
    - reducers/
      - <module>.reducer.ts

  - utils/
    - constants.ts
    - funcs.ts
```
