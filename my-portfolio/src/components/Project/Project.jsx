//Reusable component for each portfolio project//
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Project = ({
    title, 
    description,
    deployedLink,
    githubLink,
    imageUrl,
}) => {
    return (
     <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative group">
            {/*TODO: add project Image */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
           />
        
            {/* TODO: Overlay with Links */}
        <div className="absolute inset-0 bg-black bg-opacity-50-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {deployedLink && (
                <a
                    href={deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    title="View Deployed Application"
                >
                    <GlobeAltIcon className="w-6 h-6 text-gray-800" />
                </a> 
            )}
            {githubLink && (
                <a
                    href={deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    title="View Deployed Application"
                >
                    <CodeBracketIcon className="w-6 h-6 text-gray-800" />
                </a>                   
            )}
        </div>
    </div>

    {/*TODO: /* Project Info */}
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
     </div>   
    );
};

export default Project;