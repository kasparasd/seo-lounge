import {FaAngleRight} from 'react-icons/fa'

export function ServiceBlock({data}){
    return(
        <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2">                
            {data.icon}
        </div>
        <h3 className="fs-2 text-body-emphasis">{data.title}</h3>
        <p>{data.price},00 EUR</p>
        <p>{data.description}</p>
        <a href={data.link} className="icon-link">
            Read more
            <FaAngleRight/>
        </a>
    </div>
    )
}