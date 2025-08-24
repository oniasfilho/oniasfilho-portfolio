import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const country = req.headers['x-vercel-ip-country'] as string;
  const locale = country === 'BR' ? 'pt-BR' : 'en';
  
  res.status(200).json({ locale, country });
}
