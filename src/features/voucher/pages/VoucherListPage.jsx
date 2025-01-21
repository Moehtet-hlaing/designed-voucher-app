import BreadCrumb from '../../../components/BreadCrumb'
import Container from '../../../components/Container'
import VoucherTable from '../components/VoucherTable'


const VoucherListPage = () => {
  return (
    <section>
      <Container>
      <BreadCrumb currentPageTitle={'Voucher Module'} />
      </Container>
      <VoucherTable /> 
    </section>
  )
}

export default VoucherListPage;
