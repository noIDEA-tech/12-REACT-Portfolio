import { FileDownIcon } from 'lucide-react';

const resumeFile = "../../assets/images/Resume-NJW25.pdf";

const Resume = () => {
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
        ] 
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Resume</h1>
            {/* Download Resume Button */}
            <div className="mb-8">
                
                <a
                href={resumeFile}  
                download 
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white roundeed-md hover:bg-blue-600 transition-colors"
                >
                <FileDownIcon className="w-5 h-5 mr-2"/>
                Download Resume
                </a>
            </div>

            { /* Proficiencies */}
            <div className="space-y-8">
                { /* Front-end */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Front-end Proficiencies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {proficiencies.frontEnd.map((skill) => (
                <div key={skill} className="bg-neutral-200 px-4 py-2 rounded-md text-center">
                    {skill}
                </div>
                ))}
            </div>
            </section>

                {/* Back-end */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Back-end Proficiencies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {proficiencies.backEnd.map((skill) => (
                <div key={skill} className="bg-neutral-200 px-4 py-2 rounded-md text-center">
                    {skill}
                </div>
                ))}
            </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Development Tools</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {proficiencies.tools.map((skill) => (
                <div key={skill} className="bg-neutral-200 px-4 py-2 rounded-md text-center">
                    {skill}
                </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;