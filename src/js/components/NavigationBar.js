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
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
        </div>
        <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Index</IndexLink>
            </li>
            {/*
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
          */}
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
              <Link to="useCaseOneDropDown" onClick={this.toggleCollapse.bind(this)}>Use Case 1 (Drop Down)</Link>
            </li>
            <li>
              <Link to="useCaseOneRevolverButton" onClick={this.toggleCollapse.bind(this)}>Use Case 1 (Revolver Button)</Link>
            </li>
            <li>
              <Link to="useCaseTwoDropDown" onClick={this.toggleCollapse.bind(this)}>Use Case 2 (Drop Down)</Link>
            </li>
            <li>
              <Link to="useCaseTwoRevolverButton" onClick={this.toggleCollapse.bind(this)}>Use Case 2 (Revolver Button)</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}