import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomersList = () => {
    const [customers, setCustomer] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
                .then(response => response.json())
                .then((customerArray) => {
                    setCustomer(customerArray)
                })
        },
        []
    )

return <article className="customers">
    {
        customers.map(customer => <Customer key={`customer--${customer.id}`}
            id={customer.userId}
            address={customer.address}
            phoneNumber={customer.phoneNumber}
            fullName={customer?.user?.fullName} />)
    }
</article>
}
