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
                </p> My professional career spans over 25 years working for two Fortune 500 companies, Electrolux
                     subsidiary Dometic Corporation and Travelers Property Insurance, in the capacity of administrative
                     assistant, office manager and purchasing agent; and commercial and residential property adjuster,
                     respectively. In addition, I served as Principal Real Estate Broker/part-owner of an Indiana Real
                     Estate Brokerage company. My belief in being proactive as well as my intuative nature for 
                     problem-solving has led to my pursute in studying computer technology, specifically front-end web 
                     development. 

                <p className="text-lg mb-4">
                  {/* TODO: Add background and work history content here */}   
                </p>
                <p className="text-lg mb-4">
                    My background in administrative roles has equipped me with strong organizational and multitasking skills. 
                    During my tenure at Dometic Corporation, I managed office operations, coordinated events, and handled 
                    procurement processes. At Travelers Property Insurance, I honed my analytical skills by assessing 
                    property damage and negotiating settlements. My experience in real estate has provided me with a 
                    comprehensive understanding of property management and client relations.
                </p>

                <p className="text-lg">
                    {/*TODO: Add other interests, hobbies, etc here */}
                    Outside of my professional life, I have a passion for gardening and landscaping. I also love traveling and exploring new cultures, which has broadened my perspective and appreciation for cultural differences. In my free time, I enjoy spending quality time with my family and engaging in physical fitness activities.
                </p>
            </div>
        </div>
    </div>
    );
};

export default AboutMe;
    