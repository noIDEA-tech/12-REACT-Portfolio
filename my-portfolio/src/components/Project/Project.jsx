//Reusable component for each portfolio project//
const Project = ({ title, image, deployedLink, githubLink, description }) => {
    return (
      <div className="relative group rounded-lg overflow-hidden shadow-lg bg-white">
        {/* Project Image with Overlay on Hover */}
        <div className="relative h-64 w-full">
          <img
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        {/* Overlay with Links */}
        <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4 text-center">{description}</p>
          <div className="flex space-x-4">
            <a 
              href={deployedLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
            >
              Live Demo
            </a>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;