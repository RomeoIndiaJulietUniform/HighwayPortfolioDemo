import "../Styles/Home.css";

const Home = () => {
  const home_logo = import.meta.env.VITE_HOMEPAGE_LOGO_1;

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
    "Duis aute irure dolor in reprehenderit in voluptate.",
    "Excepteur sint occaecat cupidatat non proident.",
    "Curabitur pretium tincidunt wwlacus, nisi condimentum.",
    "Suspendisse in posuere eros, vitae ultricies dolor. Mauris blandit elit, eget tincidunt nibh pulvinar.",
    "Vivamus suscipit tortor eget felis porttitor. Curabitur non nulla sit amet nisl tempus.",
    "Aliquam bibendum, elit eget laoreet ultrices. Integer maximus nulla id orci consectetur.",
    "Sed auctor, odio et tempor scelerisque. Pellentesque habitant morbi tristique senectus.",
    "Duis at velit eu nisl ullamcorper convallis.",
    "Vestibulum ante ipsum primis in faucibus.",
    "Proin accumsan magna ac tortor suscipit. Vivamus elementum nunc sed tincidunt fringilla.",
    "Quisque at arcu ac libero venenatis.",
    "Donec egestas leo id est fermentum. Aliquam erat volutpat. Morbi sit amet nunc.",
    "Duis luctus mi at risus pharetra.",
    "Nullam varius nisl vitae est vehicula.",
    "Phasellus sit amet urna auctor.",
    "Fusce at libero sit amet libero.",
    "Sed vitae purus ut tortor blandit.",
    "Excepteur sint occaecat cupidatat non proident.",
    "Curabitur pretium tincidunt lacus, nisi condimentum.",
    "Suspendisse in posuere eros, vitae ultricies dolor. Mauris blandit elit, eget tincidunt nibh pulvinar.",
    "Vivamus suscipit tortor eget felis porttitor. Curabitur non nulla sit amet nisl tempus.",
    "Aliquam bibendum, elit eget laoreet ultrices. Integer maximus nulla id orci consectetur.",
  ];
  

  return (
    <div className="home-container">
      <img 
        src={home_logo}
        alt="background" 
        className="full-screen-image"
      />
      <div className="text-section">
        <h2>Welcome to Our Homepage</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default Home;
