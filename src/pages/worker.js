name = "Workers AI" 
type = "javascript"  

[build]
command = "npm run build"  

[env.production]
route = "https://my-domain.com/*" 
zone_id = "your-zone-id"  
account_id = "5dOuatCzyUIf8bFVusTiCralIUoqlJINwXSefq7d"  

[workers_dev]
route = ""  
