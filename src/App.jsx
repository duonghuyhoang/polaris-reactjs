/* eslint-disable react/no-children-prop */
import { useState, useCallback } from "react";
import {
  Frame,
  ContextualSaveBar,
  Checkbox,
  Select,
  TextField,
  LegacyCard,
  Tabs,
  InlineError,
} from "@shopify/polaris";
import "./App.css";
import Collapse from "./components/collapse/collapse";
import titleCollapse from "./contexts";

function App() {
  const [disabled, setDisabled] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectLayout, setSelectLayout] = useState("");
  const [selectCalendar, setSelectCalendar] = useState("");
  const [selectCalendarLanguage, setSelectCalendarLanguage] = useState("");
  const [selectFirstDay, setSelectFirstDay] = useState("");
  const [selectDateFormat, setSelectDateFormat] = useState("");
  const [checkedAlwaysOpen, setSheckedAlwaysOpen] = useState(false);
  const [inputThemeColor, setInputThemeColor] = useState("#ffffff");
  const [inputTitleColor, setInputTitleColor] = useState("#ffffff");
  const [inputRequireMess, setInputRequireMess] = useState("#ffffff");
  const [checkedShowTheCalendar, setCheckedShowTheCalendar] = useState(false);
  const [checkedRequireTheDelivery, setCheckedRequireTheDelivery] =
    useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDeliveryLabel, setInputDeliveryLabe] = useState("");
  const [inputDeliveryTitle, setInputDeliveryTitle] = useState("");
  const [inputDeliveryTimeTitle, setDeliveryTimeTitle] = useState("");
  const [inputRequiredMessageText, setRequiredMessageText] = useState("");
  const [inputCustomCSS, setInputCustomCSS] = useState("");
  const [inputStoreLabel, setInputStoreLabel] = useState("");
  const [inputPickupLocation, setInputPickupLocation] = useState("");
  const [inputStoreDateTitle, setInputStoreDateTitle] = useState("");
  const [inputStoreTimeTitle, setInputStoreTimeTitle] = useState("");
  const [inputRequiredMessageTextPickup, setInputRequiredMessageTextPickup] =
    useState("");

  const handleSelectLayout = (value) => {
    setSelectLayout(value);
  };

  const handleSelectCalendar = (value) => {
    setSelectCalendar(value);
  };

  const handleSelectCalendarLanguage = (value) => {
    setSelectCalendarLanguage(value);
  };

  const handleSelectFirstDay = (value) => {
    setSelectFirstDay(value);
  };

  const handleSelectDateFormat = (value) => {
    setSelectDateFormat(value);
  };
  const handleColorChangeInputThemeColor = (value) => {
    setInputThemeColor(value);
  };
  const handleColorChangeInputTitleColor = (value) => {
    setInputTitleColor(value);
  };
  const handleColorChangeInputRequireMess = (value) => {
    setInputRequireMess(value);
  };

  const handleColorChangeThemeColor = (value) => {
    setInputThemeColor(value.target.value);
  };

  const handleColorChangeTitleColor = (value) => {
    setInputTitleColor(value.target.value);
  };

  const handleColorChangeRequireMess = (value) => {
    setInputRequireMess(value.target.value);
  };
  const handlecheckedAlwaysOpen = useCallback((newChecked) => {
    setSheckedAlwaysOpen(newChecked);
    if (newChecked) {
      setDisabled(false);
    }
  }, []);

  const handleCheckedShowTheCalendar = useCallback((newChecked) => {
    setCheckedShowTheCalendar(newChecked);
    if (newChecked) {
      setDisabled(false);
    }
  }, []);

  const handleCheckedRequireTheDelivery = useCallback((newChecked) => {
    setCheckedRequireTheDelivery(newChecked);
    if (newChecked) {
      setDisabled(false);
    }
  }, []);

  const handleChangeTitle = (value) => {
    setInputTitle(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeDeliveryLabel = (value) => {
    setInputDeliveryLabe(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleDeliveryTitle = (value) => {
    setInputDeliveryTitle(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeDeliveryTimeTitle = (value) => {
    setDeliveryTimeTitle(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeRequiredMessageText = (value) => {
    setRequiredMessageText(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeCustomCSS = (value) => {
    setInputCustomCSS(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeStoreLabel = (value) => {
    setInputStoreLabel(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handlePickupLocation = (value) => {
    setInputPickupLocation(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeStoreDateTitle = (value) => {
    setInputStoreDateTitle(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeStoreTimeTitle = (value) => {
    setInputStoreTimeTitle(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleChangeRequiredMessageTextPickup = (value) => {
    setInputRequiredMessageTextPickup(value);
    if (value.trim() !== "") {
      setDisabled(false);
    }
  };
  const handleTabChange = useCallback((selectedTabIndex) => {
    setSelected(selectedTabIndex);
  }, []);
  const tabs = [
    {
      id: "all-customers-fitted-2",
      content: "Delivery Date",
      accessibilityLabel: "All customers",
      panelID: "all-customers-fitted-content-2",
    },
    {
      id: "accepts-marketing-fitted-2",
      content: "Store Pickup",
      panelID: "accepts-marketing-fitted-Ccontent-2",
    },
  ];

  const renderTabContent = () => {
    switch (selected) {
      case 0:
        return (
          <div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Title'
                value={inputTitle}
                onChange={handleChangeTitle}
              />
              {hasError && (
                <InlineError
                  message='Please enter a title'
                  fieldID='inputTitle'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Delivery date label'
                value={inputDeliveryLabel}
                onChange={handleChangeDeliveryLabel}
              />
              {hasError && (
                <InlineError
                  message='Please enter a delivery date label'
                  fieldID='inputDeliveryLabel'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Delivery date title'
                value={inputDeliveryTitle}
                onChange={handleDeliveryTitle}
              />
              {hasError && inputDeliveryTitle && (
                <InlineError
                  message='Please enter a delivery date title'
                  fieldID='inputDeliveryTitle'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Delivery time title'
                value={inputDeliveryTimeTitle}
                onChange={handleChangeDeliveryTimeTitle}
              />
              {hasError && inputDeliveryTimeTitle.trim() !== "" && (
                <InlineError
                  message='Please enter a delivery time title'
                  fieldID='inputDeliveryTimeTitle'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Required message text'
                value={inputRequiredMessageText}
                onChange={handleChangeRequiredMessageText}
              />
              {hasError && inputRequiredMessageText.trim() !== "" && (
                <InlineError
                  message='Please enter a required message text'
                  fieldID='inputRequiredMessageText'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Custom CSS'
                value={inputCustomCSS}
                onChange={handleChangeCustomCSS}
                multiline={4}
                autoComplete='off'
              />
              {hasError && inputCustomCSS.trim() !== "" && (
                <InlineError
                  message='Please enter a custom CSS'
                  fieldID='inputCustomCSS'
                />
              )}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Store pickup label'
                value={inputStoreLabel}
                onChange={handleChangeStoreLabel}
              />
              {selected === 0 && inputStoreLabel.trim() !== "" && (
                <InlineError
                  message='Please enter a store pickup label'
                  fieldID='inputStoreLabel'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Message text to require buyers to choose a pickup location'
                value={inputPickupLocation}
                onChange={handlePickupLocation}
              />
              {selected === 0 && inputPickupLocation.trim() !== "" && (
                <InlineError
                  message='Please enter a message text to require buyers'
                  fieldID='inputPickupLocation'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Store pickup date title'
                value={inputStoreDateTitle}
                onChange={handleChangeStoreDateTitle}
              />
              {selected === 0 && inputStoreDateTitle.trim() !== "" && (
                <InlineError
                  message='Please enter a store pickup date title'
                  fieldID='inputStoreDateTitle'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Store pickup time title'
                value={inputStoreTimeTitle}
                onChange={handleChangeStoreTimeTitle}
              />
              {selected === 0 && inputStoreTimeTitle.trim() !== "" && (
                <InlineError
                  message='Please enter a store pickup time title'
                  fieldID='inputStoreTimeTitle'
                />
              )}
            </div>
            <div className='input-text'>
              {" "}
              <TextField
                label='Required message text'
                value={inputRequiredMessageTextPickup}
                onChange={handleChangeRequiredMessageTextPickup}
              />
              {selected === 0 &&
                inputRequiredMessageTextPickup.trim() !== "" && (
                  <InlineError
                    message='Please enter a required message text'
                    fieldID='inputRequiredMessageTextPickup'
                  />
                )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleAction = () => {
    console.log("a");
    if (
      inputTitle !== "" &&
      inputDeliveryLabel !== "" &&
      inputDeliveryTitle !== "" &&
      inputDeliveryTimeTitle !== "" &&
      inputRequiredMessageText !== "" &&
      inputCustomCSS !== "" &&
      inputStoreLabel !== "" &&
      inputPickupLocation !== "" &&
      inputStoreTimeTitle !== "" &&
      inputRequiredMessageTextPickup !== ""
    ) {
      setHasError(false);
      console.log("Save action triggered");
      console.log("2", hasError);
    } else {
      setHasError(true);
      console.log(hasError);
    }
    if (inputDeliveryTitle) {
      console.log("adasd");
    }
  };

  return (
    <div className='wrapper'>
      <Frame>
        <ContextualSaveBar
          fullWidth
          message='Unsaved changes'
          saveAction={{
            onAction: handleAction,
            loading: false,
            disabled: disabled,
          }}
          discardAction={{
            onAction: () => console.log("add clear form logic"),
          }}
        />

        <h1 className='heading'>Widget Setting</h1>
        <div className='widget-position'>
          <Collapse menuItems={titleCollapse} name={"widget-position"}>
            <div className='wrapper-postition'>
              <Checkbox
                label='Show the calendar at the product page'
                checked={checkedShowTheCalendar}
                onChange={handleCheckedShowTheCalendar}
              />
              <Checkbox
                label='Require the delivery date before checkout'
                checked={checkedRequireTheDelivery}
                onChange={handleCheckedRequireTheDelivery}
              />
            </div>
          </Collapse>
        </div>
        <div className='widget-appearance'>
          <Collapse menuItems={titleCollapse} name={"widget-appearance"}>
            <div>
              <div className='group-input'>
                <div className='select-layout'>
                  {" "}
                  <Select
                    label='Layout'
                    options={[{ label: "Default", value: "default" }]}
                    value={selectLayout}
                    onChange={handleSelectLayout}
                  />
                </div>
                <div className='select-calendar-layout'>
                  {" "}
                  <Select
                    label='Calendar layout'
                    options={[
                      { label: "Calendar", value: "calendar" },
                      { label: "Date list", value: "datelist" },
                    ]}
                    value={selectCalendar}
                    onChange={handleSelectCalendar}
                  />
                  <div style={{ textAlign: "left", marginTop: "5px" }}>
                    {" "}
                    <Checkbox
                      label='Always open the calendar'
                      checked={checkedAlwaysOpen}
                      onChange={handlecheckedAlwaysOpen}
                    />
                  </div>
                </div>
              </div>
              <div className='group-input'>
                <div className='select-calendar-language'>
                  <Select
                    label='Calendar language'
                    options={[
                      { label: "English", value: "english" },
                      { label: "Spanish", value: "spanish" },
                      { label: "German", value: "german" },
                      { label: "Chinese", value: "chinese" },
                      { label: "Japanese", value: "japanese" },
                      { label: "Korean", value: "korean" },
                      { label: "Russian", value: "russian" },
                    ]}
                    value={selectCalendarLanguage}
                    onChange={handleSelectCalendarLanguage}
                  />
                </div>
                <div className='select-first-day-calendar'>
                  <Select
                    label='First day of calendar'
                    options={[
                      { label: "Monday", value: "monday" },
                      { label: "Tuesday", value: "tuesday" },
                      { label: "Wednesday", value: "wednesday" },
                      { label: "Thursday", value: "thursday" },
                      { label: "Friday", value: "friday" },
                      { label: "Saturday", value: "saturday" },
                      { label: "Sunday", value: "sunday" },
                    ]}
                    value={selectFirstDay}
                    onChange={handleSelectFirstDay}
                  />
                </div>
              </div>
              <div className='group-input'>
                <div className='select-date-format'>
                  <Select
                    label='Date Format'
                    options={[
                      { label: "yyyy-mm-dd", value: "yyyy-mm-dd" },
                      { label: "yyyy", value: "yyyy" },
                      { label: "dd mmm yyyy", value: "dd mmm yyyy" },
                      { label: "ww/w", value: "ww/w" },
                    ]}
                    value={selectDateFormat}
                    onChange={handleSelectDateFormat}
                  />
                </div>
                <div className='input-calendar-theme-color'>
                  {" "}
                  <TextField
                    label='Theme color'
                    value={inputThemeColor}
                    onChange={handleColorChangeInputThemeColor}
                  />
                  <input
                    className='input-color-picker-1'
                    type='color'
                    onChange={handleColorChangeThemeColor}
                    value={inputThemeColor}
                  />
                </div>
              </div>{" "}
              <div className='group-input'>
                <div className='input-title-color'>
                  {" "}
                  <TextField
                    label='Title color'
                    value={inputTitleColor}
                    onChange={handleColorChangeInputTitleColor}
                  />
                  <input
                    className='input-color-picker-2'
                    type='color'
                    onChange={handleColorChangeTitleColor}
                    value={inputTitleColor}
                  />
                </div>
                <div className='input-required-mess'>
                  {" "}
                  <TextField
                    label='Require message text color'
                    value={inputRequireMess}
                    onChange={handleColorChangeInputRequireMess}
                  />
                  <input
                    className='input-color-picker-3'
                    type='color'
                    onChange={handleColorChangeRequireMess}
                    value={inputRequireMess}
                  />
                </div>
              </div>
            </div>
          </Collapse>
        </div>
        <div className='widget-text'>
          <Collapse menuItems={titleCollapse} name={"widget-text"}>
            <div>
              <Tabs
                tabs={tabs}
                selected={selected}
                onSelect={handleTabChange}
                fitted
              >
                <LegacyCard.Section>{renderTabContent()}</LegacyCard.Section>
              </Tabs>
            </div>
          </Collapse>
        </div>
      </Frame>
    </div>
  );
}

export default App;
