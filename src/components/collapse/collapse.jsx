/* eslint-disable react/prop-types */
import { Card, Collapsible, Icon } from "@shopify/polaris";
import "./collapse.css";
import { useState, useCallback, useEffect } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@shopify/polaris-icons";
// eslint-disable-next-line react/prop-types
const Collapse = ({ menuItems, children, name }) => {
  const [open, setOpen] = useState(true);
  const [titleName, setTitleName] = useState("");
  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  useEffect(() => {
    if (name == "widget-position") {
      setTitleName(menuItems[0]);
    } else if (name == "widget-appearance") {
      setTitleName(menuItems[1]);
    } else {
      setTitleName(menuItems[2]);
    }
  }, [name]);

  return (
    <div className='card-collapse'>
      {" "}
      <Card>
        <div onClick={handleToggle} id='button-toggle-collapse'>
          <div className='wrapper-title'>
            <Icon source={titleName && titleName.icon} tone='inherit' />
            <div className='title-callapse'>
              {" "}
              {titleName && titleName.title}
            </div>
          </div>

          <div className='icon-collapse'>
            <Icon
              source={!open ? ChevronRightIcon : ChevronDownIcon}
              tone='inherit'
            />
          </div>
        </div>
        <Collapsible
          open={open}
          id='basic-collapsible'
          transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
          expandOnPrint
        >
          {" "}
          {children}
        </Collapsible>
      </Card>
    </div>
  );
};

export default Collapse;
