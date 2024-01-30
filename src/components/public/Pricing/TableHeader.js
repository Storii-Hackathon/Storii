import Column from "./Column";

const TableHeader = () => {
  return (
<div className="self-stretch box-border flex flex-row items-center justify-center [row-gap:20px] max-w-full text-xl text-color-brand-black font-text-small-link border-b-[1px] border-solid border-color-brand-black mq1350:flex-wrap">
      <div className="h-[343px] w-[1120px] max-w-full" />
      <Column
        heading="Basic"
        price="$19"
        text="Perfect for individuals and freelancers"
        propHeight="48px"
        propDisplay="inline-block"
      />
      <Column
        heading="Business"
        price="$29"
        text="Ideal for small to medium-sized businesses"
        propHeight="48px"
        propDisplay="inline-block"
      />
      <Column
        heading="Enterprise"
        price="$49"
        text="Perfect for large organizations and corporations"
        propHeight="unset"
        propDisplay="inline-block"
      />
    </div>
  );
};

export default TableHeader;
