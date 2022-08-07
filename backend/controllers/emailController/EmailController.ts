import sgMail from '@sendgrid/mail';
import { BadgeEmailData } from '../../../schemas/BadgeEmailData';

const FROM_EMAIL = "ben@badge.xyz"

class EmailController {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  private async sendEmail(
    toEmail: string, 
    emailName: string, 
    dynamicData: any, 
    templateId: string
  ) {
    const msg = {
      to: toEmail,
      from: {
        email: FROM_EMAIL,
        name: emailName
      },
      dynamicTemplateData: dynamicData,
      templateId: templateId
    }
    return sgMail.send(msg)
  }

  async sendBadgeEmail(toEmail: string, badgeEmailData: BadgeEmailData) {
    return this.sendEmail(toEmail, "Badge.", badgeEmailData, "d-8f9af7d559054eb6b878f9554c36e162")
  }

}

const emailController = new EmailController();
export default emailController;