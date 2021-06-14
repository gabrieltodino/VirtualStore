import styles from "./style.module.scss";


interface ProductTypes {
    name: String;
    id: String;
    category: String;
    description: String;
    price: Number
}

interface CategoriesProps {
  categories: string[];
  products: ProductTypes[];
}

function Categories(props: CategoriesProps){
    const categories = props.categories
    const products = props.products

    return (
        <div className="categoriesWrapper">
                {
                    categories.map(dataCat => {
                        return (
                            <>
                            <p key={dataCat}>{dataCat}:</p>
                            {
                                products.map(dataProd => {
                                    if (dataCat == dataProd.category) {
                                        return <p key={dataProd.id}>*{dataProd.name}</p>
                                    }
                                })
                            }
                            </>
                        )
                    })
                }
        </div>
    )
}

export default Categories