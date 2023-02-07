import React, { useEffect, useState } from "react";
import { NavLink, redirect } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import CompareCardName from "./components/CompareCardName";
import CompareCard from "./components/CompareCard";
import {
  GreenButton,
  WhiteButton,
} from "../../shared/components/buttons/CustomButtons";

const CompareView = () => {
  const [compareItems, setCompareItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("compareItems")) {
      setCompareItems(JSON.parse(localStorage.getItem("compareItems")));
    } else {
      redirect("get-started");
    }
  }, []);

  return (
    <Box sx={{ margin: "120px 0" }}>
      <Container>
        {!compareItems.length ? (
          <Typography textAlign="center" component="p">
            No data to compare
          </Typography>
        ) : (
          <>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ marginBottom: "60px" }}
            >
              Compare
            </Typography>
            <Grid container spacing={2} rowGap={4}>
              {compareItems.map((item) => {
                const itemIndex = compareItems.findIndex(
                  (el) => el.ID === item.ID
                );
                return (
                  <Grid item xs={6} key={`compare-item--name__${item.ID}`}>
                    <CompareCardName name={item.Name} />
                    <CompareCard
                      item={item.Reliability}
                      title="Our Rating"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Reliability >
                        compareItems[1].Reliability
                          ? compareItems[0].Reliability
                          : compareItems[1].Reliability
                      }
                    />
                    <CompareCard
                      item={item.Minimuns}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Minimuns > compareItems[1].Minimuns
                          ? compareItems[0].Minimuns
                          : compareItems[1].Minimuns
                      }
                    />
                    <CompareCard
                      item={item.Instrument_Offering}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Instrument_Offering >
                        compareItems[1].Instrument_Offering
                          ? compareItems[0].Instrument_Offering
                          : compareItems[1].Instrument_Offering
                      }
                    />
                    <CompareCard
                      item={item.Execution}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Execution > compareItems[1].Execution
                          ? compareItems[0].Execution
                          : compareItems[1].Execution
                      }
                    />
                    <CompareCard
                      item={item.Customer_Support}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Customer_Support >
                        compareItems[1].Customer_Support
                          ? compareItems[0].Customer_Support
                          : compareItems[1].Customer_Support
                      }
                    />
                    <CompareCard
                      item={item.Easy_Registration}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Easy_Registration >
                        compareItems[1].Easy_Registration
                          ? compareItems[0].Easy_Registration
                          : compareItems[1].Easy_Registration
                      }
                    />
                    <CompareCard
                      item={item.Funding_bank}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Funding_bank >
                        compareItems[1].Funding_bank
                          ? compareItems[0].Funding_bank
                          : compareItems[1].Funding_bank
                      }
                    />
                    <CompareCard
                      item={item.Funding_cards}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Funding_cards >
                        compareItems[1].Funding_cards
                          ? compareItems[0].Funding_cards
                          : compareItems[1].Funding_cards
                      }
                    />
                    <CompareCard
                      item={item.Funding_other}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Funding_other >
                        compareItems[1].Funding_other
                          ? compareItems[0].Funding_other
                          : compareItems[1].Funding_other
                      }
                    />
                    <CompareCard
                      item={item.Communications}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Communications >
                        compareItems[1].Communications
                          ? compareItems[0].Communications
                          : compareItems[1].Communications
                      }
                    />
                    <CompareCard
                      item={item.Platform_off_the_shelf_quality}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Platform_off_the_shelf_quality >
                        compareItems[1].Platform_off_the_shelf_quality
                          ? compareItems[0].Platform_off_the_shelf_quality
                          : compareItems[1].Platform_off_the_shelf_quality
                      }
                    />
                    <CompareCard
                      item={item.Platform_proprietary_quality}
                      title="Numbers of Stock"
                      itemIndex={itemIndex}
                      selected={
                        compareItems[0].Platform_proprietary_quality >
                        compareItems[1].Platform_proprietary_quality
                          ? compareItems[0].Platform_proprietary_quality
                          : compareItems[1].Platform_proprietary_quality
                      }
                    />
                    <Box sx={{ margin: "30px 0 " }}>
                      {compareItems[0] ? (
                        <WhiteButton component={NavLink} to="">
                          Choose {compareItems[0].Name}
                        </WhiteButton>
                      ) : (
                        <GreenButton component={NavLink} to="">
                          Choose {compareItems[1].Name}
                        </GreenButton>
                      )}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default CompareView;
