import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { FormControl, Select, OutlinedInput, MenuItem, useTheme, Typography, Button, Grid } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages = [
  { key: "en", name: "English" },
  { key: "hi", name: "हिन्दी" },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [booksCount, setBooksCount] = useState(0)

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const index = languages.findIndex(l => l.name === value)
    if (index === -1) {
      i18n.changeLanguage("en")
      return
    }
    i18n.changeLanguage(languages[index].key)


    setPersonName(value);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>{t("welcome", { name: "Sanjeev" })}</h2>

        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Typography variant="body1"><Trans>selectLanguage</Trans></Typography>
          <Select
            displayEmpty
            value={personName}
            onChange={e => handleChange(e)}
            input={<OutlinedInput />}

            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {languages.map((language) => {
              const key = language.key;
              const name = language.name;
              return (<MenuItem
                key={key}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>)
            })}
          </Select>
        </FormControl>

        <Grid container mt={2}>
          <Grid item xs={12}>
            <Button onClick={() => setBooksCount(bookCount => bookCount + 1)} variant="contained">
              {/* <Trans values={{count: booksCount}}>count</Trans> */}
              +{booksCount}
            </Button>
            <Button onClick={() => setBooksCount(bookCount => bookCount = 0)} variant="contained" style={{marginLeft: "0.5rem"}}>
              <Trans values={{count: booksCount}}>remove</Trans>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <h3>{t("count", { count: booksCount })}</h3>
          </Grid>
        </Grid>

      </div>
    </div>
  );
}
