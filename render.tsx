import { h, Fragment, FunctionalComponent } from 'preact';

export const BaseHtml: FunctionalComponent = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>QuackQuackGo</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export const SearchBox: FunctionalComponent = () => {
  return (
    <form>
      <input type="text" placeholder="search" required />

      <button type="submit">
        Submit
      </button>
    </form>
  );
};
