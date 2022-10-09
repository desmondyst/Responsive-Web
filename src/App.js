import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";

// Uses default breakpoints by MUI5 for responsiveness

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
