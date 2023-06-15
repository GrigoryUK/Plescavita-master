import { loadingImg } from "./loadingImg/loadingImg";
import { smoothHeader } from "./smoothHeader/smoothHeader";
import {example} from "./shared/import";
import {tabsCatalog, tabsProfile} from "./tabs/tabs";
import dropdownLink from "./dropdown/dropdownLink";
import { accordion } from "./accordion/accordion";
import { checkboxAddress, checkboxCart } from "./checkbox/checkbox";
import { modalProfile } from "./modal/modal";
import { maskPhone, validateLogin, validateRegister } from "./validation/validation";
import sliderApp from "./slider/slider";
import profileData from "./profileData/profileData";
import addAddress from "./addAddress/addAddress";
import counterPrice from "./counterPrice/counterPrice";

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  example()
  loadingImg()
  smoothHeader()
  tabsCatalog()
  tabsProfile()
  dropdownLink()
  accordion()
  checkboxAddress()
  modalProfile()
  maskPhone()
  validateRegister()
  validateLogin()
  checkboxCart()
  sliderApp()
  profileData()
  addAddress()
  counterPrice()
});

