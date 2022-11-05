// imports start here
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid } from "@mui/x-data-grid";
import { Dummy as items } from "./data/dummy";
import { Cols } from "./data/dummy";
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
// imports End here

// variables assignments
const drawerWidth = 240;
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const itemListColumns = [];
let array = [];
const columns = [];
let i = 0;
let pos = [0];
let y = 0;

// main functional component starts here
export default function Home(props) {
  //State Initialization
  const [check, setCheck] = React.useState(true);
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState([1]);
  const [count, setCount] = React.useState(1);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showTick, setShowTick] = React.useState(false);
  const [tracker, setTracker] = React.useState(false);

  //Assignment
  const { window } = props;
  //No Ref
  const nodeRef = React.useRef(null);

  useEffect(() => {
    handleColumn();
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

  const onTick = () => setShowTick(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggle = (value2) => () => {
    const currentIndex = checked.indexOf(value2);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value2);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    for (let index = 0; index < Cols.length; index++) {
      if (Cols[index].field === value2) {
        if (!columns.includes(Cols[index])) {
          columns.push(Cols[index]);
        } else {
          columns.splice(columns.indexOf(Cols[index]), 1);
        }
      }
    }

    setChecked(newChecked);
  };

  const handleTracker = (event) => {
    setTracker(event.target.className);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnSearch = (string, results) => {};

  const handleOnHover = (result) => {};

  const handleOnSelect = (item) => {
    array = Object.assign([], array);
    array.push(item);
    while (i < array.length) {
      document.getElementById("run" + [i]).innerHTML = array[i].name;
      i++;
    }
  };

  const handleOnFocus = () => {};

  const handleColumn = () => {
    for (let index = 0; index < Cols.length; index++) {
      if (itemListColumns.length < 5) {
        itemListColumns.push(Cols[index].field);
      }
    }
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          product: {item.product}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          value: {item.value}
        </span>
      </>
    );
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

  function Table(props) {
    y = props.value || 0;
    let x = 10;
    let width = "400px";
    let height = "300px";
    console.log(x, y);
    if (value === "Table" && check && tracker) {
      return (
        <Rnd
          default={{
            x: x.toString(),
            y: y.toString(),
            width: width,
            height: height,
          }}
          noderef={nodeRef}
          className="bg-white"
        >
          <DataGrid
            rows={array}
            columns={columns}
            pageSize={array.length}
            rowsPerPageOptions={[3]}
          />
        </Rnd>
      );
    }
  }

  const ListCheckboxes = (props) => {
    const visible = props.visible;
    if (visible === "Table") {
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
            {itemListColumns.map((value2) => {
              const labelId = `${value2}`;
              return (
                <ListItem
                  key={value2}
                  secondaryAction={
                    <Checkbox
                      color="default"
                      edge="end"
                      onChange={handleToggle(value2)}
                      checked={checked.indexOf(value2) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText id={labelId} primary={`${value2}`} />
                  </ListItemButton>
                </ListItem>
              );
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
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
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
                  onClick={onTick}
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
              <IoSettingsOutline className="ml-auto text-2xl hover:text-3xl text-black " />
            </Toolbar>
            <Divider />
            <div className="grid grid-cols-2 gap-4 place-content-between  ">
              <div className="flex space-x-0">
                <div>
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
                  {pos.map((value, index) => (
                    <Table value={value} />
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
                                <div style={{ width: 270 }}>
                                  <ReactSearchAutocomplete
                                    items={items}
                                    onSearch={handleOnSearch}
                                    onHover={handleOnHover}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                    autoFocus
                                    formatResult={formatResult}
                                    styling={{ borderRadius: "2px" }}
                                  />
                                </div>
                              </header>
                            </div>
                          </div>
                          <br />
                          <div className="bg-white w-70 h-64 border-black border-[0.5px]">
                            <div id="run0"></div>
                            <div id="run1"></div>
                            <div id="run2"></div>
                            <div id="run3"></div>
                            <div id="run4"></div>
                            <div id="run5"></div>
                            <div id="run6"></div>
                            <div id="run7"></div>
                            <div id="run8"></div>
                            <div id="run9"></div>
                          </div>
                        </div>
                        <div className="page signup">
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={value}
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
                          <div className="border-black border-[0.5px]">
                            <ListCheckboxes visible={value}></ListCheckboxes>
                          </div>
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
