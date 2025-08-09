interface SectionHeadingProps {
  title: string;
  description?: string;
  showDivider?: boolean;
}

function SectionHeading(props: SectionHeadingProps) {
  const { title, description, showDivider } = props;
  return (
    <div className="pb-4">
      <h2 className="font-semibold text-2xl py-4">
        {title}
      </h2>
      {showDivider && <hr className="border-gray-200 mb-4"/>}
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;
