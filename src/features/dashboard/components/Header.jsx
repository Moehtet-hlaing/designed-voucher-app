import Container from "../../../components/Container";
import useUserStore from "../../../stores/useUserStore";

const Header = () => {

  const {user:{name,email,profile_image}} = useUserStore();
  return (
    <header className=" mb-5">
      <Container className={``}>
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" font-bold text-xl sm:text-3xl">Voucher App</h1>
            <p className=" text-slate-700 text-xs sm:text-base">MMS Software</p>
          </div>
          <div className=" flex items-center gap-2">
            <img className=" size-8 sm:size-10 rounded-full object-cover object-top" src={
                profile_image
                  ? profile_image
                  : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
              } alt="user photo" />
            <div>
              <h1 className=" font-bold text-sm sm:text-lg">{name}</h1>
              <p className=" text-slate-700 text-[8px] md:text-xs">{email}</p>
            </div>
          </div>
        </div>
      </Container>
      
    </header>
  );
};

export default Header;
