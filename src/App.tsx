import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";
import routes from "./router";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         {routes.map(route => (
//           <Route exact key={route.path} path={route.path}>
//             <route.component />
//           </Route>
//         ))}
//       </Switch>
//     </Router>
//   );
// }
function App() {
  return <BasicLayout></BasicLayout>;
}

export default App;
