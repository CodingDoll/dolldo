import React from "react";

import BasicLayout from "./layouts/BasicLayout";



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
