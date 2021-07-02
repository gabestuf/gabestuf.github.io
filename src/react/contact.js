//Contact Page
//npx babel --watch src/js/react --out-dir src/react --presets react-app/prod

var e = React.createElement;

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'hello'
    )
  );
};

var domContainer = document.querySelector('.root');
ReactDOM.render(e(App), domContainer);