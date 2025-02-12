export const MainContainer = (props) => {
    const { children, className } = props;
    return (
      <div
        className={`max-w-[1440px] mx-auto lg:px-20 md:px-10 px-4 md:mb-10 py-10 ${className}`}
      >
        <div className="">{children}</div>
      </div>
    );
  };
  