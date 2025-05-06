import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import UserProfile from '../components/UserProfile'

const UserProfilePage = () => {
  return (
    <Container>
        <BreadCrumb currentPageTitle={"User Profile"} />
        <UserProfile />
    </Container>
        
  )
}

export default UserProfilePage