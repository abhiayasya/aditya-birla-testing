
const HoverDetailCard = (props) => {
    const {tag,heading,description,cta,imgURL} = props?.cardDetail
   
    return (
      <div className="rounded-2xl overflow-hidden relative group duration-300 ease-in-out transition-all">
          <img src={imgURL} className="w-full h-full" alt="error"/>
          <div className="bg-gray-100 absolute bottom-0 left-0 w-full px-3 duration-300 ease-in-out transition-all group-hover:h-full h-28 py-5 flex flex-col gap-2 justify-center">  
              <span className="bg-white px-3 py-1 rounded-lg text-sm w-fit">{tag}</span>
              <h3>{heading}</h3>
              <p className="group-hover:block hidden">{description}</p>
              {cta && <a className="group-hover:block hidden" href={cta?.link}>{cta?.text}</a> }        
          </div>
        </div>
    );
  };
  
  export default HoverDetailCard;