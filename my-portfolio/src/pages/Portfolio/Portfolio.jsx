import Project from '../../components/Project/Project';
import candidateSearch from '../../assets/images/candidate-search1.png';  
import employeeTracker from '../../assets/images/employee-tracker.jpg';
import sleepTracker from '../../assets/images/sleep-tracker.png';
import vehicleBuilder from '../../assets/images/vehicle-builder.jpg';
import readMeGenerator from '../../assets/images/readme-generator.jpg';
import weatherDashboard from '../../assets/images/weather-dashboard.jpg';
 
const Portfolio = () => {
       const projects = [
        {
            id: 1,
            title: "Candidate Search",
            image: candidateSearch,
            deployedLink: "https://https-github-com-noidea-tech-13-react-ts.onrender.com",  
            githubLink: "https://github.com/noIDEA-tech/13-React-TS-Candidate-Search-New",
            description: "An interactive Web App using the GitHub API to retrieve user data for employers to search for potiential candidates"
        },
        {
            id: 2,
            title: "Employee Tracker",
            image: employeeTracker,  
            githubLink: "https://github.com/noIDEA-tech/10-SQL-Employee-Tracker",
            deployedLink: "https://drive.google.com/file/d/1FGjUMmTp6k0KhiWj2BPYDTkzAtNCsVld/view",    
            description: "A command-line application to manage a company's employee database"
        },
        {
            id: 3,
            title: "Sleep Tracker",
            image: sleepTracker,  
            deployedLink: "https://ivandamian1.github.io/Project-1/",
            githubLink: "https://github.com/ivandamian1/Project-1",
            description: "A Sleep Tracker application built with JavaScript and bootstrap"
        },
        {
            id: 4,
            title: "Vehicle-Builder",
            image: vehicleBuilder, 
            deployedLink: "https://drive.google.com/file/d/1sPwUh0Ibi4VFQwuLjpwkX_nOj7wdEazu/view",
            githubLink: "https://github.com/noIDEA-tech/08-TS-Vehicle-Builder/tree/main/Develop",
            description: "A TypeScript CLI application with vehicle production and modification commands"  
         },
        {
            id: 5,
            title: "README.md Generator",
            image: readMeGenerator,  
            deployedLink: "https://drive.google.com/file/d/1T8sRQ3clfHKkR5kK52yPWnAshSyZupe5/view",       
            githubLink: "https://github.com/noIDEA-tech/README.md-Generator",
            description: "A CLI README.md generator designed for users to easily create README.md project files for their applications"
        },
        {
            id: 6,
            title: "Open-Weather Dashboard",
            image: weatherDashboard,  
            deployedLink: "https://zero9-ser-api-weather-dashboard.onrender.com",       
            githubLink: "https://github.com/noIDEA-tech/Weather-App",
            description: "An Open-weather API Dashboard featuring recall of previous city searches and 5-day forecast"
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
                        image={project.image}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
