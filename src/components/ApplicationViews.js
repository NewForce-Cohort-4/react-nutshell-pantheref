import { Route } from "react-router-dom";
import React, { Component } from "react";
import {TaskProvider} from "./tasks/TaskProvider"
import {TaskList} from "./tasks/TaskList"
import {TaskForm} from "./tasks/TaskForm"

import { ArticleProvider } from "./articles/ArticleProvider";
import { ArticleList } from "./articles/ArticleList";
import { ArticleForm } from "./articles/ArticleForm";


export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/register" render={props => {
            return null
            // Remove null and return the component which will handle user registration
          }}
        />

        <ArticleProvider>
        <Route
            exact path="/articles" render={props => {
              return (
                <ArticleList />
              )
            }}
          >
          </Route>
          <Route
            exact path="/articles/new" render={props => {
              return (
                <React.Fragment>
                  <ArticleForm />
                </React.Fragment>
              )
            }}
          >
          </Route>
        </ArticleProvider>


        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <TaskProvider>
        <Route
          exact path="/tasks" render={props => {
            return <TaskList />
            // Remove null and return the component which will show the user's tasks
          }}
        /> 
        <Route
          path="/tasks/create" render={props => {
            return <TaskForm />
            // Remove null and return the component which will show the user's tasks
          }}
        /> 
        </TaskProvider>

        
        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
          }}
        />

      </React.Fragment>
    );
  }
}
