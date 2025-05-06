import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import ChangeUserPassword from '../components/ChangeUserPassword'

const UserProfileChangePasswordPage = () => {
  return (
    <Container>
        <BreadCrumb currentPageTitle={"Change Password"} links={[{title:"User Profile",path:"/dashboard/user-profile"}]}/>
        <ChangeUserPassword />
    </Container>
  )
}

export default UserProfileChangePasswordPage