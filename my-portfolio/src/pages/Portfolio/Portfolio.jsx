import Project from '../../components/Project/Project';
// Import your project images
import weatherApp from '../../assets/images/weather-dashboard.jpg';  
import employeeTracker from '../../assets/images/employee-tracker.jpg';
import sleepTracker from '../../assets/images/sleep-tracker.png';
import vehicleBuilder from '../../assets/images/vehicle-builder.jpg';
import readMeGenerator from '../../assets/images/readme-generator.jpg';
// ... import other project images


const Portfolio = () => {
       const projects = [
        {
            title: "Weather-Dashboard App",
            image: weatherApp, // TODO: ADD IMAGE, make sure image name matches your file
            deployedLink: "https://your-weather-app-url.com", //TODO: insert deployed 'Weather Dashboard' link,
            githubLink: "https://github.com/noIDEA-tech/09-Ser-API-Weather-Dashboard",
            description: "Brief description of project 1"
        },
        {
            title: "Employee Tracker",
            image: employeeTracker, // TODO: ADD IMAGE, make sure image name matches your file
            githubLink: "https://github.com/noIDEA-tech/10-SQL-Employee-Tracker",
            description: "A command-line application to manage a company's employee database"
        },
        {
            title: "Sleep Tracker",
            image: sleepTracker,  // TODO: ADD IMAGE, make sure image name matches your file
            deployedLink: "https://ivandamian1.github.io/Project-1/",
            githubLink: "https://github.com/ivandamian1/Project-1",
            description: "A Sleep Tracker application built with JavaScript and bootstrap"
        },
        {
            title: "Vehicle-Builder",
            image: vehicleBuilder, //TODO: ADD IMAGE, make sure image name matches your file        
            githubLink: "https://github.com/noIDEA-tech/08-TS-Vehicle-Builder/tree/main/Develop",
            description: "TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks"  
         },
        {
            title: "README.md Generator",
            image:  readMeGenerator,  //TODO: ADD IMAGE, make sure image name matches your file            
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
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
