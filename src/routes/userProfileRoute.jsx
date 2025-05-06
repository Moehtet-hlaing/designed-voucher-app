import { lazy } from "react";

const UserProfileChangeNamePage = lazy(() => import("../features/user-profile/pages/UserProfileChangeNamePage"));
const UserProfileChangePasswordPage = lazy(() => import("../features/user-profile/pages/UserProfileChangePasswordPage"));
const UserProfileChangeProfileImagePage = lazy(() => import("../features/user-profile/pages/UserProfileChangeProfileImagePage"));
const UserProfilePage = lazy(() => import("../features/user-profile/pages/UserProfilePage"));

const userProfileRoute = [
    {
        path: "user-profile",
        children: [
            {
                index: true,
                element: <UserProfilePage/>
            },
            {
                path: "change-name",
                element: <UserProfileChangeNamePage/>
            },
            {
                path: "change-password",
                element: <UserProfileChangePasswordPage/>
            },
            {
                path: "change-profile-image",
                element: <UserProfileChangeProfileImagePage/>
            }
        ]
    },
    
];

export default userProfileRoute