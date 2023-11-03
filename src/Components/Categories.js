import { categories } from "../data/data"

function Categories() {
    return (
        <div className='categories-content'>
            <h1 className="categories-heading">Trending categories </h1>
            <div className="categories">
                {
                    categories.map((item) => (
                        <div key={item.id} className="each-categorie">
                            <img src={item.image} alt={item.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
