export default function Technologies() {
    const tech = [
        {
            id: 0,
            name: 'HTML',
            brandClass: 'html5'
        }, {
            id : 1,
            name : 'CSS',
            brandClass : 'css3'
        }, {
            id: 2,
            name: 'JS',
            brandClass: 'js-square'
        }, {
            id: 3,
            name: 'PHP',
            brandClass: 'php'
        }, {
            id: 4,
            name: 'Wordpress',
            brandClass: 'wordpress-simple'
        }, {
            id: 5,
            name: 'Shopify',
            brandClass: 'shopify'
        }, {
            id: 6,
            name: 'React',
            brandClass: 'fab fa-react'
        },
    ]

    return <div className="techBrands">
        {tech.map((brand, index) => {
        return <div key={index} className="col">
            <i className={brand.brandClass}></i>
            <p>{brand.brandClass}</p>
        </div>
    })}
    </div>
}