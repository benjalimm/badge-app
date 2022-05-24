export default function generateBadgeEmail(
  { 
    title,
    content,
    badgeLevel,
    scanLink,
    entityName,
    entityContractDisplayAddress,
    recipientDisplayAddress
  } : { 
    title: string, 
    content: string, 
    badgeLevel: number, 
    scanLink: string, 
    entityName: string, 
    entityContractDisplayAddress: string, 
    recipientDisplayAddress: string 
  }
): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
<!--[if mso]>
    <style>
        * {
            font-family: sans-serif !important;
        }
    </style>
<![endif]-->

<!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
<!--[if !mso]><!-->
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;700&display=swap' rel='stylesheet' type='text/css'>
<!--<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: verdana,geneva,sans-serif;
      font-size: 16px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #000000;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start-->

     <!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#993300" data-body-style="font-size:16px; font-family:verdana,geneva,sans-serif; color:#000000; background-color:#000000;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F9F5F2">
            <tr>
              <td valign="top" bgcolor="#F9F5F2" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#516775; text-align:left;" bgcolor="#000000" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p>${entityName}} sent you a Badge</p>
      </td>
    </tr>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a1e5c40a-ec5a-4714-a92c-6986c7890e13" data-mc-module-version="2019-10-22">
    <!--<tbody>-->
    <!--  <tr>-->
    <!--    <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: right"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #ffffff; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #000000; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: arial, helvetica, sans-serif">Email not displaying correctly? </span><a href="{{Weblink}}"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; outline-color: initial; outline-style: none; outline-width: initial; color: #0055b8; text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; transition-property: color; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #000000; font-family: arial, helvetica, sans-serif">View it</span></a><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #ffffff; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #000000; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: arial, helvetica, sans-serif"> in your browser.</span></div><div></div></div></td>-->
    <!--  </tr>-->
    <!--</tbody>-->
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="qa8oMphYHuL7xyQrTVscgD">
      <tbody><tr>
        <td style="font-size:6px; line-height:10px; padding:30px 0px 0px 0px;" valign="top" align="center"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif;  width:100px;;  !important; height:auto !important;" src="https://www.dropbox.com/s/bhxg4zvk80p8uxt/BadgeEmailLogo..png?dl=1" alt="Badge" data-responsive="true" data-proportionally-constrained="false"></td>
      </tr>
    </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="bdzDb4B4pnnez4W7L1KpxJ">
      <tbody><tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="bKZJcGfRPJb7R2nzyp6ZB6">
      <tbody><tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; width:200px; !important; height:auto !important; border-width:5px; border-color: white;" src="https://www.dropbox.com/s/ykjmakyjfbde3qy/spinningBadgeGif.gif?dl=1" alt="" width="600" data-responsive="true" data-proportionally-constrained="false"></td>
      </tr>
    </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="gNWHzBzkFeWH4JDKd2Aikk" data-mc-module-version="2019-10-22">
      <tbody><tr>
        <td style="background-color:#000000; padding:20px 0px 0px 0px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor="#000000"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 20px; font-family: inter"><strong>${title}}</strong></span></div><div></div></div></td>
      </tr>
    </tbody>
    <tbody><tr>
        <td style="background-color:#000000; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor="#000000"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 10px; font-family: inter; padding: 5px 15px; border-radius: 15px; background-color: blue;"><strong>Badge level ${badgeLevel}}</strong></span></div><div></div></div></td>
      </tr>
    </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="bA2FfEE6abadx6yKoMr3F9" data-mc-module-version="2019-10-22">
      <tbody><tr>
        <td style="background-color:#000000; line-height:normal; text-align:inherit; display: flex; justify-content: center; margin-top: 5px;" height="100%" valign="top" align="center" bgcolor="#ffffff" ><div><div style="font-family: inherit; text-align: center; max-width:250px; text-align:center; background-color: clear;"><span style="font-family: inter; color: white; font-size: 15px; ">${content}}</span></div><div></div></div></td>
      </tr>
    </tbody>
    <tbody><tr>
        <td style="background-color:#000000; line-height:normal; text-align:inherit; display: flex; justify-content: center; margin-top: 40px;" height="100%" valign="top" align="center" bgcolor="#ffffff" ><div><div style="font-family: inherit; text-align: center; max-width:250px; text-align:center; background-color: clear;"><span style="font-family: inter; color: white; font-size: 12px; font-weight: bold; ">From: ${entityName}}</span></div><div></div></div></td>
      </tr>
    </tbody>
    <tbody><tr>
        <td style="background-color:#000000; line-height:normal; text-align:inherit; display: flex; justify-content: center; align-item: center; margin-top: 0px;" height="100%" valign="top" align="center" bgcolor="#ffffff" ><div><div style="font-family: inherit; text-align: center; max-width:200px; text-align:center; background-color: clear;"><span style="font-family: inter; color: white; font-size: 10px; font-weight: normal; ">(${entityContractDisplayAddress}})</span></div><div></div></div></td>
      </tr>
    </tbody>
    <tbody><tr>
        <td style="background-color:#000000; line-height:normal; text-align:inherit; display: flex; justify-content: center; margin-top: 10px;" height="100%" valign="top" align="center" bgcolor="#ffffff" ><div><div style="font-family: inherit; text-align: center; max-width:250px; text-align:center; background-color: clear;"><span style="font-family: inter; color: white; font-size: 12px; font-weight: bold; ">To: You</span></div><div></div></div></td>
      </tr>
    </tbody>
    <tbody><tr>
        <td style="background-color:#000000; line-height:normal; text-align:inherit; display: flex; justify-content: center; align-item: center; margin-top: 0px;" height="100%" valign="top" align="center" bgcolor="#ffffff" ><div><div style="font-family: inherit; text-align: center; max-width:200px; text-align:center; background-color: clear;"><span style="font-family: inter; color: white; font-size: 10px; font-weight: normal; ">(${entityContractDisplayAddress}})</span></div><div></div></div></td>
      </tr>
    </tbody>
    
    
    
    
    </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="dnNq8YR2nu8DNzse1aZUWt">
      <tbody><tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ei2zeSTvjHYmn1YhKSUfaB">
      <tbody><tr>
        <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
            <tbody><tr>
              <td style="padding:0px 0px 10px 0px;" bgcolor="#000000"></td>
            </tr>
          </tbody></table>
        </td>
      </tr>
    </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vFfA6A3u2gVDK2QbpXDqPo">
      <tbody><tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2q8x8zTfLywQieSSYmZbus" data-mc-module-version="2019-10-22">
      <tbody><tr>
      <!--  <td style="padding:18px 0px 18px 0px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor=""><div><div style="font-family: inherit; text-align: center"><span style="color: #993300; font-size: 28px; font-family: inter"><strong>Hungry for style inspiration?</strong></span></div><div></div></div></td>-->
      <!--</tr>-->
      </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="bKHWQMgPkL5opYCkxiM6aS"><tbody><tr><td align="center" class="outer-td" style="padding:0px 0px 0px 0px;" bgcolor=""><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#993300" class="inner-td" style="text-align:center; background-color:inherit;"><a style="background-color:clear; border-width: 0px; color:#ffffff; display:inline-block; font-family:inter; font-size:10px; font-weight:bold; letter-spacing:1px;  text-align:center; text-decoration:underline; border-style:solid;" href=${scanLink}} target="_blank">View on Polygon scan</a></td></tr></tbody></table></td></tr></tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="qkfYAswHNSwNpwb1p7m4gC">
      <tbody>
    </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="bKHWQMgPkL5opYCkxiM6aS"><tbody><tr><td align="center" class="outer-td" style="padding:20px 0px 0px 0px;" bgcolor=""><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#993300" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a style="background-color:#141414; border-radius:10px; border-width: 0px; color:#ffffff; display:inline-block; font-family:inter; font-size:12px; font-weight:bold; letter-spacing:1px; line-height:30px; padding:12px 20px 12px 20px; text-align:center; text-decoration:none; border-style:solid;" href={{scanLink}} target="_blank">View on Badge</a></td></tr></tbody></table></td></tr></tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="qkfYAswHNSwNpwb1p7m4gC">
      <tbody>
      
      <tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="qkG1GEG4EZSwoAzbwgoD8v">
      <tbody><tr>

    </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vqDDw7scxs521qMEgEyyuF">
      <tbody><tr>
        <td style="padding:0px 0px 40px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody></table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="811a4d90-5cf8-4edd-afaf-8d7ae129dd7e">
    <!--<tbody>-->
    <!--  <tr>-->
    <!--    <td valign="top" style="padding:0px 0px 0px 0px; font-size:6px; line-height:10px; background-color:#F9F5F2;" align="center">-->
    <!--      <table align="center" style="-webkit-margin-start:auto;-webkit-margin-end:auto;">-->
    <!--        <tbody><tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">-->
    <!--  <a role="social-icon-link" href="https://facebook.com" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">-->
    <!--    <img role="social-icon" alt="Facebook" title="Facebook" src="https://mc.sendgrid.com/assets/social/white/facebook.png" style="height:30px; width:30px;" height="30" width="30">-->
    <!--  </a>-->
    <!--</td><td style="padding: 0px 5px;" class="social-icon-column">-->
    <!--  <a role="social-icon-link" href="https://twitter.com" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">-->
    <!--    <img role="social-icon" alt="Twitter" title="Twitter" src="https://mc.sendgrid.com/assets/social/white/twitter.png" style="height:30px; width:30px;" height="30" width="30">-->
    <!--  </a>-->
    <!--</td><td style="padding: 0px 5px;" class="social-icon-column">-->
    <!--  <a role="social-icon-link" href="https://instagram.com" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">-->
    <!--    <img role="social-icon" alt="Instagram" title="Instagram" src="https://mc.sendgrid.com/assets/social/white/instagram.png" style="height:30px; width:30px;" height="30" width="30">-->
    <!--  </a>-->
    <!--</td><td style="padding: 0px 5px;" class="social-icon-column">-->
    <!--  <a role="social-icon-link" href="https://www.pinterest.com/sendgrid/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">-->
    <!--    <img role="social-icon" alt="Pinterest" title="Pinterest" src="https://mc.sendgrid.com/assets/social/white/pinterest.png" style="height:30px; width:30px;" height="30" width="30">-->
    <!--  </a>-->
    <!--</td></tr></tbody>-->
    <!--      </table>-->
    <!--    </td>-->
    <!--  </tr>-->
    <!--</tbody>-->
  </table><div data-role="module-unsubscribe" class="module unsubscribe-css__unsubscribe___2CDlR" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:center;" data-muid="GRteXBNz7UevhwJ6u6GXE"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div><p style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p></div><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f5F8P1n4pQyU8o7DNMMEyW">
      <tbody><tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody></table></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>`
}