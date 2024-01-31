import { useMemo } from "react";

const SideBar4 = ({
  storiiiMinWidth,
  generateStoryColor,
  fillFillColor,
  templatesColor,
  groupDivColor,
  fill951IconColor,
  propColor,
}) => {
  const sideBarStyle = useMemo(() => {
    return {
      minWidth: storiiiMinWidth,
    };
  }, [storiiiMinWidth]);

  const MenuItem = ({ imageSrc, itemName }) => {
    return (
      <div className="flex flex-row items-start justify-start gap-7 my-1">
        <img className="h-4 w-4 relative" src={imageSrc} alt={itemName} />
        <div className="relative font-medium">{itemName}</div>
      </div>
    );
  };
  const SettingsItem = ({ imageSrc, itemName }) => {
    return (
      <div className="flex flex-row items-start justify-start gap-5 w-32">
        <img className="h-4.5 w-4 relative" src={imageSrc} alt={itemName} />
        <div className="flex-1 relative font-medium">{itemName}</div>
        {/* Include other elements specific to Settings here, if any */}
      </div>
    );
  };

  const FAQItem = ({ imageSrc, itemName }) => {
    return (
      <div className="flex flex-row items-start justify-start gap-4 w-31">
        <img
          className="h-4.3 w-4.6 relative min-h-4"
          src={imageSrc}
          alt={itemName}
        />
        <div className="flex-1 relative font-medium">{itemName}</div>
        {/* Include other elements specific to FAQ here, if any */}
      </div>
    );
  };

  return (
<div className="w-[266px] h-screen [background:linear-gradient(19.15deg,_#222a2d,_#2c3a34)] overflow-hidden pt-[37px] px-7 pb-11 box-border text-3xl text-seagreen font-josefin-sans">
  <div className="self-stretch flex flex-col gap-[68px]">
    <div className="w-[135px] h-[18px] flex flex-row items-start justify-start px-[3px] box-border">
      <b className="flex-1 relative shrink-0 mq450:text-lg">Storiii</b>
    </div>

    <div className="self-stretch h-[43px] flex flex-row items-start justify-start pb-[43px] box-border">
      <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-gray-400" />
    </div>

    <div className="flex flex-col self-stretch items-start justify-start gap-11 text-lg text-darkgray-300">
      <div className="h-15 flex flex-col items-start justify-start gap-6">
        <MenuItem imageSrc="/fill-1004.svg" itemName="Profile" />
        <MenuItem imageSrc="/fill-997.svg" itemName="Generate Story" />
        <MenuItem imageSrc="/fill-1004.svg" itemName="Profile1" />
        <MenuItem imageSrc="/fill-997.svg" itemName="Generate Story" />
        <SettingsItem imageSrc="/fill-1157.svg" itemName="Settings" />
        <FAQItem imageSrc="/fill-951.svg" itemName="FAQ" />
      </div>  
    </div>
  </div>
</div>

  );
};

export default SideBar4;
