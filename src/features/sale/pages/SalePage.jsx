import BreadCrumb from "../../../components/BreadCrumb"
import Container from "../../../components/Container"
import SaleForm from "../components/SaleForm"


const SalePage = () => {
  return (
    <div>
      <Container>
      <BreadCrumb currentPageTitle={"Sale Module"} />
      <SaleForm />
      </Container>
    </div>
  )
}

export default SalePage