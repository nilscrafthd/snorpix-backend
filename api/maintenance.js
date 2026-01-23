// api/maintenance.js
// Platziere diese Datei in einem "api" Ordner in deinem Vercel-Projekt

export default function handler(req, res) {
  // CORS Headers damit Roblox zugreifen kann
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS request (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Nur GET-Anfragen erlauben
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  // Hier kannst du den Maintenance-Status ändern
  // true = Wartungsmodus AN (Flat World)
  // false = Normal Mode (Alles lädt)
  const maintenanceStatus = {
    maintenance: false,  // Ändere dies zu true für Wartungsmodus
    message: "Server läuft normal",
    lastUpdated: new Date().toISOString()
  };
  
  res.status(200).json(maintenanceStatus);
}