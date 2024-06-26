// imports start here
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid } from "@mui/x-data-grid";
import { RowData } from "./data/dummy";
import { ColumnData } from "./data/dummy";
import "./Styles/ItemBox.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect } from "react";
import { Rnd } from "react-rnd";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import { FlippedColumnData, FlippedRowData } from "./data/flippedDummy";
// imports End here

// variables assignments
const drawerWidth = 240;
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const itemListColumns = [];
const itemListRows = [];
let array1 = [];
let array2 = [];

const columns = [];
let i = 0;
let j = 0;
let pos = [0];
let y = 0;
const commonPoint = {
  id: 99,
  name: "label",
  field: "name",
  headerName: "",
  product: "label",
  image: "label",
  value: 10,
  width: 30,
};
array1.push(commonPoint);

// main functional component starts here
export default function Home(props) {
  //State Initialization
  const [check, setCheck] = React.useState(true);
  let [tableValue, setTableValue] = React.useState("");
  const [checkedRow, setCheckedRow] = React.useState([0]);
  const [checkedColumn, setCheckedColumn] = React.useState([0]);
  const [count, setCount] = React.useState(1);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showTick, setShowTick] = React.useState(false);
  const [tracker, setTracker] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [indicator, setIndicator] = React.useState(false);
  const [ListValue, setListValue] = React.useState([]);

  //Assignment
  const { window } = props;
  //No Ref
  const nodeRef = React.useRef(null);
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };
  useEffect(() => {
    handleColumns();
    handleRow();
  }, []);

  //Functions
  const handleChanged = (event) => {
    setCheck(event.target.checked);
  };

  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
    pos = Object.assign([], pos);
    pos.push(pos[count - 1] + 410);
  };

  const decrementCount = () => {
    // Update state with incremented value
    pos = Object.assign([], pos);
    pos.pop();
    setCount(count - 1);
  };

  const handleEdit = () => {
    setShowTick(false);
    setEdit(!edit);
  };

  const onAddClick = (event) => {
    setShowTick(true);
    setEdit(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleColumnToggle =
    (value2, tabularData, listValue, is_data_Setting) => () => {
      //
      // if (is_data_Setting) {
      //   // array1.splice(listValue.indexOf(value2));
      // } else {
      //
      //   array2 = array2.map((item) => {
      //     if (value2.name != item.name) {
      //       return item;
      //     }
      //   });
      // }
      const currentIndex = checkedColumn.indexOf(value2);
      const newChecked = [...checkedColumn];

      if (currentIndex === -1) {
        newChecked.push(value2);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      let temp = [];
      for (let index = 0; index < listValue.length; index++) {
        if (listValue[index].name === value2.name) {
          listValue.splice(is_data_Setting ? listValue.indexOf(value2) : 0, 1);
        } else {
          temp.push(listValue[listValue.indexOf(value2)]);
        }
      }

      setCheckedColumn(newChecked);
    };

  const handleTracker = (event) => {
    setTracker(event.target.className);
  };

  const handleChange = (event) => {
    tableValue = event.target.value;
    setTableValue(event.target.value);
  };

  const handleOnSearch = (string, results) => {};

  const handleOnHover = (result) => {};

  const handleOnRowSelect = (item) => {
    array1 = Object.assign([], array1);

    item.renderCell = (value3) => {
      if (value3.row.field === "image") {
        return (
          <img
            className="h-20"
            src={value3.row[item.name]}
            alt="refrigerator"
          ></img>
        );
      } else {
        return <p>{value3.row[item.name]}</p>;
      }
    };
    // return (
    //   <img className="h-20" src={value3.row.image} alt="refrigerator"></img>
    // );

    array1.push(item);
    setCheckedRow([...checkedRow, 1]);
    setIndicator(true);
  };

  const handleOnColumnSelect = (item) => {
    array2 = Object.assign([], array2);

    array2.push(item);
    setCheckedColumn([...checkedColumn, 1]);
  };

  const handleOnFocus = () => {};

  const handleColumns = () => {
    for (let index = 0; index < ColumnData.length; index++) {
      if (itemListColumns.length < 5) {
        itemListColumns.push(ColumnData[index].field);
      }
    }
  };

  const handleRow = () => {
    for (let index = 0; index < RowData.length; index++) {
      if (itemListRows.length < 5) {
        itemListRows.push(RowData[index].field);
      }
    }
  };

  const formatRowResult = (row) => {
    return (
      <div className="">
        <span style={{ display: "block", textAlign: "left" }}>
          id: {row.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {row.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          product: {row.product}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          value: {row.value}
        </span>
      </div>
    );
  };

  const formatColumnResult = (row) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{row.name}</span>
      </>
    );
  };

  const editCell = (event) => {
    if (RowData.includes(event.row)) {
      // for (let index = 0; index < RowData.length; index++) {
      // }
    }
  };
  //

  const handleListSettings = (value2, is_data_Setting) => {
    // setListValue(listValue);

    array2.splice(array2.indexOf(value2), 1);
  };

  // drawer
  const drawer = (
    <div>
      <Toolbar />
      <div className="text-center text-3xl font-bold">Menu</div>
      <Divider />
      <List>
        {["Option1", "Option2", "Option3"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // table
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const EditTable = (props) => {
    if (edit) {
      return (
        <Box sx={{ height: 600, width: "100vh" }}>
          <DataGrid
            rows={RowData}
            columns={ColumnData}
            rowHeight={97}
            onCellEditCommit={editCell}
            onCellEditStart={editCell}
          />
        </Box>
      );
    }
  };

  const FocusIndicator = (props) => {
    if (array1.length !== 0) {
      y = props.value || 10;
      let x = 10;
      let width = 130 * array1.length;

      let height = "50px";
      if (showTick && !tracker && check && indicator) {
        y = props.value || 10;
        let x = 10;
        let width = 130 * array1.length;
        let height = "53px";
        return (
          <Rnd
            default={{
              x: parseInt(x.toString()),
              y: parseInt(y.toString()),
              width: width,
              height: height,
            }}
            noderef={nodeRef}
            className="bg-white"
          >
            <DataGrid
              rows={array2}
              columns={array1}
              pageSize={array2.length}
              rowsPerPageOptions={[array2.length]}
              disableColumnMenu
              hideFooter
            />
          </Rnd>
        );
      } else if (
        showTick &&
        tableValue !== "Table" &&
        tracker &&
        check &&
        indicator
      ) {
        array1[0].headerName = "Label";
        array1[0].width = 130;
        y = props.value || 10;
        let x = 10;
        let width = 130 * array1.length;
        let height = 90 * array2.length + 53;
        return (
          <Rnd
            default={{
              x: parseInt(x.toString()),
              y: parseInt(y.toString()),
              width: width,
              height: height,
            }}
            noderef={nodeRef}
            className="bg-white"
          >
            <DataGrid
              rows={array2}
              columns={array1}
              pageSize={array2.length}
              rowsPerPageOptions={[array2.length]}
              disableColumnMenu
              hideFooter
            />
          </Rnd>
        );
      } else if (showTick && tableValue === "Table" && check && indicator) {
        y = props.value + 10;
        let x = 10;
        let width = 130 * array1.length;
        let height = 90 * array2.length + 53;

        return (
          <Rnd
            default={{
              x: parseInt(x.toString()),
              y: parseInt(y.toString()),
              width: width,
              height: height,
            }}
            noderef={nodeRef}
            className="bg-white"
          >
            <DataGrid rows={array2} columns={array1} />
          </Rnd>
        );
      }
    }
  };

  const ListCheckboxes = (props) => {
    if (true) {
      return (
        <div className="bg-white h-64 w-64">
          <List
            dense
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {props.array.map((value2, index) => {
              if (props.is_data_Setting) {
                if (value2.name != "label") {
                  const labelId = `${value2.name}`;
                  return (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={handleColumnToggle(
                            value2,
                            props.tabularData,
                            props.array,
                            props.is_data_Setting
                          )}
                        >
                          <CloseIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={value2.name} />
                    </ListItem>
                  );
                }
              } else {
                const labelId = `${value2.name}`;

                return (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handleColumnToggle(
                          value2,
                          props.tabularData,
                          props.array,
                          props.is_data_Setting
                        )}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={value2.name} />
                  </ListItem>
                );
              }
            })}
          </List>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              border: 1,
              borderColor: "primary.main",
              bgcolor: "white",
            }}
          >
            &nbsp;&nbsp;&nbsp;
            <Divider />
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar className="bg-white">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <IoMenu className="text-black" />
              </IconButton>
              <div>
                <IoAddCircleOutline
                  className="mr-5 text-2xl hover:text-3xl text-black"
                  onClick={onAddClick}
                />
              </div>
              <IoCopyOutline
                className="mr-5 text-2xl hover:text-3xl w-50 text-black"
                onClick={incrementCount}
              />
              <IoTrashOutline
                className="mr-5 text-2xl hover:text-3xl text-black"
                onClick={decrementCount}
              />
              <IoSettingsOutline
                className="ml-auto text-2xl hover:text-3xl text-black "
                onClick={handleEdit}
              />
            </Toolbar>
            <Divider />
            <div className="grid grid-cols-2 gap-4 place-content-between  ">
              <div className="flex space-x-0">
                <div>
                  <EditTable />
                  {showTick ? (
                    <Checkbox
                      color="default"
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 42 } }}
                      checked={check}
                      onChange={handleChanged}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  ) : null}
                </div>

                <div>
                  {pos.map((value) => (
                    <FocusIndicator key={value} value={value} />
                  ))}
                </div>
              </div>
              <div>
                {showTick && check ? (
                  <div className="float-right">
                    <div className="container">
                      <input
                        type="radio"
                        name="tab"
                        id="data"
                        className="true"
                        onChange={handleTracker}
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="tab"
                        id="view"
                        className="false"
                        onChange={handleTracker}
                      />
                      <div className="tabs">
                        <label className="tab" htmlFor="data">
                          <div className="text">Data Setting</div>
                        </label>
                        <label className="tab" htmlFor="view">
                          <div className="text">View Setting</div>
                        </label>
                      </div>
                      <div className="pages">
                        <div className="page">
                          <div className="input">
                            <div className="App">
                              <header className="App-header">
                                <div style={{ width: "100%" }}>
                                  <ReactSearchAutocomplete
                                    items={RowData}
                                    onSearch={handleOnSearch}
                                    onHover={handleOnHover}
                                    onSelect={handleOnRowSelect}
                                    onFocus={handleOnFocus}
                                    autoFocus
                                    formatResult={formatRowResult}
                                    styling={{ borderRadius: "2px" }}
                                  />
                                </div>
                              </header>
                            </div>
                          </div>
                          <br />
                          <div className="pt-28">
                            <ListCheckboxes
                              is_data_Setting={true}
                              array={array1}
                              tabularData={RowData}
                            ></ListCheckboxes>
                          </div>
                        </div>
                        <div className="page signup">
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={tableValue}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                className="text-black"
                                value="Table"
                                control={<Radio />}
                                label="Table"
                              />
                              <FormControlLabel
                                className="text-black"
                                value="Graph"
                                control={<Radio />}
                                label="Graph"
                              />
                            </RadioGroup>
                          </FormControl>
                          <header className="App-header">
                            <div style={{ width: 350 }} className="pb-5">
                              <ReactSearchAutocomplete
                                items={ColumnData}
                                onSearch={handleOnSearch}
                                onHover={handleOnHover}
                                onSelect={handleOnColumnSelect}
                                onFocus={handleOnFocus}
                                autoFocus
                                formatResult={formatColumnResult}
                                styling={{ borderRadius: "2px" }}
                              />
                            </div>
                          </header>
                          <br />
                          <br />
                          <br />
                          <br />
                          <ListCheckboxes
                            is_data_Setting={false}
                            array={array2}
                            tabularData={ColumnData}
                          ></ListCheckboxes>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}
