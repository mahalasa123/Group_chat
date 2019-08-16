import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./components/header";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {

  let component;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("should be defined", () => {
    expect(App).toBeDefined();
    expect(Header).toBeDefined();
  });

  it("should render group chat", () => {
    component = ReactDOM.render(
      <App />,
    container);
    expect(component).toBeDefined();
  });
});

