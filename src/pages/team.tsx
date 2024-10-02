import Team1 from '../assets/images/team/Rectangle1.png';
import Team2 from '../assets/images/team/Rectangle2.png';
import Team3 from '../assets/images/team/Rectangle3.png';
import Team4 from '../assets/images/team/Rectangle4.png';
import Team5 from '../assets/images/team/Rectangle5.png';
import Team6 from '../assets/images/team/Rectangle6.png';
import Team7 from '../assets/images/team/Rectangle7.png';
import Team8 from '../assets/images/team/Rectangle8.png';
import Team9 from '../assets/images/team/Rectangle9.png';
import Team10 from '../assets/images/team/Rectangle10.png';
import Team11 from '../assets/images/team/Rectangle11.png';
import Team12 from '../assets/images/team/Rectangle12.png';

const teamMembers = [
    {
        name: "Thomas Magnum",
        role: "Art Director",
        image: Team1,
        class: "col-span-2"
    },
    {
        name: "Peter Thornton",
        role: "CEO",
        image: Team2,
        class: "col-span-5 row-span-2"
    },
    {
        name: "Hannibal Smith",
        role: "Data Analyst",
        image: Team3,
        class: "col-span-2 row-span-2 items-end h-full"
    },
    {
        name: "Dr. Bonnie Barstow ",
        role: "System Analyst",
        image: Team4,
        class: "col-span-3 row-span-2"
    },
    {
        name: "Thomas Magnum",
        role: "Art Director",
        image: Team5,
        class: "col-span-2"
    },
    {
        name: "Peter Thornton",
        role: "CEO",
        image: Team6,
        class: "col-span-5"
    },
    {
        name: "Hannibal Smith",
        role: "Data Analyst",
        image: Team7,
        class: "col-span-2"
    },
    {
        name: "Dr. Bonnie Barstow ",
        role: "System Analyst",
        image: Team8,
        class: "col-span-3"
    },
    {
        name: "Thomas Magnum",
        role: "Art Director",
        image: Team9,
        class: "col-span-2"
    },
    {
        name: "Mike Torello",
        role: "Financial analyst",
        image: Team10,
        class: "col-span-5"
    },
    {
        name: "Peter Thornton",
        role: "Product Designer",
        image: Team11,
        class: "col-span-2"
    },
    {
        name: "Murdock",
        role: "Business Analyst",
        image: Team12,
        class: "col-span-3"
    },
];

function team() {
    return (
        <div className="max-w-screen-xl p-4 mx-auto my-4 md:my-11">
            <div className="grid items-center my-5 md:grid-cols-12">
                <div className="md:col-span-3"></div>
                <h2 className="md:col-span-9 text-[40px] font-bold text-gradient bg-clip-text from-blue-500 via-purple-500 to-pink-500 animate-text">
                    Our Team
                </h2>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-2 gap-3 md:gap-8 md:grid-cols-3 lg:grid-cols-12 auto-rows-max">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center transition-transform transform hover:scale-10 ${member.class}`}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-auto rounded-3xl"
                        />
                        <div className="w-full py-4">
                            <h4 className="text-lg font-semibold">{member.name}</h4>
                            <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default team