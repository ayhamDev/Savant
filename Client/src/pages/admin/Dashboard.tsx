import { SchoolRounded, PeopleAltRounded, BusinessCenterRounded, WidgetsRounded, ClassRounded, AttachMoneyRounded, AccountBoxRounded,CalendarMonth, NewspaperRounded, CampaignRounded } from '@mui/icons-material'
import { colors } from '@mui/material'
import React from 'react'
import DashboardPart from '../../components/DashboardPart'



export default function Dashboard() {
  const SideBarItems = [
    {
    title: "Coordinator",
    items: [
      { label: "Student",
       icon: <SchoolRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Teacher",
       icon: <PeopleAltRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Employee",
       icon: <BusinessCenterRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Major",
       icon: <WidgetsRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Class",
       icon: <ClassRounded sx={{ color: colors.grey[500] }}  /> 
      },
      ,
      { label: "Calendar",
       icon: <CalendarMonth sx={{ color: colors.grey[500] }}  /> 
      },
    ]
    },
    {
      title: "Financial",
      items: [
        { label: "Income & Expence" , 
        icon: <AttachMoneyRounded sx={{ color: colors.grey[500] }} /> 
        },
        { label: "Human Resources",
        icon: <AccountBoxRounded sx={{ color: colors.grey[500] }}  /> 
        },
      ]
    },
    {
    title: "CMS",
    items: [
      { label: "Website" , 
      icon: <AttachMoneyRounded sx={{ color: colors.grey[500] }} /> 
      },
      { label: "News",
      icon: <NewspaperRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Announcements",
      icon: <CampaignRounded sx={{ color: colors.grey[500] }}  /> 
      },
    ]
  },



]
  return (
    <DashboardPart items={SideBarItems}> 
    {/* Dashboard Content */}
      <div>
      </div>
    </DashboardPart>
  )
}
