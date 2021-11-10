

const Content = ({obj}) =>{
    let arr = obj.products.map((el,id)=>{
        return(
            <div style={{width:'500px'}}>
                <img  src={el.img}></img>
                <ul key={id}>
                    <li>Name: {el.name}</li>
                    <li>Asin: {el.asin}</li>
                    <li>Bsr_category: {el.bsr_category}</li>
                    <li>Price: {el.price}</li>
                </ul>
            </div>
        )
    })

    return arr
}
export default  Content