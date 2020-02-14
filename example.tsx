import React from 'react'
import ReactDom from  'react-dom'
import iconexample from './lib/icon/icon.example'
import dialogexample from   './lib/dialog/dialog.example'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


ReactDom.render((
  <Router>
      <div>
          <header className="logo">logo</header>
          <div>
              <aside>
                  <ul>
                      <li>
                          <Link to="/icon">icon</Link>
                      </li>
                      <li>
                          <Link to="/button">button</Link>
                      </li>
                      <li>
                          <Link to="/dialog">button</Link>
                      </li>
                  </ul>
              </aside>
              <main>

                  <Switch>
                     <Route path="/icon" component={iconexample}></Route>
                      <Route path="/dialog" component={dialogexample}></Route>
                  </Switch>
              </main>
          </div>
      </div>
  </Router>

),document.querySelector('#root'))
