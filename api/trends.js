// Vercel Serverless Function: GET /api/trends
export default function handler(req, res) {
  // 1) CDN 캐시 (edge), 2) 브라우저 캐시 무효화
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=600'); // 10분
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // TODO: 여기를 DB/외부 API 연동으로 교체해도 됨
  const data = {
    updated: new Date().toISOString(),
    items: [
      { keyword: "인공지능" },
      { keyword: "아이유" },
      { keyword: "폭염" },
      { keyword: "환율" },
      { keyword: "K-팝" },
      { keyword: "손흥민" },
      { keyword: "조국" }
    ]
  };

  res.status(200).json(data);
}
