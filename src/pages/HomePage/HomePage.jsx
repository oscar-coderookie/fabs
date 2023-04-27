import React from "react";
import "./HomePage.scss";
import { useMediaQuery } from "react-responsive";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/fabs-638d3.appspot.com/o/mobile-imgs%2Fhome-2%20(3).jpg?alt=media&token=bfc27c5b-fb9e-4be4-972c-7a7db64ba408",
  "https://firebasestorage.googleapis.com/v0/b/fabs-638d3.appspot.com/o/mobile-imgs%2Fhome-2%20(2).jpg?alt=media&token=81f85ec2-ed2f-4b82-b5c6-41deeccd3684",
  "https://firebasestorage.googleapis.com/v0/b/fabs-638d3.appspot.com/o/mobile-imgs%2Fhome-2%20(1).jpg?alt=media&token=c0e1bc97-c864-43cd-85cf-182f9cf02176",
];

const HomeBlock1 = () => {
  return <div className="home__block1"></div>;
};

const HomeBlock2 = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  function renderImage(item) {
    return (
      <div className="image-gallery-image">
        <img src={item} alt={item} style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <React.Fragment>
     {isDesktopOrLaptop && <div className="home__block2"></div>}

      {isTabletOrMobile && (
        <ImageGallery
          width="100%"
          items={images}
          renderItem={renderImage}
          showNav={false}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      )}
    </React.Fragment>
  );
};

const HomePage = () => {
  return (
    <div className="home">
      <HomeBlock1 />
      <HomeBlock2 />
    </div>
  );
};

export default HomePage;
