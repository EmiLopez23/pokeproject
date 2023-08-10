import { Box, LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import "../styles/BaseStats.css"

export default function BaseStats({stats}){
    return <Box sx={{ flexGrow: 1 }}>
    <h3>Base Stats</h3>
    {stats?.map((stat, index) => <div key={index} className="stat">
        <div style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
        </div>
        <LinearProgress variant="determinate" value={stat.base_stat > 100 ? 100 : stat.base_stat} sx={{
            height: 25,
            borderRadius: 1,
            [`&.${linearProgressClasses.colorPrimary}`]: { backgroundColor: "rgb(114, 114, 114)" },
            [`& .${linearProgressClasses.bar}`]: { borderRadius: 1, backgroundColor: '#1e7ad0' }
        }} />
    </div>)}
</Box>
}