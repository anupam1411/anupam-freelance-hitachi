import image1 from "./Images/Image1.jpg";
import image2 from "./Images/Image2.jpg";
import image3 from "./Images/Image3.png";
import image4 from "./Images/Image4.jpg";
import image5 from "./Images/Image5.jpg";

export const FlippedRowData = [
  {
    id: 1001,
    name: "ID",
    field: "id",
    headerName: "ID",
    width: 70,
    run01: "1",
    run02: "2",
    run03: "3",
    run04: "4",
    run05: "5",
  },
  {
    id: 1003,
    name: "product",
    field: "product",
    headerName: "product",
    width: 160,
    editable: true,
    run01: "Inverter",
    run02: "Air Conditioner",
    run03: "Refrigerator",
    run04: "Washing Machine",
    run05: "Television",
  },
  {
    id: 1004,
    name: "image",
    field: "image",
    headerName: "image",
    renderCell: (value3) => {
      return (
        <img className="h-20" src={value3.row.image} alt="refrigerator"></img>
      );
    },
    width: 200,
    run01: image1,
    run02: image2,
    run03: image3,
    run04: image4,
    run05: image5,
  },
  {
    id: 1005,
    name: "value",
    field: "value",
    headerName: "Value",
    type: "number",
    width: 70,
    editable: true,
    run01: "10",
    run02: "20",
    run03: "30",
    run04: "40",
    run05: "50",
  },
];

export const FlippedColumnData = [
  {
    id: 1002,
    label: "label",
    field: "name",
    headerName: "label",
    width: 160,
  },
  {
    id: 1,
    label: "run01",
    field: "run01",
    headerName: "run01",
    product: "Inverter",
    image: image1,
    value: 10,
    width: 160,
  },

  {
    id: 2,
    label: "run02",
    field: "run02",
    headerName: "run02",
    product: "Air Conditioner",
    image: image2,
    value: 20,
    width: 160,
  },
  {
    id: 3,
    label: "run03",
    field: "run03",
    headerName: "run03",
    product: "Refrigerator",
    image: image3,
    value: 30,
    width: 160,
  },
  {
    id: 4,
    label: "run04",
    field: "run04",
    headerName: "run04",
    product: "Washing Machine",
    image: image4,
    value: 40,
    width: 160,
  },
  {
    id: 5,
    label: "run05",
    field: "run05",
    headerName: "run05",
    product: "Television",
    image: image5,
    value: 50,
    width: 160,
  },
];
