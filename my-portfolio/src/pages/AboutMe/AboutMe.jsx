const AboutMe = () => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold md-8">About Me</h1>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <img
                    src="/path-to-your-photo.jpg"  
                     alt="Nancy Watreas"
                     className="w-full h-full object-cover"
                />
            </div>

            {/* Bio Content */}
            <div className="flex-1">
                <p className="text-lg mb-4">
                {/* TODO: Add bio content here */}
                </p>

                <p className="text-lg mb-4">
                  {/* TODO: Add background and work history content here */}   
                </p>

                <p className="text-lg">
                    {/*TODO: Add other interests, hobbies, etc here */}
                </p>
            </div>
        </div>
    </div>
    );
};

export default AboutMe;
    