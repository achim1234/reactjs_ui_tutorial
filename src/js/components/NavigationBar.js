import React from "react";
import { IndexLink, Link } from "react-router";

export default class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
        </div>
        <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Index</IndexLink>
            </li>
            <li>
              <Link to="stepOne" onClick={this.toggleCollapse.bind(this)}>Step 1</Link>
            </li>
            <li>
              <Link to="stepTwo" onClick={this.toggleCollapse.bind(this)}>Step 2</Link>
            </li>
            <li>
              <Link to="stepThree" onClick={this.toggleCollapse.bind(this)}>Step 3</Link>
            </li>
            <li>
              <Link to="stepFour" onClick={this.toggleCollapse.bind(this)}>Step 4</Link>
            </li>
            <li>
              <Link to="stepFive" onClick={this.toggleCollapse.bind(this)}>Step 5</Link>
            </li>
            <li>
              <Link to="stepSix" onClick={this.toggleCollapse.bind(this)}>Step 6</Link>
            </li>
            <li>
              <Link to="stepSeven" onClick={this.toggleCollapse.bind(this)}>Step 7</Link>
            </li>
            <li>
              <Link to="examples" onClick={this.toggleCollapse.bind(this)}>Examples</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}