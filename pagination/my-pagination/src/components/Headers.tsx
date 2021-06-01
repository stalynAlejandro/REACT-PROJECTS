import "./Header.scss";

interface ICustomHeader {
  title: string;
  sortable: boolean;
  searchable: boolean;
}

const CustomHeader = ({ title, sortable, searchable }: ICustomHeader) => {
  return (
    <div className={"customheader-container"}>
      <div className={"customheader-container__title"}>
        <div className={"vertical-separator"} />
        <span>{title}</span>
        <span>{sortable && "S"}</span>
        <div className={"vertical-separator"} />
      </div>

      <div className={"separator"}></div>
    </div>
  );
};

const Headers = () => {
  return (
    <div className={"headers-container"}>
      <div className={"id-header"}>
        <CustomHeader title={"ID"} sortable={true} searchable={false} />
      </div>

      <div className={"alarm-header"}>
        <CustomHeader title={"Alarms"} sortable={false} searchable={true} />
      </div>

      <div className={"address-header"}>
        <CustomHeader title={"Dirección"} sortable={false} searchable={true} />
      </div>
    </div>
  );
};
export default Headers;
