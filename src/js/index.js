import { infoHintLoaded } from "./modules/info-hint";
import { swiper } from "./modules/swiper";
import { tabControlsLoaded } from "./modules/tab-controls";
import { navMenuLoaded } from "./modules/nav-menu";

// NAV MENU OPEN
navMenuLoaded();
// Start infoHintLoaded function for activate ToolTips
infoHintLoaded();
// Start swiper on page
swiper();
//  Tab conrols script
tabControlsLoaded();