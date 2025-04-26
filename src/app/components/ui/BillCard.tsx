import { CardImage } from "../icons/Common";

const BillsCard = () => {
  const placeholders = Array.from({ length: 7 }, (_, i) => i + 1);

  return placeholders?.map((index) => (
    <div
      className="flex items-center cursor-pointer group gap-2.5 p-6"
      key={index}
    >
      <CardImage />
      <div>
        <h3 className="group-hover:text-main-bg duration-200 font-medium textsm">
          Bill {index}
        </h3>
        <p className="font-normal text-background text-xs">
          Date: Nov 1, 2019
          <br />₤ 50.59
        </p>
      </div>
    </div>
  ));
};
export default BillsCard;
