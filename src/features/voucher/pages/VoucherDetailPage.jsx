import BreadCrumb from "../../../components/BreadCrumb"
import Container from "../../../components/Container"
import VoucherCard from "../components/VoucherCard";



const VoucherDetailPage = () => {
    return (
        <div>
            <Container>
                <BreadCrumb currentPageTitle={"Voucher Detail"} links={[{title:"Voucher Module",path:"/dashboard/vouchers"}]} />
                <VoucherCard />
            </Container>
        </div>
      )
}

export default VoucherDetailPage;
