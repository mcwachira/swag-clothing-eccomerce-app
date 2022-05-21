import Home from "./routes/home/home .component";
import { Routes, Route } from 'react-router-dom'
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sing-in.component";

const App = () => {

  return (

    <div>

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

      </Routes>

    </div>

  );
}

export default App;
