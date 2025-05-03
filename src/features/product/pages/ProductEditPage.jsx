import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import ProductEditForm from '../components/ProductEditForm'

const ProductEditPage = () => {
  return (
    <div>
        <Container>
        <BreadCrumb currentPageTitle={"Edit Product"} links={[{title:"Product Module",path:"/dashboard/products"}]} />
        </Container>
        <ProductEditForm />
    </div>
  )
}

export default ProductEditPage