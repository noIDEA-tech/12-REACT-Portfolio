//For Social Media links and additonal information//
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">

             {/* GitHub Link */}
            <a 
                href="https://github.com/noIDEA-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
            >
                <GithubIcon className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
            </a>

            {/* LinkedIn Link */}
            <a 
                href="https://linkedin.com/in/nancy-watreas" //TODO: GET CORRECT LINK
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
            >
                <LinkedinIcon className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
            </a>

            {/* Twitter/X Link*/}
            <a
                href="https://twitter.com/NancyWatreas2023@NWatreas2023"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
            >
                <TwitterIcon className="w-6 h-6" />
                <span className="sr-only">Twitter X</span>
            </a>
        </div>
        <p  className="text-center mt-4 text-sm">
            © {new Date().getFullYear()} Nancy Watreas. All rights reserved.  
        </p>
    </div>
    </footer>
    );
};

export default Footer;
