import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Compare from './pages/Compare';
import AiDetailPage from './pages/AiDetailPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { aiTools } from './data/aiTools';
import './App.css';

function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [selectedTools, setSelectedTools] = useState(() => {
    const savedTools = localStorage.getItem('selectedTools');
    return savedTools ? JSON.parse(savedTools) : [];
  });
  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  
  const toggleToolSelection = (toolId) => {
    setSelectedTools(prev => {
      const isSelected = prev.some(tool => tool.id === toolId);
      
      if (isSelected) {
        return prev.filter(tool => tool.id !== toolId);
      } else {
        const toolToAdd = aiTools.find(tool => tool.id === toolId);
        return [...prev, toolToAdd];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('selectedTools', JSON.stringify(selectedTools));
  }, [selectedTools]);

  return (
    <div className="min-h-screen bg-oneui-light dark:bg-oneui-dark text-gray-900 dark:text-white flex flex-col relative overflow-hidden">
      {/* Decorative elements for One UI 7 look */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow relative z-10">
        <Outlet context={{ selectedTools, toggleToolSelection }} />
      </main>
      
      <footer className="glass-effect py-8 mt-12 border-t border-gray-200/10 dark:border-gray-700/10 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">© {new Date().getFullYear()} AiToolCraft. All rights reserved.</p>
          <p className="text-xs text-gray-500 dark:text-gray-500">Designed with a modern One UI 7 inspired interface</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="compare" element={<Compare />} />
          <Route path="details/:id" element={<AiDetailPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
