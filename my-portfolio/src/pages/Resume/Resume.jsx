import { FileDownIcon } from 'lucide-react';

const Resume = () => {
    // Array of proficiencies

    const proficiencies = {

        frontEnd: [
         'HTML5',
         'CSS3',
         'JavaScript',
         'React',
         'Bootstrap',
         'Tailwind CSS' 
        ],
     backEnd: [
         'Node.js',
         'Express',
         'MySQL' 
        ],
        tools: [
         'Git',
         'GitHub',
         'VS Code',
         'npm',
         'Chrome DevTools'   
        ],
    };

    return (
        <div className="max-w-4x1 mx-auto-px-4">
            <h1 className="text-3x1 font-bold mb-6">Resume</h1>

            {/* Download Resume Button */}
            <div className="mb-8">
                <a
                href="/path-to-resume.pdf" //TODO: replace with path to resume
                download
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white roundeed-md hover:bg-blue-600 transition-colors"
                >
                    <fileDownIcon className="w-5 h-5 mr-2"/>
                    Download Resume
                </a>
            </div>

            { /* Proficiencies */}
            <div className="space-y-8">
                { /* Front-end */}
                <div>
                    <h2 className="text-2xl font-seibold mb-4">Fron-end Proficiencies</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {proficiencies.frontEnd.map((skill) => (
                            <li
                            key={skill}
                            className="big-gray-100 px-4 py-2 rounded-md text-center"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Back-end */}
                <div>
                    <h2 className="text-2xl front-semibold mb-4">Development Tools</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {proficiencies.tools.map((skill) => (
                            <li 
                            key={skill}
                            className="bg-gray-100 px-4 py-2 rounded-md text-center"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;