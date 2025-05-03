import React from 'react'

import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import ProductCreateForm from '../components/ProductCreateForm'

const ProductCreatePage = () => {
  return (
    <div>
        <Container>
            <BreadCrumb currentPageTitle={"Create Product"} links={[{title:"Product Module",path:"/dashboard/products"}]} />
            <ProductCreateForm />
        </Container>
    </div>
  )
}

export default ProductCreatePage