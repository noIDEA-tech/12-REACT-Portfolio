import Project from '../../components/Project/Project';
//TODO: COMPLETE ALL PROJECT IDS//
const Portfolio = () => {
    //TODO: Sample projects data - replace sample projects with my own projects
    const projects = [
        {
            id: 1,
            title: "Weather Dashboard",
            description: "A weather application built with OpenWeather API and JavaScript",
            deployedLink: "insert link to weather dashboard app", //TODO: insert deployed 'Weather Dashboard' link,
            githubLink: "https://github.com/noIDEA-tech/09-Ser-API-Weather-Dashboard",
            imageUrl: "/path-to-my-image.jpg" //TODO: insert path to image
        },
        {
            id: 2,
            title: "Employee Tracker",
            description: "An Employee Tracker application built with PostgreSQL and TypeScript",
            githubLink: "https://github.com/noIDEA-tech/10-SQL-Employee-Tracker",
            imageUrl: "/path-to-my-image.jpg" //TODO: insert path to image
        },
        {
            id: 3,
            title: "Sleep Tracker-Team Project",
            description: "A Sleep Tracker application built with JavaScript and bootstrap",
            deployedLink: "insert link to sleep tracker app", //TODO: insert deployed 'Sleep Tracker' link,
            githubLink: "https://github.com/ivandamian1/Project-1",
            imageUrl: "/path-to-my-image.jpg" //TODO: insert path to image
        },
        {
            id: 4,
            title: "Blog",
            description: "Blog", //TODO: complete description of blog and fix blog
            githubLink: "https://github.com/noIDEA-tech/04-Blog-Challenge",
            imageUrl: "/path-to-my-image.jpg" //TODO: insert path to image
        },
        {
            id: 5,
            title: "5th project",
            description: "complete description of 5th project",
            deployedLink: "insert link to 5th project", //TODO: insert deployed '5th project' link,
            githubLink: "5th project", //TODO: insert link to 5th project
            imageUrl: "/path-to-my-image.jpg" //TODO: insert path to image
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
