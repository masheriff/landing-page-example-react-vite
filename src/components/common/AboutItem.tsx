import Button from "../ui/Button";

export interface AboutItemProps {
  imageUrl: string;
  name: string;
  designation: string;
  description: string;
  buttonText: string;
}

function AboutItem(props: AboutItemProps) {
  const { imageUrl, name, designation, description, buttonText } = props;
  return (
    <div className="bg-white space-y-4">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <h3 className="font-semibold text-2xl">{name}</h3>
      <p className="text-gray-600">{designation}</p>
      <p>{description}</p>
      <Button variant="secondary" fullWidth>
        {buttonText}
      </Button>
    </div>
  );
}

export default AboutItem;
