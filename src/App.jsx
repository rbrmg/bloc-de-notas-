// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import CreateUser from "./components/CreateUser";
import CreateNote from "./components/CreateNote";
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";
import "./global.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/edit/:noteId" element={<EditNote />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
