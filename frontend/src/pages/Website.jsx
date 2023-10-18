import Header from "../components/Header"
import Residencies from "../components/Residencies"
import Companies from "../components/Companies"
import Value from "../components/Value"
import Contact from "../components/Contact"
import GetStarted from "../components/GetStarted"

const Website = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <GetStarted />
        </>
    )
}

export default Website