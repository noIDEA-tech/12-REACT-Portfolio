 import { Link, useLocation } from 'react-router-dom';
 

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', text: 'About Me' },
        { path: '/portfolio', text: 'Portfolio' },
        { path: '/resume', text: 'Resume' },
        { path: './contact', text: 'Contact' }
       
  ];

  return (
    <nav className="space-x-10">
          {navItems.map((item) => (
            <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 rounded-md transition-colors font-bold 
                  ${location.pathname === item.path
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-blue-100'
                }`}
            >
               {item.text}
            </Link>     
        ))}
    </nav>
  
  );
};

export default Navigation;