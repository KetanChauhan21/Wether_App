import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
  "friday",
  "Saturday",
];

const Forcast = ({ data }) => {
  const daysData = new Date().getDay();
  let weekDays;

  for (let i = 0; i < days.length; i++) {
    if (i === daysData) {
      weekDays = days[daysData];
    }
  }

  console.log(weekDays);

  return (
    <>
      <label>Daily Forcast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((val, indx) => {
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                return (
                <>
                  <div key={indx}>
                    <img
                      src={`icons/${val.weather[0].icon}.png`}
                      alt="weather icon"
                      className="w-20 h-20"
                    />
                  </div>
                </>
                );
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>;
        })}
      </Accordion>
    </>
  );
};

export default Forcast;
