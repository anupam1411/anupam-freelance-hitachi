import image1 from "./Images/Image1.jpg";
import image2 from "./Images/Image2.jpg";
import image3 from "./Images/Image3.png";
import image4 from "./Images/Image4.jpg";
import image5 from "./Images/Image5.jpg";
export const Dummy = [
  {
    id: 1,
    name: "run01",
    product: "Inverter",
    image: image1,
    value: 10,
  },
  {
    id: 2,
    name: "run02",
    product: "Air Conditioner",
    image: image2,
    value: 20,
  },
  {
    id: 3,
    name: "run03",
    product: "Refrigerator",
    image: image3,
    value: 30,
  },
  {
    id: 4,
    name: "run04",
    product: "Washing Machine",
    image: image4,
    value: 40,
  },
  {
    id: 5,
    name: "run05",
    product: "Television",
    image: image5,
    value: 50,
  },
];

export const Cols = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "name", width: 130 },
  { field: "product", headerName: "product", width: 130 },
  {
    field: "image",
    headerName: "image",
    renderCell: (value3) => {
      console.log(value3);
      return (
        <img className="h-12" src={value3.row.image} alt="refrigerator"></img>
      );
    },

    width: 130,
  },
  { field: "value", headerName: "Value", width: 70 },
];
