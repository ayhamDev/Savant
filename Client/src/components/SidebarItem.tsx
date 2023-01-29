import { Box, Divider, ListItem, colors, ListItemButton, ListItemIcon, ListItemText,Tooltip } from "@mui/material"
export default function SidebarItemSmall({ role,open }: {open : boolean, role: { title?:string, items: { label: string, icon: JSX.Element }[]} }) {
  return (

    <Box key={role.title ? role.title : Math.random() * 174183.6 / 32}>
      {
        role.title ? 
        <>
        <Divider style={{ background: "#d9d9d9",opacity: 0.2 }} />
        {open ?
         <ListItem sx={{ pb: 0 }}>
            <ListItemText sx={{ color: colors.grey[200], opacity: 0.5}} primary={role.title} />
          </ListItem>
          : ""
          
         } 
        </>
        : ""
      }
        
        {
        role.items.map((item,index) => (
        <div key={index}>
            {
              !open ?
              <Tooltip title={item.label} placement="right-end">
              
              <ListItem disablePadding sx={{ display: 'block',color: colors.grey[300],p:"5px 10px" }}>
        <ListItemButton
            sx={{
            borderRadius: "15px",
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            }}
        >
            <ListItemIcon
            sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
            }}
            >
            {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />

        </ListItemButton>
        </ListItem>

              </Tooltip>
          :
          <ListItem disablePadding sx={{ display: 'block',color: colors.grey[300],p:"5px 10px" }}>
            <ListItemButton
                sx={{
                borderRadius: "15px",
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                }}
            >
                <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                }}
                >
                {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />

              </ListItemButton>
            </ListItem>

            }
          </div>
        ))
        }

    </Box>

  )
}

