import Project from '../../components/Project/Project';
import candidateSearch from '../../assets/images/candidate-search1.png';  
import employeeTracker from '../../assets/images/employee-tracker.jpg';
import sleepTracker from '../../assets/images/sleep-tracker.png';
import vehicleBuilder from '../../assets/images/vehicle-builder.jpg';
import readMeGenerator from '../../assets/images/readme-generator.jpg';
 


const Portfolio = () => {
       const projects = [
        {
            title: "Candidate Search",
            image: candidateSearch,
            deployedLink: "https://https-github-com-noidea-tech-13-react-ts.onrender.com",  
            githubLink: "https://github.com/noIDEA-tech/13-React-TS-Candidate-Search-New",
            description: "A Search App that uses an API to retrieve User data from the GitHub API for the purpose of searching for and saving potential candidates for employment."
        },
        {
            title: "Employee Tracker",
            image: employeeTracker,  
            githubLink: "https://github.com/noIDEA-tech/10-SQL-Employee-Tracker",
            deployedLink: "https://drive.google.com/file/d/1FGjUMmTp6k0KhiWj2BPYDTkzAtNCsVld/view",    
            description: "A command-line application to manage a company's employee database"
        },
        {
            title: "Sleep Tracker",
            image: sleepTracker,  
            deployedLink: "https://ivandamian1.github.io/Project-1/",
            githubLink: "https://github.com/ivandamian1/Project-1",
            description: "A Sleep Tracker application built with JavaScript and bootstrap"
        },
        {
            title: "Vehicle-Builder",
            image: vehicleBuilder, 
            deployedLink: "https://drive.google.com/file/d/1teOnvWZYrGliWQmC2ef8nvd4V12dH5hm/view?usp=sharing",
            githubLink: "https://github.com/noIDEA-tech/08-TS-Vehicle-Builder/tree/main/Develop",
            description: "TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks"  
         },
        {
            title: "README.md Generator",
            image:  readMeGenerator,          
            githubLink: "https://github.com/noIDEA-tech/README.md-Generator", //TODO: insert link to 5th project
            description: "A command-line README.md generator designed for users to easily create README.md project files"
        },
    ];

    return (
        <div> 
            <h2 className="text-3xl font-bold mb-8">My Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-6">
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
