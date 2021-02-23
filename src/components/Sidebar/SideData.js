import React from 'react';
// import SidebarRow from './SidebarRow'
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const SideBarData = [
          {
                    title: "Home",
                    path: "/",
                    icon:<HomeIcon/>
          },
          {
                    title: "Trending",
                    path: "/",
                    icon:<WhatshotIcon />
          },
          {
                    title: "Subscriptions",
                    path: "/",
                    icon:<SubscriptionsIcon/>
          },
          {
                    title: "Contact",
                    path: "/",
                    icon:<ContactSupportIcon/>
          },
          {
                    title: "History",
                    path: "/",
                    icon:<HistoryIcon />
          },
          {
                    title: "Show More",
                    path: "/",
                    icon:<ExpandMoreIcon />
          }

]

export default SideBarData