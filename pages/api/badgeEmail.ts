import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import { BadgeEmailData } from '../../schemas/BadgeEmailData';
import generateBadgeEmail from '../../utils/emails/badgeEmailFormatter';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(`Body: ${req.body}`)
  const body = JSON.parse(req.body);
  const badgeEmailData: BadgeEmailData = body.data
  const email: string  = body.email;
  console.log(`Sending email to ${email} with data: ${badgeEmailData}`);
  
  const msg = {
    to: email,
    from: "ben@badge.xyz",
    subject: `Badge labs sent you a Badge - Lead Contributor`,
    dynamicTemplateData: badgeEmailData,
    templateId: "d-8f9af7d559054eb6b878f9554c36e162"
  }
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
      res.status(200).json({ success: true })
    })
    .catch((error) => {
      console.error(error)
      console.log(error.response.body)
      res.status(500).json(error);
    })
}