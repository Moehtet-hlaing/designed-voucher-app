import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import ChangeProfileImage from '../components/ChangeProfileImage'

const UserProfileChangeProfileImagePage = () => {
  return (
    <Container>
        <BreadCrumb currentPageTitle={"Change Profile Image"} links={[{title:"User Profile",path:"/dashboard/user-profile"}]}/>
        <ChangeProfileImage />
    </Container>
  )
}

export default UserProfileChangeProfileImagePage