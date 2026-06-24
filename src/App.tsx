import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import {Navigate, Route, Routes} from "react-router";
import JobsPage from "./pages/JobsPage.tsx";
import JobPage from "./Components/JobPage/JobPage.tsx";
import Header from "./Components/Header/Header.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {

  return (
    <MantineProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/vacancies/all" replace />} />

        <Route path="/vacancies/:city" element={<JobsPage />} />

        <Route path="/job/:id" element={<JobPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </MantineProvider>
  )
}

export default App
