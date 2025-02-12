import Link from 'next/link'
import _isUndefined from "lodash/isUndefined";
import _isNull from "lodash/isNull";
import _size from "lodash/size";
import _map from "lodash/map"; // Make sure _map is imported if you're using it

const SocialLinks = ({ data, classNames, listClass, itemClass, iconClass, labelClass ,svgClass}) => {
  // Check if 'data' is valid (not undefined, not null, and has items)
  const hasValidData = !_isUndefined(data) && !_isNull(data) && _size(data) > 0;

  if (!hasValidData) return null; // Return null if conditions are not satisfied

  return (
    <div className={`social-links ${classNames}`}>
      <ul className={listClass}>
        {_map(data, (item, index) => (
          <li key={index} className={itemClass} >
            <Link href={item.path} target="_blank" className={iconClass} onKeyDown={(e) => {
            if (e.key === "Enter") {
              window.open(item.path, "_blank");
            }
          }}>
              <span className={`icon ${svgClass}`}>
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt={item.label} className="svg-icon" />
                ) : (
                  item.icon // Render inline SVG
                )}
              </span>
              <span className={`label ${labelClass}`}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
