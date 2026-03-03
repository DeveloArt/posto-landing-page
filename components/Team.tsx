import React from 'react';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export const Team: React.FC = () => {
  const { t } = useTranslation();

  // Team members data - you can update this with actual LinkedIn data
  const teamMembers: TeamMember[] = [
    {
      name: "Mateusz Bukowski",
      position: "Product Manager & Tech Lead",
      imageUrl: "https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=MB",
      linkedinUrl: "https://www.linkedin.com/in/mateusz-bukowski-048992190/"
    },
    // Add more team members here as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("team.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("team.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-primary font-medium mb-3">
                {member.position}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {member.description}
              </p>
              
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
