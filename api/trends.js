// Vercel Serverless Function
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    updated: new Date().toISOString(),
    items: [
      { keyword: "조국" },
      { keyword: "폭염" },
      { keyword: "손흥민" },
      { keyword: "환율" },
      { keyword: "K-팝" }
    ]
  })
