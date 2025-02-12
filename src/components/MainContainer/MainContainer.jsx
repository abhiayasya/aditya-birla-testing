export const MainContainer = (props) => {
    const { children, className } = props;
    return (
      <div
        className={` mx-auto lg:px-20 md:px-10 px-4 md:mb-10 py-10 ${className}`}
      >
        <div className="max-w-[1280px] mx-auto">{children}</div>
      </div>
    );
  };
  