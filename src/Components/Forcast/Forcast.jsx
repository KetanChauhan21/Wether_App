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
  let weeksday = days.slice(daysData, days.length).concat(days.slice(0,daysData))
  console.log(weeksday);

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
                    <p>this is good</p>
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
