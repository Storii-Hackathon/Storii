const ColumnItem = ({ children, width = "w-[297.3px]", borderRight = true }) => (
  <div className={`${width} box-border flex flex-row items-center justify-center py-4 px-6 min-w-[24px] ${borderRight ? 'border-r-[1px] border-solid border-color-brand-black' : ''}`}>
    {children}
  </div>
);

const TextColumn = ({ text, width }) => (
  <ColumnItem width={width}>
    <div className="flex-1 relative leading-[150%] inline-block max-w-full">
      {text}
    </div>
  </ColumnItem>
);
const CheckboxColumn = () => (
  <ColumnItem>
    <input
      className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
      type="checkbox"
    />
  </ColumnItem>
);

const ImageColumn = ({ src }) => (
  <ColumnItem>
    <img
      className={`h-6 w-6 relative overflow-hidden shrink-0 ${src ? '' : 'hidden'}`}
      alt=""
      src={src || ''}
    />
  </ColumnItem>
);

const List = ({ text, text1, text2, text3, textPlaceholder }) => {
  // Example custom width
  const customWidth = "w-[1150px]"; // Increase the width as needed

  return (
    <div className="self-stretch flex flex-col items-stretch justify-start max-w-full text-left text-base text-color-brand-black font-text-small-link">
      {[text, text1, text2, text3].map((item, index) => (
        <div key={index} className="self-stretch box-border flex flex-row items-stretch justify-between border-b-[1px] border-solid border-color-brand-black">
          <TextColumn text={item} width={customWidth} />
          <ImageColumn src={index === 0 ? null : "/check-8.svg"} />
          <CheckboxColumn />
          <CheckboxColumn />
        </div>
      ))}
    </div>
  );
};

export default List;