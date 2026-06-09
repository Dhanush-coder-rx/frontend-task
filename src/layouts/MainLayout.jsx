const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <main id="main-content">{children}</main>
  </div>
);

export default MainLayout;
