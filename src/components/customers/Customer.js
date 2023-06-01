import { Link } from "react-router-dom"

export const Customer = ({ id ,address, phoneNumber, fullName }) => {
    return <section className="employee">
        <div>
            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
        <div>Address: {address}</div>
        <div>Phone Number: {phoneNumber}</div>
    </section>
}