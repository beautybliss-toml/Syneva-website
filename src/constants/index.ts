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
import { SNV, TonIcon } from '../assets/images';


export const TeamMembers = {
    title: "Our team",
    data:   
        [
            {
                name: "Thomas Magnum",
                role: "Art Director",
                image: {
                    src: Team1,
                    alt: "Thomas Magnum",
                    class: "md:w-full",
                },
                class: "md:col-span-3 md:row-span-2 my-auto md:mt-10"
            },
            {
                name: "Peter Thornton",
                role: "CEO",
                image: {
                    src: Team2,
                    alt: "Peter Thornton",
                    class: "w-full",
                },
                class: "md:col-span-4 md:row-span-3 my-auto"
            },
            {
                name: "Hannibal Smith",
                role: "Data Analyst",
                image: {
                    src: Team3,
                    alt: "Hannibal Smith",
                    class: "",
                },
                class: "md:col-span-2 md:row-span-3"
            },
            {
                name: "Dr. Bonnie Barstow ",
                role: "System Analyst",
                image: {
                    src: Team4,
                    alt: "Dr. Bonnie Barstow",
                    class: "md:w-full",
                },
                class: "md:col-span-3 md:row-span-3 my-auto"
            },
            {
                name: "Devon Miles",
                role: "Art Director",
                image: {
                    src: Team5,
                    alt: "Devon Miles",
                    class: "",
                },
                class: "md:col-span-3 md:row-span-3 h-full"
            },
            {
                name: "Thomas Magnum",
                role: "CEO",
                image: {
                    src: Team6,
                    alt: "Thomas Magnum",
                    class: "",
                },
                class: "md:col-span-4"
            },
            {
                name: "Murdock",
                role: "Data Analyst",
                image: {
                    src: Team7,
                    alt: "Murdock",
                    class: "",
                },
                class: "md:col-span-2"
            },
            {
                name: "Theodore T.C. Calvin",
                role: "System Analyst",
                image: {
                    src: Team8,
                    alt: "Theodore T.C. Calvin",
                    class: "",
                },
                class: "md:col-span-2"
            },
            {
                name: "Kate Tanner",
                role: "Art Director",
                image: {
                    src: Team9,
                    alt: "Kate Tanner",
                    class: "md:w-[70%]",
                },
                class: "md:col-span-4"
            },
            {
                name: "Mike Torello",
                role: "Financial analyst",
                image: {
                    src: Team10,
                    alt: "Mike Torello",
                    class: "md:w-full",
                },
                class: "md:col-span-4 md:row-span-2 md:items-start md:h-full"
            },
            {
                name: "Peter Thornton",
                role: "Product Designer",
                image: {
                    src: Team11,
                    alt: "Peter Thornton",
                    class: "",
                },
                class: "md:col-span-3 md:row-span-2"
            },
            {
                name: "Murdock",
                role: "Business Analyst",
                image: {
                    src: Team12,
                    alt: "Murdock",
                    class: "",
                },
                class: "md:col-span-3 md:row-span-2"
            },
        ],
};

export const stakeData = {
    title: "Stake",
    description: "Use your $SNV to help validators maintain \n network security and earn rewards.",
    validatorInfo: "Network validators check all user transactions. If all validators reach a consensus that a transaction is valid, it is included in the blockchain. Invalid transactions are rejected.",
    lockedFunds: 1240000,
    lockedFundsDescription: "Total number of locked funds.",
    descriptionSection: [
        "Syneva operates on the TON blockchain, which uses the Proof-of-Stake algorithm. The stability and security of the network is ensured by validators.",
        "to become one of them, contributing to the strengthening of the network and being rewarded in the form of $SNV."
    ],
};

export const currencies = [
    { name: 'SNV', icon: SNV },
    { name: 'USDT', icon: TonIcon },
    { name: 'TON', icon: TonIcon },
];

export const staticPrivacyPolicy = {
    data: [
        'Lorem ipsum dolor sit amet consectetur. Eleifend facilisis arcu senectus dictum eget convallis accumsan nulla. Erat ut aliquet urna convallis quis orci. Id risus turpis ac ornare dictum. Urna eu amet eget integer quis turpis lorem orci porttitor. In interdum vel quis sed. Vitae id at vitae vel dapibus. Ullamcorper in lacinia arcu gravida venenatis arcu sed orci.', ' Viverra nunc interdum sit porttitor sed. Id quisque tortor enim odio. Imperdiet risus gravida magnis ut amet neque integer. At quam ac magna lectus purus. Turpis nulla adipiscing purus elit sit. Commodo amet sed blandit blandit. Platea elementum ornare quis mauris. In amet elementum donec feugiat. Quam quis in eu rhoncus. Turpis egestas magna consectetur lacus. Commodo nunc sit velit pulvinar est nulla risus. Dictum sit adipiscing viverra vitae dolor vitae integer rutrum.', 'Amet aenean elementum ultrices etiam gravida. Sed bibendum risus dui tristique consectetur proin. Quis neque facilisi id purus fermentum. Et morbi tempor tincidunt urna lacinia. Id nulla sagittis varius felis hendrerit amet. Vulputate at sed lacus ut pharetra. At tellus odio tellus diam nam feugiat in.','Nisi dapibus sapien turpis sollicitudin scelerisque quis id sit. Sodales ac hac id feugiat. Eu purus non faucibus pulvinar interdum condimentum sem sapien amet. Tellus sed sit bibendum nibh maecenas vitae cursus fusce massa. Erat vitae mauris vivamus scelerisque vitae arcu purus volutpat. Aenean viverra semper vulputate turpis sem sit sed lacus. Quam sed tortor facilisis lorem facilisi vulputate. Sit mi maecenas amet at ut. Sit venenatis dui diam condimentum ac. Nisl.'
    ]
};