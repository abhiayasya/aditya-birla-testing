import { useState } from "react";
import { Links } from "@/constants/constant";
import useDeviceDetection from "@/utils/useDeviceDetection";

const ListOfLinks = ({
  containerClass,
  headingClass,
  listClass,
  itemClass,
  toggleClass,
  arrowClass,
  hoverClass,
}) => {
    const arrowSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.828"
          height="6.414"
          viewBox="0 0 10.828 6.414"
        >
          <path
            id="Path_84"
            data-name="Path 84"
            d="M440,98l4,4,4-4"
            transform="translate(-438.586 -96.586)"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
    
    
  const device = useDeviceDetection();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (device === "Mobile") {
      setIsOpen(!isOpen);
    }
  };
  const handleKeyDownToggle = (event) => {
    if (event.key === "Enter") {
      toggleAccordion();
    }
  };
  const handleKeyDownLink = (event, link) => {
    if (event.key === "Enter") {
      window.open(link.path, link.openinNewTab ? "_blank" : "_self");
    }
  };

  return (
    <div className={containerClass || ""}>
      <div className={toggleClass || ""} onClick={toggleAccordion} >
        <h4 role={device === "Mobile" ? "button" : undefined} onKeyDown={handleKeyDownToggle} tabIndex={0} className={headingClass || ""}>{Links.title}</h4>
        {device === "Mobile" && (
           <span
           className={arrowClass || ""}
           style={{
             display: "inline-block",
             transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
             transition: "transform 0.3s ease", 
           }}
         >
           {arrowSvg}
         </span>
        )}
      </div>

      {(device !== "Mobile" || isOpen) && (
        <ul className={listClass || ""}>
          {Links.list.map((link, index) => (
            <li key={index} className={itemClass}>
              <a
                href={link.path}
                target={link.openinNewTab ? "_blank" : "_self"}
                className={hoverClass || ""}
                onKeyDown={(event) => handleKeyDownLink(event, link)}
                tabIndex={0}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListOfLinks;
