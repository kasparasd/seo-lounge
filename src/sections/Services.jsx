import { FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { TbBrandJavascript} from 'react-icons/tb';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { ServiceBlock } from "../components/ServiceBlock";

export function Services({limit, sortBy}) {

    const servicesData = [
        {   
            id:1,
            title: 'HTML',
            description: `Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`,
            link: '/services/HTML',
            price: "10",
            icon: <FaHtml5 />,
        },
        {
            id: 2,
            title: 'CSS',
            description: `Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`,
            link: '/services/CSS',
            price: "20",
            icon: <FaCss3Alt />,
        },
        {   
            id: 3,
            title: 'JavaScript',
            description: `Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`,
            link: '/services/JavaScript',
            price: "30",
            icon: <TbBrandJavascript />,
        },
        {   
            id:4,
            title: 'Git',
            description: `Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`,
            link: '/services/git',
            price: "40",
            icon: <FaGitAlt />,
        },
        {
            id: 5,
            title: 'Ract.js',
            description: `Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`,
            link: '/services/reactjs',
            price: "50",
            icon: <FaReact />,
        },
        {   
            id: 6,
            title: 'Saldytuvas',
            description: `Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`,
            link: '/services/saldytuvas',
            price: "0",
            icon: <CgSmartHomeRefrigerator />,
        },
    ]

    const trueLimit = servicesData.length > limit ? limit : servicesData.length;

    const sortByTitleAZ = (a,b) => a.title < b.title ? -1 : a.title === b.title ? 0:1;
    const sortByTitleZA = (a,b) => a.title < b.title ? 1 : a.title === b.title ? 0:-1;
    const sortByTitlePriceAZ = (a,b) => a.price - b.price;
    const sortByTitlePriceZA = (a,b) => b.price - a.price;

    const sortingAlgos = {
        titleAZ: sortByTitleAZ,
        titleZA: sortByTitleZA,
        price09: sortByTitlePriceAZ,
        price90: sortByTitlePriceZA,
    }

    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Services we provide</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

            
             {servicesData
             .sort(sortingAlgos[sortBy])
             .slice(0, trueLimit)
             .map(service=><ServiceBlock key={service.id} data={service} />)}
                
            </div>
        </div>
    );
}