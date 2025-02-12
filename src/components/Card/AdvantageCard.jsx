const AdvantageCard = (props) => {

    const { heading, description,headingTag } = props?.cardDetail;
    return (
      <>
        <div className="gap-4 p-4 border rounded-md">
          <h5 className="font-bold text-xl">
            {heading}
            {headingTag && <span className="font-semibold text-gray-400 text-sm pl-1">{headingTag}</span> }
          </h5>
          <p className="text-gray-500">{description}</p>
        </div>
      </>
    );
  };
  
  export default AdvantageCard;