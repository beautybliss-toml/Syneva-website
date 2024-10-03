import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember';
import { TeamMembers as staticTeamMembers } from '../constants';
import Loading from './Loading';
import HeaderSection from './HeaderSection';

interface TeamMemberData {
    name: string;
    role: string;
    image: {
        src: string;
        alt: string;
        class: string;
    };
    class: string;
}

const TeamList: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMemberData[]>([]);
    const [loading, setLoading] = useState(true);

    // Simulate fetching team data
    const fetchTeamMembers = async () => {
        try {
            // Simulate API request
            // const response = await fetch('https://api.example.com/team'); // Replace with your API URL
            // const data = await response.json(); // Assuming the response is JSON
            // setTeamMembers(data); // Use the fetched team data
            setTeamMembers(staticTeamMembers.data); // Use the static team data directly
            setLoading(false);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="max-w-screen-xl p-4 mx-auto my-4 md:my-11">
            <HeaderSection title={staticTeamMembers.title} />

            <div className="grid items-end grid-flow-row-dense grid-cols-2 gap-3 md:gap-8 md:grid-cols-12 auto-rows-max">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        className={member.class}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamList;