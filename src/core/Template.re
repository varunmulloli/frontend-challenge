type options = { isJSON: bool };
[@bs.module] external serialize : (Js.Json.t, options) => string = "serialize-javascript";

let make = (~content: string, ~initialState: Js.Json.t, ~initialErrors: Js.Json.t, ()) => {
  let serializedInitialState: string = serialize(initialState, { isJSON: true });
  let serializedInitialErrors: string = serialize(initialErrors, { isJSON: true });

  {j|
    <!DOCTYPE html>
    <html>
      <head>
        <title>Formula 1</title>
        <link rel="shortcut icon" type="image/png" href="/dist/favicon.ico">
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap" rel="stylesheet">
      </head>
      <body>
        <div id="root">$content</div>
        <script src="/dist/client.js" defer></script>
        <script>
          window.__INITIAL_STATE__ = $serializedInitialState;
          window.__INITIAL_ERRORS__ = $serializedInitialErrors;
        </script>
      </body>
    </html>
  |j};
};