import Tour from "./Tour"

const Tours = ({tours}) => {
    return (
        <section>
            <div className="title">
                <h2>Welcome to our tour company</h2>
            </div>
           
            <div>
                {tours.map((tour)=> {
                    return <Tour key={tour.id} {...tour}/>
                })}
            </div>
        </section>
        
    )
}

export default Tours
