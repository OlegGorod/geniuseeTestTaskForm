## Notes

### Folder structure

Create page related components inside /src/components/[page_name].
You can store general ui related components inside /src/components/UI

### Functionality
##### Validation

*   Fields are validated on blur and form submission.
*   Error messages are displayed if the entered value is invalid.
*   Errors are cleared if the field was invalid and the user enters a valid value later.


### Getting Started

First, run the development server:

```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

### NPM Scripts

- `dev`: Start the development server using Vite.
- `build`: Build the project using Vite.
- `lint`: It checks your code against certain formatting and code quality rules specified in your ESLint configuration file (for example, .eslintrc.json).

### DOCs

Links to docs of libraries we are using:

- [Material-UI (MUI) Documentation](https://mui.com/getting-started/usage/) - Discover Material-UI documentation for UI components.
- [React Hook Form Documentation](https://react-hook-form.com/get-started) - Explore RHF documentation for building forms in React with ease.
- [Yup Documentation](https://github.com/jquense/yup) - Access Yup documentation for schema validation in form handling.
- [React Number Format](https://s-yadav.github.io/react-number-format/docs/intro/) - React Number Format is an input-formatter library with a sophisticated and light weight caret engine. 
- [Vite](https://vitejs.dev/guide/) - For project bundling.


These scripts are designed to streamline the development and code quality assurance process for the project. You can execute them using the `npm run` command followed by the script name, such as `npm run dev` to start the development server.