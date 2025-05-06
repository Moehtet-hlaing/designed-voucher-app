import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import ChangeUserName from '../components/ChangeUserName'

const UserProfileChangeNamePage = () => {
  return (
    <Container>
        <BreadCrumb currentPageTitle={"Change Name"} links={[{title:"User Profile",path:"/dashboard/user-profile"}]}/>
        <ChangeUserName />
    </Container>
  )
}

export default UserProfileChangeNamePage