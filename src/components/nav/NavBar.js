import "./NavBar.css"
import { EmployeeNavBar } from "./EmployeeNav"
import { CustomerNavBar } from "./CustomerNav"

export const NavBar = () => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)


    if (honeyUserObject.staff) {
        return <EmployeeNavBar />
    }
    else {
        return <CustomerNavBar />
    }
}

