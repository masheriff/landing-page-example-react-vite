import AboutItem, { type AboutItemProps } from "../common/AboutItem";
import SectionHeading from "../common/SectionHeading";

interface AboutProps {
  aboutArray: AboutItemProps[];
}

function About(props: AboutProps) {
  const { aboutArray } = props;
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <SectionHeading title="About" description={description} showDivider={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {aboutArray.map((about, index) => (
            <AboutItem
              key={index}
              imageUrl={about.imageUrl}
              name={about.name}
              designation={about.designation}
              description={about.description}
              buttonText={about.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
