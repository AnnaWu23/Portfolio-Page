const mockProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio using React and MUI.',
      featured: true,
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'A todo app with hooks and local storage.',
      featured: false,
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'Markdown blog with live preview.',
      featured: true,
    },
  ];
  
  export const fetchProjects = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProjects), 1000);
    });
  };
  