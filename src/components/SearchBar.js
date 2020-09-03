import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function SearchBar(props) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");

  let search = (event) => {
    event.preventDefault();
    // let setSearchText = event.target.elements.searchText.value;
    // console.log("Text: " + searchText);
    const { onFormSubmit } = props;
    onFormSubmit(searchText);
  };

  let handleChange = (event) => {
    //console.log(event.target.value);
    setSearchText(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box width={1} mt={2} mb={2} height="50%">
        <form onSubmit={search}>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Search"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handleChange}
          />
        </form>
      </Box>
    </div>
  );
}

export default SearchBar;
