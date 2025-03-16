
import { registerAs } from "@nestjs/config";

export default registerAs('momo', () => ({
  accessKey: process.env.MOMO_ACCESS_KEY,
  secretKey: process.env.MOMO_SECRET_KEY,
  partnerCode: process.env.MOMO_PARTNER_CODE,
  redirectUrl: process.env.MOMO_REDIRECT_URL,
  ipnUrl: process.env.MOMO_IPN_URL
}))

